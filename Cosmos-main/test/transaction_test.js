
const DataExchange = artifacts.require("DataExchange");

contract("DataExchange", (accounts) => {
    const buyer = accounts[0];  // First account is the buyer
    const seller = accounts[1]; // Second account is the seller
    const centralWallet = accounts[2]; // Third account is for central wallet
    const price = web3.utils.toWei('1', 'ether'); // 1 ETH price

    it("should allow buyer to deposit funds", async () => {
        const contractInstance = await DataExchange.deployed();

        // Buyer deposits 2 ETH into the contract
        await contractInstance.depositFunds({from: buyer, value: web3.utils.toWei('2', 'ether')});

        const buyerBalance = await contractInstance.getBalance(buyer);
        assert.equal(buyerBalance.toString(), web3.utils.toWei('2', 'ether'), "Buyer balance should be 2 ETH");
    });

    it("should transfer money from buyer to central wallet and then to seller", async () => {
        const contractInstance = await DataExchange.deployed();

        // Check the initial balances
        const initialBuyerBalance = await contractInstance.getBalance(buyer);
        const initialSellerBalance = await contractInstance.getBalance(seller);
        const initialCentralWalletBalance = await contractInstance.getBalance(centralWallet);

        // Buyer exchanges data with seller, price is 1 ETH
        await contractInstance.exchangeData(buyer, seller, price, "QmSomeDataHash");

        // Check balances after exchange
        const finalBuyerBalance = await contractInstance.getBalance(buyer);
        const finalSellerBalance = await contractInstance.getBalance(seller);
        const finalCentralWalletBalance = await contractInstance.getBalance(centralWallet);

        // Assertions to check balance changes
        assert.equal(finalBuyerBalance.toString(), web3.utils.toWei('1', 'ether'), "Buyer should have 1 ETH left");
        assert.equal(finalSellerBalance.toString(), price, "Seller should have received 1 ETH");
        assert.equal(finalCentralWalletBalance.toString(), "0", "Central wallet should be empty after transfer");
    });

    it("should allow withdrawal of funds", async () => {
        const contractInstance = await DataExchange.deployed();

        const initialBuyerBalance = await contractInstance.getBalance(buyer);

        // Buyer withdraws 1 ETH
        await contractInstance.withdrawFunds(web3.utils.toWei('1', 'ether'), {from: buyer});

        const finalBuyerBalance = await contractInstance.getBalance(buyer);
        assert.equal(finalBuyerBalance.toString(), "0", "Buyer should have 0 ETH left after withdrawal");
    });
});
