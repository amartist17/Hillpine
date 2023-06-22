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

app.get("/inside-hillpine", (req, res) => {
  res.render("team");
});
app.get("/founding-team", (req, res) => {
  res.render("founder");
});
app.get("/founder-1", (req, res) => {
  res.render("founder1");
});
app.get("/founder-2", (req, res) => {
  res.render("founder2");
});

app.get("/clientele", (req, res) => {
  res.render("clientele");
});

module.exports = app;
