import React, { useState } from "react";
import MarketPrices from "./MarketPrices";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom"; // Import React Router
import "./Dashboard.css"; // Import the CSS file for styling
import Dashboard from "./Dashboard";
import UploadData from "./UploadData";
import Marketplace from "./MarketPlace";
import TransactionLog from "./TransactionsLog";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); // testing navigate

  const handleToggleForm = () => {
    setIsLogin(!isLogin);
    setUsername(""); // Clear username when toggling
    setPassword(""); // Clear password when toggling
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isLogin) {
      return window.open("/dashboard", "_self");
    } else {
      return window.open("/", "_self");
    }

    const url = isLogin
      ? "http://localhost:3000/Login"
      : "http://localhost:3000/CreateUser";
    const body = isLogin
      ? JSON.stringify({ username, password })
      : JSON.stringify({ username, password, data: {} });

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: body,
      });

      if (!response.ok) {
        throw new Error(isLogin ? "Login failed" : "Signup failed");
      }

      const data = await response.json();
      console.log(data.message);

      // Step 3: Navigate to /marketprices after successful login/signup
      navigate("/marketprices"); //navigate to marketplace
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <div className="form-toggle">
          <button id="loginBtn" onClick={handleToggleForm} disabled={isLogin}>
            Login
          </button>
          <button id="signupBtn" onClick={handleToggleForm} disabled={!isLogin}>
            Signup
          </button>
        </div>

        {isLogin ? (
          <form id="loginForm" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input
              type="text"
              id="loginUsername"
              placeholder="Username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              id="loginPassword"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
          </form>
        ) : (
          <form id="signupForm" onSubmit={handleSubmit}>
            <h2>Signup</h2>
            <input
              type="text"
              id="signupUsername"
              placeholder="Username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              id="signupPassword"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Signup</button>
          </form>
        )}
      </div>
    </div>
  );
}

const RootApp = () => {
  return (
    <Routes>
      {/* Root route for the app */}
      <Route path="/" element={<App />} /> {/* Login/Signup form route */}
      {/* Dashboard route that contains nested routes */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="marketprices" element={<MarketPrices />} />
      <Route path="upload-data" element={<UploadData />} />
      <Route path="marketplace" element={<Marketplace />} />
      <Route path="transaction-log" element={<TransactionLog />} />
    </Routes>
  );
};

export default RootApp;
