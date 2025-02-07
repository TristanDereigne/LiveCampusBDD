const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectMongoDB = require("./config/mongo");
connectMongoDB();
// Importer les routes MySQL
const categoryRoutes = require("./routes/categoryRoutes");
const productRoutes = require("./routes/productRoutes");
const providerRoutes = require("./routes/providerRoutes");

// Importer les routes MongoDB
const sportSalutRoutes = require("./routes/sportSalutRoutes");
const gamezRoutes = require("./routes/gamezRoutes");
const medidoncRoutes = require("./routes/medidoncRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// Routes MySQL
app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);
app.use("/api/providers", providerRoutes);

// Routes MongoDB
app.use("/api/sportsalut", sportSalutRoutes);
app.use("/api/gamez", gamezRoutes);
app.use("/api/medidonc", medidoncRoutes);

module.exports = app;
