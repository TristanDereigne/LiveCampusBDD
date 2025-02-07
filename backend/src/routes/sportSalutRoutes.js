const express = require("express");
const router = express.Router();
const {
  getAllSportSalut,
  createSportSalut,
} = require("../controllers/sportSalutController");

// Route pour récupérer tous les produits de SportSalut
// URL : GET http://localhost:3000/api/sportsalut
// Retourne un tableau de produits contenant :
// - nom_produit (Nom du produit)
// - description_produit (Description)
// - nom_revendeur (Revendeur)
// - en_stock (Oui / Non)
// - prix (Prix du produit)
router.get("/", getAllSportSalut);

// Route pour ajouter un nouveau produit dans SportSalut
// URL : POST http://localhost:3000/api/sportsalut
// Données requises dans le body :
// - nom_produit (Nom du produit)
// - description_produit (Description)
// - nom_revendeur (Nom du revendeur)
// - en_stock (Oui / Non)
// - prix (Prix du produit)
// Retourne l'objet du produit créé avec son ID généré par MongoDB
router.post("/", createSportSalut);

module.exports = router;
