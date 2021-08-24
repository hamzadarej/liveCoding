// Your DB is able to CRUD aka Creat Retrieve Update Delete

// Your server is able to REST API (REpresentational State Transfer) aka server can do (create, delete, update, read)requests
require("dotenv").config();
const http = require("http");
const app = require("./app");

const PORT = process.env.PORT;

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});