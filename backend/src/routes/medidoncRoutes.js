const express = require("express");
const router = express.Router();
const {
  getAllMedidonc,
  createMedidonc,
} = require("../controllers/medidoncController");

// Route pour récupérer tous les produits MEDIDONC
// URL : GET http://localhost:3000/api/medidonc
// Retourne un tableau de produits médicaux avec les champs suivants :
// - p_name (Nom du produit)
// - p_description (Description)
// - p_last_update (Dernière mise à jour)
// - p_status (En stock / Rupture de stock)
// - p_seller (Objet JSON contenant les infos du revendeur)
router.get("/", getAllMedidonc);

// Route pour ajouter un nouveau produit dans MEDIDONC
// URL : POST http://localhost:3000/api/medidonc
// Données requises dans le body :
// - p_name (Nom du produit)
// - p_description (Description)
// - p_status (En stock / Rupture de stock)
// - p_seller (Objet JSON contenant : id, name, creation_date)
// Retourne l'objet du produit créé avec son ID généré par MongoDB
router.post("/", createMedidonc);

module.exports = router;
