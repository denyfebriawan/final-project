const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const port = 8000;

const destRoutes = require("./src/routes/destinations");
const authRoutes = require("./src/routes/auth");

// Middleware for bodyParser
app.use(bodyParser.json()) //type JSON
// Middleware for CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PUT,PATCH,DELETE,OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
// Middleware for error dinamis
app.use((error, req, res, next) => {
    const status = error.errorStatus || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({message: message, data: data})
})


app.use("/v1/auth", authRoutes);
app.use("/v1/destination", destRoutes);

// Connection MongoDB
mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://team:sparta@cluster0.6mmsyfu.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
    app.listen(port, () => console.log('Connection Success'));
})
.catch(err => console.log(err));
