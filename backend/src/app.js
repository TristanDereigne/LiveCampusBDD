const express = require("express");
const cors = require("cors");
require("dotenv").config();

const categoryRoutes = require("./routes/categoryRoutes");
const productRoutes = require("./routes/productRoutes");
const providerRoutes = require("./routes/providerRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);
app.use("/api/providers", providerRoutes);

module.exports = app;
