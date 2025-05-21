import React, { useState, useEffect } from "react";
import "./MarketPlace.css";
import Papa, { parse } from "papaparse";
import Sidebar from "./components/shared/Sidebar";
import { AppBar, Toolbar, Typography } from "@mui/material";

function Marketplace() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch and parse CSV file when the app loads
  useEffect(() => {
    fetch("/test/test_market_data.csv") // Fetch the CSV from the public folder
      .then((response) => response.text()) // Get the CSV as text
      .then((csvData) => {
        Papa.parse(csvData, {
          complete: (result) => {
            // Process the CSV data
            const parsedItems = result.data.slice(1).map((row) => ({
              id: row[0],
              title: row[1],
              price: parseFloat(row[2]),
              description: row[3],
            }));
            console.log(parsedItems);
            setItems(parsedItems);
            setLoading(false);
          },
          skipEmptyLines: true,
        });
      })
      .catch((error) => {
        console.error("Error fetching the CSV file:", error);
        setLoading(false);
      });
  }, []);

  const handleItemClick = (itemId) => {
    //alert(`You clicked on item ${itemId}`);
    //alert(`You clicked on item ${itemId}`);
  };

  const handleItemBuy = (itemTitle) => {
    alert(`You bought ${itemTitle}`);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter items based on search query
  const filteredItems = items.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="marketplace-container">
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Marketplace
          </Typography>
        </Toolbar>
      </AppBar>

      <Sidebar />
      <h1 className="marketplace-title">Marketplace</h1>

      {/* Search bar */}
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search items..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      {loading ? (
        <p>Loading items...</p>
      ) : (
        <div className="item-list">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div key={item.id} className="item-card">
                <h3 className="item-title">{item.title}</h3>
                <p className="item-price">{item.price} ETH</p>
                <p className="item-description">{item.description}</p>

                {/* Button container */}
                <div className="item-card-buttons">
                  <button
                    className="view-details-btn"
                    onClick={() => handleItemClick(item.id)}
                  >
                    View Details
                  </button>
                  <button
                    className="buy-data-btn"
                    onClick={() => handleItemBuy(item.title)}
                  >
                    Buy
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No items found</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Marketplace;
