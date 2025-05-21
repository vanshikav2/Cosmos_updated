const express = require("express");
const router = express.Router();
const Transaction = require("../models/Transaction"); // Import the model

// Get all transactions
router.get("/transactions", async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch transactions" });
  }
});

// Add new transaction
router.post("/transactions", async (req, res) => {
  try {
    const transaction = new Transaction(req.body);
    await transaction.save();
    res.status(201).json({ message: "Transaction created", transaction });
  } catch (error) {
    res.status(400).json({ error: "Failed to create transaction" });
  }
});

// Update transaction
router.put("/transactions/:id", async (req, res) => {
  try {
    const updated = await Transaction.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json({ message: "Transaction updated", updated });
  } catch (error) {
    res.status(400).json({ error: "Failed to update transaction" });
  }
});

// Delete transaction
router.delete("/transactions/:id", async (req, res) => {
  try {
    await Transaction.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Transaction deleted" });
  } catch (error) {
    res.status(400).json({ error: "Failed to delete transaction" });
  }
});

module.exports = router;
