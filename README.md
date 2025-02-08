# 🚀 Installation du projet LiveCampusBDD

## 📌 1. Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

- Node.js
- Npm
- MySQL
- MongoDB

---

## 📌 2. Installation et démarrage du projet

### 📌 Backend

1. Accédez au dossier backend :
   ```sh
   cd backend
   ```
2. Installez les dépendances :
   ```sh
   npm i
   ```
3. Démarrez le serveur :
   ```sh
   npm start
   ```

### 📌 Frontend

1. Accédez au dossier frontend :
   ```sh
   cd frontend
   ```
2. Installez les dépendances :
   ```sh
   npm i
   ```
3. Lancez le projet React :
   ```sh
   npm run dev
   ```

---

## 📌 3. Démarrer MySQL et MongoDB

### 📌 Démarrer MySQL

1. Connectez-vous à MySQL :
   ```sh
   mysql -u root -p
   ```
2. Créez et initialisez la base de données :
   ```sql
   SOURCE /*chemin du projet LiveCampusBDD*/db/iniBDD.sql;
   USE LiveCampusBDD;
   ```

### 📌 Démarrer MongoDB

1. Lancez le service MongoDB :
   ```sh
   mongod
   ```
2. **Importer les fichiers JSON dans MongoDB** :
   - **Avec MongoDB Compass** :
     - Accédez à **produits_db**
     - Importez les fichiers JSON depuis `/backend/src/data/` pour **Gamez, Medidonc et SportSalut**
   - **Via la ligne de commande** :
     ```sh
     mongoimport --db produits_db --collection Gamez --file backend/src/data/gamez.json --jsonArray
     mongoimport --db produits_db --collection Medidonc --file backend/src/data/medidonc.json --jsonArray
     mongoimport --db produits_db --collection SportSalut --file backend/src/data/sportsalut.json --jsonArray
     ```

---

## 📌 4. Crédits

Projet réalisé dans le cadre de la **semaine 2** de la session LiveCampus 2025 par :

- **Tristan DEREIGNE**
- **Sergen YUKSEL**
- **Victor S.**

🚀 **Amusez vous bien !**
