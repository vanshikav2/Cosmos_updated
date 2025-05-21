const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
  transactionId: { type: String, required: true },
  orderType: { type: String, enum: ["BUY", "SELL"], required: true },
  amount: { type: Number, required: true },
  dateSold: { type: Date, required: true },
});

module.exports = mongoose.model("Transaction", TransactionSchema);
