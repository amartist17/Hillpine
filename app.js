const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "static")));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/services", (req, res) => {
  res.render("services");
});

app.get("/team", (req, res) => {
  res.render("team");
});
app.get("/founder", (req, res) => {
  res.render("founder");
});

app.get("/clientele", (req, res) => {
  res.render("clientele");
});

module.exports = app;
