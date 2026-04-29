const express = require("express");
const cors = require("cors");
const apiCall = require("./utils/apiCall");
const app = express();
const port = 3000;

app.use(cors({ origin: "http://localhost:5173" }));

app.get("/api/features", async (req, res) => {
  res.status(200).json(await apiCall.getFeaturesByName(req.query.artist));
});

app.listen(port, () => console.log(`Backend running on port ${port}`));
