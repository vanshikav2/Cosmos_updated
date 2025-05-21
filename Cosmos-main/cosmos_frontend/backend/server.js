const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const transactionRoutes = require("./routes/transactions");
const userRoutes = require("./routes/userRoutes");

const app = express();

// Middleware
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// API routes
app.use("/api", transactionRoutes);
app.use("/api/users", userRoutes);

// Start the server
const PORT = 5001;
app.listen(PORT, () => console.log(`Backend server running on port ${PORT}`));
