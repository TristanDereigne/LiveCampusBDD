const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Route pour récupérer tous les utilisateurs
// URL : GET https://localhost:3000/api/users
// Retourne un tableau d'utilisateurs avec les champs : id, username, date_creation
router.get("/", userController.getAllUsers);

// Route pour récupérer un utilisateur par son ID
// URL : GET https://localhost:3000/api/users/:id
// Paramètre : id (identifiant unique de l'utilisateur)
// Retourne un objet contenant les champs : id, username, date_creation
router.get("/:id", userController.getOneUser);

// Route pour créer un nouvel utilisateur
// URL : POST https://localhost:3000/api/users
// Données requises dans le body :
// - username (nom de l'utilisateur)
// - password (mot de passe de l'utilisateur)
// Retourne un message de confirmation
router.post("/", userController.createUser);


// Route pour supprimer un utilisateur
// URL : DELETE https://localhost:3000/api/users/:id
// Paramètre : id (identifiant unique de l'utilisateur)
// Retourne un message de confirmation avec le nombre de lignes affectées
router.delete("/:id", userController.deleteUser);

module.exports = router;
