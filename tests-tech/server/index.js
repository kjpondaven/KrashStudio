const express = require("express");
const app = express();
const port = 3001;
const PORT = process.env.PORT || 3001;
const cors = require("cors");
const { default: axios } = require("axios");

app.use(
  cors({
    // origin: process.env.CLIENT_ORIGIN,
    origin: "*",
    methods: "GET, POST, PUT, DELETE, OPTIONS",
    credentials: true,
    allowedHeaders:
      "Content-Type, Authorization, Origin, X-Requested-With, X-Custom-Header, Accept, xsrf-token",
  })
);

app.get("/search", async (req, res) => {
  const input = req.query.name;
  const select = req.query.check;
  try {
    const resp = await axios.get(
      `https://swapi.dev/api/${select}/?search=${input}`
    );
    console.log(resp.data);
    res.json(resp.data.results);
  } catch (err) {}
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
