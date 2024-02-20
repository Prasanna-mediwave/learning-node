const express = require("express");

const app = express();
const bodyParser = require("body-parser");
const db = require("./config/database");
const customerRoute = require("./router/customerRouter");
const productRoute = require("./router/productRoute");
const cartRoute = require("./router/cartRouter");

app.use(bodyParser.json());
app.use("/customer", customerRoute);
app.use("/product", productRoute);
app.use("/user", cartRoute);
db.on("open", () => {
  app.listen(3000, () => {
    console.log("server is runnings");
  });
});

db.on("error", (err) => {
  console.log("server not running", err);
});
