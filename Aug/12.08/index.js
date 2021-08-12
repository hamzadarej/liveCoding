require("dotenv").config();
//express
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
//help express to read json
app.use(express.json());
// lowdb

const lowdb = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const jsonFile = new FileSync("data.json");
const db = lowdb(jsonFile);

// root route

app.get("/", (req, res) => {
  res.send("welcome to our lowdb app");
});

//db init

app.get("/new", async (req, res) => {
  await db.defaults({ art: [], user: {}, null: 1 }).write();
  res.send("new db is created");
});

//add
app.get("/add", async (req, res) => {
  const name = req.query.name;
  const id = req.query.id;
  db.get("art").push({ name: name, id: id }).write();
  res.send("art data are added");
});
//find
app.get("/find", async (req, res) => {
  const findId = req.query.id;
  res.send(await db.get("art").find({ id: findId }).value());
});
// update
app.get("/update", async (req, res) => {
  await db.update("num", (n) => n + 1).write();
  const num = db.get("num").value();
  res.send(`now num is ${num}`);
});
//set

app.get("/users", async (req, res) => {
  const users = ["hamza", "salim", "anis", "Sophie", "caro"];
  await db
    .set(
      "user.names",
      users.map((a) => a)
    )
    .write();
  res.send(`users: ${users}`);
});

//delete
app.get("/delete", async (req, res) => {
  const userName = db.get("user").value();
  await db.unset("user.names").write();
  res.send(`userName: ${userName}`);
});

app.listen(PORT, () => {
  console.log(`server listen on port ${PORT}`);
});
