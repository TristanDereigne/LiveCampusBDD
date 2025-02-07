const express = require("express");
const router = express.Router();
const providerController = require("../controllers/providerController");

// Route pour récupérer tous les fournisseurs
// URL : GET https://localhost:3000/api/providers
// Retourne un tableau de fournisseurs avec les champs : id, name, date_creation
router.get("/api", providerController.getAllProviders);

// Route pour récupérer un fournisseur par son ID
// URL : GET https://localhost:3000/api/providers/:id
// Paramètre : id (identifiant unique du fournisseur)
// Retourne un objet contenant les champs : id, name, date_creation
router.get("/api/:id", providerController.getOneProvider);

// Route pour créer un nouveau fournisseur
// URL : POST https://localhost:3000/api/providers
// Données requises dans le body :
// - name (nom du fournisseur)
// - date_creation (date de création du fournisseur)
// Retourne un message de confirmation
router.post("/api", providerController.createProvider);

// Route pour mettre à jour un fournisseur existant
// URL : PUT https://localhost:3000/api/providers/:id
// Paramètre : id (identifiant unique du fournisseur)
// Données mises à jour dans le body :
// - name (nom du fournisseur)
// Retourne un message de confirmation avec le nombre de lignes affectées
router.put("/api/:id", providerController.updateProvider);

// Route pour supprimer un fournisseur
// URL : DELETE https://localhost:3000/api/providers/:id
// Paramètre : id (identifiant unique du fournisseur)
// Retourne un message de confirmation avec le nombre de lignes affectées
router.delete("/api/:id", providerController.deleteProvider);

module.exports = router;
