const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Hey im working");
});

app.get("/", (req, res) => {
  return res.status(200).send("<center>Home page</center>");
});

app.get("/about", (req, res) => {
  return res.status(200).send("<center>This is about page</center>");
});

app.all("*", (req, res) => {
  return res.status(404).send("<center><h1>Oops! not found!!</h1></center>");
});
