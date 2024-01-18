const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3500;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "./public")));

app.get("^/$|/index(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "index.html"));
});
app.get("/new-page(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "new-page.html"));
});
app.get("/old-page(.html)?", (req, res) => {
  res.redirect(301, "new-page.html");
});
app.get("/*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "pages", "404.html"));
});
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
