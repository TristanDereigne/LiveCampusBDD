const express = require("express");
const router = express.Router();
const { getAllGamez, createGamez } = require("../controllers/gamezController");

// Route pour récupérer tous les produits de GamEZ
// URL : GET http://localhost:3000/api/gamez
// Retourne un tableau de jeux avec les champs suivants :
// - product_name (Nom du jeu)
// - product_description (Description)
// - product_price (Prix du jeu)
// - product_status (Disponible / En rupture)
// - seller_name (Nom du revendeur)
// - seller_creation_date (Date de création du revendeur)
router.get("/", getAllGamez);

// Route pour ajouter un nouveau produit dans GamEZ
// URL : POST http://localhost:3000/api/gamez
// Données requises dans le body :
// - product_name (Nom du jeu)
// - product_description (Description)
// - product_price (Prix du jeu)
// - product_status (Disponible / En rupture)
// - seller_name (Nom du revendeur)
// - seller_creation_date (Date de création du revendeur)
// Retourne l'objet du produit créé avec son ID généré par MongoDB
router.post("/", createGamez);

module.exports = router;
