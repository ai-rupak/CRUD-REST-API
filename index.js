const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require('./models/product.model.js')
const productRoute = require('./routes/product.route.js')



app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get("/", function (req, res) {
  res.send("Hello World");
});

//routes
app.use("/api/product",productRoute);


app.listen(3000, () => {
  console.log("server is running on port 3000");
});

mongoose
  .connect(
    "mongodb+srv://swarrupak:pakpak2003@cluster0.1p4ws.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => 
    console.log("Connected to MongoDB..."));
