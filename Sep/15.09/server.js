require("dotenv").config();
const http = require("http");
const app = require("./app");
const express=require("express");

const PORT = process.env.PORT || 5003;

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
