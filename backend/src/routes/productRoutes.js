const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// Route pour récupérer tous les produits
// URL : GET https://localhost:3000/api/products
// Retourne un tableau de produits avec les champs : id, name, description, purchase_price, status, date_creation, date_update, provider_id, category_id
router.get("/", productController.getAllProducts);

// Route pour récupérer un produit par son ID
// URL : GET https://localhost:3000/api/products/:id
// Paramètre : id (identifiant unique du produit)
// Retourne un objet contenant les champs : id, name, description, purchase_price, status, date_creation, date_update, provider_id, category_id
router.get("/:id", productController.getOneProduct);

// Route pour créer un nouveau produit
// URL : POST https://localhost:3000/api/products
// Données requises dans le body :
// - name (nom du produit)
// - description (description du produit)
// - purchase_price (prix d'achat)
// - status (statut du produit : disponible, en rupture, etc.)
// - provider_id (ID du fournisseur)
// - category_id (ID de la catégorie)
// Retourne l'objet du produit créé avec son ID
router.post("/", productController.createProduct);

// Route pour mettre à jour un produit existant
// URL : PUT https://localhost:3000/api/products/:id
// Paramètre : id (identifiant unique du produit)
// Données mises à jour dans le body (mêmes champs que la création)
// Retourne un message de confirmation avec le nombre de lignes affectées
router.put("/:id", productController.updateProduct);

// Route pour supprimer un produit
// URL : DELETE https://localhost:3000/api/products/:id
// Paramètre : id (identifiant unique du produit)
// Retourne un message de confirmation avec le nombre de lignes affectées
router.delete("/:id", productController.deleteProduct);

module.exports = router;
