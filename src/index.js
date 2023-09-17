const express = require("express");
const data = require("./data.json");
const userRoutes = require("./routers/userRoutes");
const userNodes = require("./routers/nodeRoutes");
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.6"
  )
  .then(() => {
    app.listen(5000, () => {
      console.log("Server started You are welcome 👍");
    });
  })
  .catch((err) => {
    console.log("Server not connected", err.message);
  });
const app = express();

app.use("/users", userRoutes);

app.use("/Nodes", userNodes);

app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hey Engineers");
});

app.get("/data", (req, res) => {
  res.json(data);
});
