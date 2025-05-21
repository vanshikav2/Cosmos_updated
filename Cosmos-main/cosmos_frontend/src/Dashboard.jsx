// src/Dashboard.js
import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  Container,
  Grid,
  Paper,
} from "@mui/material";
import { NavLink, Routes, Route } from "react-router-dom";
import ChartComponent from "./ChartComponent";
import UploadData from "./UploadData"; // Import other components as needed
import Sidebar from "./components/shared/Sidebar";

function Dashboard() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* AppBar */}
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1}}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Home Page
          </Typography>
        </Toolbar>
      </AppBar>

      <Sidebar />

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />

        <Routes>
          <Route
            path="/"
            element={
              <Container maxWidth="lg">
                {/* Key Metrics */}
                <Grid container spacing={3}>
                  {/* Metric Card 1 */}
                  <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 2 }}>
                      <Typography variant="h6">Coin 1</Typography>
                      <Typography variant="h4">$123</Typography>
                    </Paper>
                  </Grid>
                  {/* Metric Card 2 */}
                  <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 2 }}>
                      <Typography variant="h6">Coin 2</Typography>
                      <Typography variant="h4">$456</Typography>
                    </Paper>
                  </Grid>
                  {/* Metric Card 3 */}
                  <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 2 }}>
                      <Typography variant="h6">Coin 3</Typography>
                      <Typography variant="h4">$789</Typography>
                    </Paper>
                  </Grid>
                </Grid>

                {/* Chart */}
                <Grid container spacing={3} sx={{ mt: 3 }}>
                  <Grid item xs={12}>
                    <Paper sx={{ p: 2 }}>
                      <Typography variant="h6">Sales Overview</Typography>
                      <ChartComponent />
                    </Paper>
                  </Grid>
                </Grid>
              </Container>
            }
          />
          <Route path="/upload-data" element={<UploadData />} />
          {/* Add more routes as needed */}
        </Routes>
      </Box>
    </Box>
  );
}

export default Dashboard;
