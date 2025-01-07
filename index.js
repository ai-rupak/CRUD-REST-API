const express = require("express");
const mongoose = require("mongoose");
const Product = require('./models/product.model.js')
const productRoute = require('./routes/product.route.js')
const connectDB = require('./config/db.js')
const PORT = process.env.PORT ;

const app = express();

//connect to database
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get("/", function (req, res) {
  res.send("Hello World");
});

//routes
app.use("/api/product",productRoute);


app.listen(PORT, () => {
  console.log("server is running on port",PORT);
});

