import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import './TransactionsLog.css';
import Sidebar from './components/shared/Sidebar';
import { AppBar, Toolbar, Typography } from '@mui/material';

const TEST_CSV = '/test/test_transactions.csv';
const TransactionLog = () => {
    const [transactions, setTransactions] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [orderType, setOrderType] = useState("All");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });

    useEffect(() => {
        fetchTransactionsFromAPI().catch(() => fetchTransactionsFromCSV());
    }, []);

    const fetchTransactionsFromAPI = async () => {
        try {
            fetchTransactionsFromCSV();
            // const response = await fetch('http://localhost:5001/api/transactions'); // Replace with your backend URL
            // if (!response.ok) throw new Error('Failed to fetch transactions from API');
            // const data = await response.json();
            // setTransactions(data); // Update state with the fetched data
        } catch (error) {
            fetchTransactionsFromCSV();
        }
    };
    

    const fetchTransactionsFromCSV = async () => {
        fetch(TEST_CSV)
            .then(response => response.text())
            .then(csvData => {
                Papa.parse(csvData, {
                    header: true,
                    skipEmptyLines: true,
                    complete: (result) => {
                        setTransactions(result.data);
                    },
                });
            })
            .catch(error => console.error('Error fetching test CSV:', error));
    };

    const filteredTransactions = transactions
        .filter((transaction) =>
            transaction.transactionId && transaction.transactionId.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .filter((transaction) => 
            orderType === "All" || transaction.orderType === orderType
        )
        .filter((transaction) => {
            if (!startDate && !endDate) return true;
            const transactionDate = new Date(transaction.dateSold);
            const start = startDate ? new Date(startDate) : null;
            const end = endDate ? new Date(endDate) : null;
            return (!start || transactionDate >= start) && (!end || transactionDate <= end);
        });

    const totalAmount = filteredTransactions.reduce((sum, transaction) => sum + parseFloat(transaction.amount || 0), 0);
    const buyPercentage = ((filteredTransactions.filter(t => t.orderType === 'BUY').length / filteredTransactions.length) * 100).toFixed(2);
    const sellPercentage = ((filteredTransactions.filter(t => t.orderType === 'SELL').length / filteredTransactions.length) * 100).toFixed(2);

    const handleSort = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    const sortedTransactions = [...filteredTransactions].sort((a, b) => {
        if (sortConfig.key) {
            const aValue = a[sortConfig.key];
            const bValue = b[sortConfig.key];
            return (sortConfig.direction === 'ascending') ? (aValue > bValue ? 1 : -1) : (aValue < bValue ? 1 : -1);
        }
        return 0;
    });

    const getIcon = (orderType) => {
        return orderType === 'BUY' ? '/assets/buy-icon.png' : '/assets/sell-icon.png';
    };

    return (
        <div className="transaction-log">

        <AppBar
            position="fixed"
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Transaction Log
          </Typography>
        </Toolbar>
      </AppBar>


            <Sidebar/>

            {/* Summary Table */}
            <div className="summary-table">
                <div className="summary-item">
                    <img src="/assets/transactions-icon.png" alt="Transactions" className="summary-icon" />
                    <span className="summary-label">Total Transactions</span>
                    <span className="summary-value">{filteredTransactions.length}</span>
                </div>
                <div className="summary-item">
                    <img src="/assets/coins-icon.png" alt="Total Amount" className="summary-icon" />
                    <span className="summary-label">Total Amount</span>
                    <span className="summary-value">${totalAmount.toFixed(2)}</span>
                </div>
                <div className="summary-item">
                    <img src="/assets/buy-icon.png" alt="Buy Percentage" className="summary-icon" />
                    <span className="summary-label">Buy Percentage</span>
                    <span className="summary-value">{buyPercentage}%</span>
                </div>
                <div className="summary-item">
                    <img src="/assets/sell-icon.png" alt="Sell Percentage" className="summary-icon" />
                    <span className="summary-label">Sell Percentage</span>
                    <span className="summary-value">{sellPercentage}%</span>
                </div>
            </div>
            {/* Search Bar */}
            <div className="search-bar">
                <img src="/assets/search-icon.png" alt="Search" className="search-icon" />
                <input
                    type="text"
                    placeholder="Search by Transaction ID"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
            </div>

            {/* Filters */}
            <div className="filters">
                <div className="filter-container">
                    <label className="filter-label">Filter by Order Type</label>
                    <select value={orderType} onChange={(e) => setOrderType(e.target.value)} className="order-type-filter">
                        <option value="All">All</option>
                        <option value="BUY">BUY</option>
                        <option value="SELL">SELL</option>
                    </select>
                </div>
                <div className="filter-container">
                    <label className="filter-label">Start Date</label>
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="date-filter"
                    />
                </div>
                <div className="filter-container">
                    <label className="filter-label">End Date</label>
                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="date-filter"
                    />
                </div>
            </div>

            {/* Transactions Table */}
            <div className="table-container">
                <table>
                    <thead>
                    <tr>
                <th>
                    <img src="/assets/transactions-icon.png" alt="Transaction ID" className="header-icon" />
                    Transaction ID
                </th>
                <th>
                    Order Type
                </th>
                <th>
                    <img src="/assets//coins-icon.png" alt="Transaction Amount" className="header-icon" />
                    Transaction Amount
                </th>
                <th>
                    <img src="/assets/calendar-icon.png" alt="Date Sold" className="header-icon" />
                    Date Sold
                </th>
            </tr>
                    </thead>
                    <tbody>
                        {sortedTransactions.map((transaction, index) => (
                            <tr key={index}>
                                <td className="transaction-id-cell">{transaction.transactionId}</td>
                                <td>
                                    <img
                                        src={getIcon(transaction.orderType)}
                                        alt={transaction.orderType}
                                        className={`${transaction.orderType ? transaction.orderType.toLowerCase() : ""}-icon`}
                                    />
                                    {transaction.orderType}
                                </td>
                                <td>${transaction.amount}</td>
                                <td>{transaction.dateSold}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TransactionLog;
