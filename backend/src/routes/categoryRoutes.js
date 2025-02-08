const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");

// Route pour récupérer toutes les catégories
// URL : GET https://localhost:3000/api/categories
// Retourne un tableau de catégories avec les champs : id, name, date_creation
router.get("/", categoryController.getAllCategories);

// Route pour récupérer une catégorie par son ID
// URL : GET https://localhost:3000/api/categories/:id
// Paramètre : id (identifiant unique de la catégorie)
// Retourne un objet contenant les champs : id, name, date_creation
router.get("/:id", categoryController.getOneCategory);

// Route pour créer une nouvelle catégorie
// URL : POST https://localhost:3000/api/categories
// Données requises dans le body :
// - name (nom de la catégorie)
// - date_creation (date de création de la catégorie)
// Retourne un message de confirmation
router.post("/", categoryController.createCategory);

// Route pour mettre à jour une catégorie existante
// URL : PUT https://localhost:3000/api/categories/:id
// Paramètre : id (identifiant unique de la catégorie)
// Données mises à jour dans le body :
// - name (nom de la catégorie)
// Retourne un message de confirmation avec le nombre de lignes affectées
router.put("/:id", categoryController.updateCategory);

// Route pour supprimer une catégorie
// URL : DELETE https://localhost:3000/api/categories/:id
// Paramètre : id (identifiant unique de la catégorie)
// Retourne un message de confirmation avec le nombre de lignes affectées
router.delete("/:id", categoryController.deleteCategory);

module.exports = router;
