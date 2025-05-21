// src/UploadData.js
import React, { useState } from "react";
import { Typography, Paper, TextField, Button, AppBar, Toolbar } from "@mui/material";
import Sidebar from "./components/shared/Sidebar";
import { styled } from "@mui/material/styles";

const VisuallyHiddenInput = styled("input")({
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

function UploadData() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState([]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleFiles = (e) => {
    setFiles(e.target.files);
  };

  const preflightCheck = () => {
    if (!title || !description) {
      return false;
    }

    if (files.length < 1) {
      return false;
    }

    return true;
  };

  return (
    <Paper sx={{ p: 2, width: "100%" }}>
      {/* AppBar */}
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Upload
          </Typography>
        </Toolbar>
      </AppBar>

      <Sidebar/>

      <Typography variant="h4">Upload Data</Typography>
      <Typography variant="body1">Upload your data here</Typography>

      <TextField
        onChange={handleTitleChange}
        value={title}
        label="Title"
        variant="outlined"
        required
        fullWidth
      />

      <TextField
        onChange={handleDescriptionChange}
        value={description}
        label="Enter a description"
        variant="outlined"
        required
        fullWidth
      />

      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
      >
        Upload files
        <VisuallyHiddenInput type="file" onChange={handleFiles} multiple />
      </Button>

      <Typography variant="body1">{files.length} files selected</Typography>

      <Button
        sx={{ m: "30px auto 0 auto", fontSize: "25px" }}
        disabled={!preflightCheck()}
      >
        SUBMIT
      </Button>
    </Paper>
  );
}

export default UploadData;
