import express from "express"; //const express = require("express")
//API Router
import productsRouter from "./routes/products.js";
//mongoose
import mongoose from "mongoose";

//Levantar servidor
const app = express();
const PORT = 3001;

mongoose
  .connect("mongodb://localhost/apiTutorial", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Connect to database"));

// MIDDLEWARE
app.use("/api/products", productsRouter);

app.listen(PORT, () => console.log(`Server running in ${PORT} port`));
