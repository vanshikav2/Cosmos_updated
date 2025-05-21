// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DataExchange {

    // Address of the central wallet (controlled by the contract)
    address payable public centralWallet;
    // Mapping to keep track of user balances within the contract
    mapping(address => uint) public balances;

    // Event to log the completion of a data exchange
    event DataExchanged(address indexed buyer, address indexed seller, uint amount, string dataHash);

    // Constructor to set the central wallet (could be the deployer's address)
    constructor() {
        centralWallet = payable(address(this)); // Central wallet is the contract itself
    }

    // Function to handle the exchange of data
    function exchangeData(address payable buyer, address payable seller, uint price, string memory dataHash) public {
        require(msg.sender == buyer, "Only the buyer can initiate the transaction");
        require(balances[buyer] >= price, "Insufficient balance for transaction");

        // First call: transfer money from the buyer's wallet to the central wallet
        _transfer(buyer, centralWallet, price);

        // Second call: transfer money from the central wallet to the seller's wallet
        _transfer(centralWallet, seller, price);

        // Emit event for logging purposes (stores a hash representing the data being exchanged)
        emit DataExchanged(buyer, seller, price, dataHash);
    }

    // Internal function to handle money transfers
    function _transfer(address payable giver, address payable receiver, uint amount) internal {
        require(balances[giver] >= amount, "Insufficient balance in giver's wallet");

        // Decrease the balance of the giver
        balances[giver] -= amount;

        // Increase the balance of the receiver
        balances[receiver] += amount;

        // If the receiver is a wallet (not the contract itself), transfer the Ether
        if (receiver != centralWallet) {
            receiver.transfer(amount);
        }
    }

    // Payable function to deposit Ether into the contract (buyer can deposit funds to their balance)
    function depositFunds() public payable {
        balances[msg.sender] += msg.value;
    }

    // View function to check the balance of any user
    function getBalance(address user) public view returns (uint) {
        return balances[user];
    }

    // Withdraw function to allow users to withdraw funds from the contract
    function withdrawFunds(uint amount) public {
        require(balances[msg.sender] >= amount, "Insufficient balance to withdraw");

        // Decrease the user's balance
        balances[msg.sender] -= amount;

        // Transfer the amount back to the user
        payable(msg.sender).transfer(amount);
    }
}
