require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 5005;

app.use(cors());

// API Endpoint
app.get("/api/server-status", async (req, res) => {
  try {
    const urlData = process.env.API_URL;
    const interfaceData = process.env.API_INTERFACE;
    const methodData = process.env.API_METHOD;
    const apiVersion = process.env.API_VERSION;
    const apiKey = process.env.STEAM_API_KEY;

    const url = `${urlData}/${interfaceData}/${methodData}/${apiVersion}/?key=${apiKey}`;

    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error("Steam API Error:", error.response ? error.response.data : error.message);
    res.status(500).json({ error: "Failed to fetch data from Steam API", details: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
