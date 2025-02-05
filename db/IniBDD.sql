

-- -----------------------Structure BDD-----------------------------------------------------  -- 

DROP DATABASE IF EXISTS LiveCampusBDD;
CREATE DATABASE LiveCampusBDD;
USE LiveCampusBDD;

CREATE TABLE categories (
    id INT AUTO_INCREMENT,
    nom VARCHAR(254) NOT NULL,
    date_creation DATE DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
) ENGINE=InnoDB;


CREATE TABLE fournisseurs (
    id INT AUTO_INCREMENT,
    nom VARCHAR(254) UNIQUE NOT NULL,
  date_creation DATE DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
) ENGINE=InnoDB;


CREATE TABLE produits (
    id INT AUTO_INCREMENT, 
    nom VARCHAR(254) NOT NULL , 
    produit_description TEXT,
    prix_achat DECIMAL(10,2),
    statut ENUM('disponible','en rupture') DEFAULT 'disponible',
    date_creation DATE DEFAULT CURRENT_TIMESTAMP,
    date_modification DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    fournisseur_id INT NOT NULL,
    category_id INT NOT NULL,
    
    PRIMARY KEY (id),
    FOREIGN KEY (fournisseur_id) REFERENCES fournisseurs(id) ON DELETE CASCADE,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE

) ENGINE=InnoDB;



-- ------------------------PROCEDURE---------------------------------------------------------------------------------------------- --


-- Procedure creer un produit --

DELIMITER //

CREATE PROCEDURE InsertProduit(
              
    IN nom_produit VARCHAR(254), 
    IN description_produit TEXT, 
    IN prix DECIMAL(10,2), 
    IN statut VARCHAR(50),
    IN fournisseur_nom VARCHAR(254), 
    IN category_id INT
)
BEGIN
    DECLARE date_creation DATE;
    DECLARE date_modification DATE;
    DECLARE fournisseur_id INT;

    SET date_creation = NOW();
    SET date_modification = NOW();

   
    IF fournisseur_nom IS NOT NULL AND fournisseur_nom != '' THEN
        
        SELECT id INTO fournisseur_id FROM fournisseurs WHERE nom = fournisseur_nom ;

        IF fournisseur_id IS NULL THEN
            INSERT INTO fournisseurs (nom, date_creation) VALUES (fournisseur_nom, NOW());
            SET fournisseur_id = LAST_INSERT_ID(); 
        END IF;
    ELSE
        SET fournisseur_id = NULL; 
    END IF;



    INSERT INTO produits (nom, produit_description, prix_achat, statut, date_creation, date_modification, fournisseur_id, category_id) 
    VALUES (nom_produit, description_produit, prix, statut, date_creation, date_modification, fournisseur_id, category_id);
    
END //


-- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- -- 


-- Procedure supprimer un produit --


CREATE PROCEDURE DeleteProduct(IN produit_id INT)
BEGIN
   
    DELETE FROM produits WHERE id = produit_id;
    
END //

-- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- -- 


-- procedure modifier un produit  --  

CREATE PROCEDURE UpdateProduct(
    IN  p_id INT ,
    IN  p_nom VARCHAR(254), 
    IN  p_description TEXT, 
    IN  p_prix DECIMAL(10,2), 
    IN  p_statut VARCHAR(50),
    IN  p_fournisseur_id INT, 
    IN  p_category_id INT

) 

BEGIN 

UPDATE produits 
SET  
nom = p_nom, 
produit_description = p_description,
prix_achat =   p_prix, 
statut = p_statut, 
fournisseur_id = p_fournisseur_id,
category_id= p_category_id
WHERE 
id = p_id ; 

END //

-- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- -- 



-- -------Creer un fournisseur------- -- 


CREATE PROCEDURE CreateFournisseur(
    IN  f_nom VARCHAR(254) 
) 

BEGIN 

  INSERT INTO fournisseurs (nom)   VALUES (f_nom);

END //



-- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- --
-- Modifier un fournisseur  -- 


CREATE PROCEDURE UpdateFournisseur(
    IN  f_id INT ,
    IN  f_nom VARCHAR(254) 
) 

BEGIN 

UPDATE fournisseurs
SET  
nom = f_nom
WHERE 
id = f_id;

END //

 -- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- --

-- Supprimer un revendeur ---- 

CREATE PROCEDURE DeleteFournisseur(
    IN f_id INT 

) 

BEGIN 

DELETE FROM fournisseurs WHERE  id = f_id;

END //

 -- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- --

-- Ajouter une categorie ---- 



CREATE PROCEDURE CreateCategory(
    IN  c_nom VARCHAR(254) 
) 

BEGIN 

  INSERT INTO categories (nom)  VALUES (c_nom);

END //

 -- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- --

-- Modifier une categorie ---- 

CREATE PROCEDURE UpdateCategory(
    IN  c_id INT ,
    IN  c_nom VARCHAR(254) 
) 

BEGIN 

UPDATE categories
SET  
nom = c_nom
WHERE 
id = c_id;

END //

 -- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- --

-- Supprimer une categorie ---- 

CREATE PROCEDURE DeleteCategory(
    IN c_id INT 

) 

BEGIN 

DELETE FROM categories WHERE  id = c_id;

END //

DELIMITER ; 


-- -------------------------Initial Data ----------------------------------------------------------- --

INSERT INTO categories (nom) VALUES 
('Ordinateurs & Accessoires'),
('Téléphones & Tablettes'),
('Audio & Casques'),
('Télévisions & Vidéo'),
('Composants & Périphériques'),
('Gaming & Consoles');



INSERT INTO fournisseurs (nom) VALUES 
('TechWorld'),
('ElectroShop'),
('GamerZone'),
('AudioMax'),
('SmartTech');



INSERT INTO produits (nom, produit_description, prix_achat, statut, fournisseur_id, category_id) VALUES 
('PC Portable Gamer', 'Ordinateur portable puissant pour le gaming', 1499.99, 'disponible', 1, 1),
('Clavier Mécanique RGB', 'Clavier gaming avec switches mécaniques', 89.99, 'disponible', 3, 5),
('Smartphone 5G', 'Téléphone dernière génération avec écran AMOLED', 999.99, 'disponible', 5, 2),
('Écouteurs Sans Fil', 'Écouteurs Bluetooth avec réduction de bruit', 129.99, 'disponible', 4, 3),
('Télévision 4K OLED', 'Téléviseur ultra haute définition avec Dolby Vision', 1999.99, 'disponible', 2, 4),
('Carte Graphique RTX 4080', 'Carte graphique haut de gamme pour le gaming', 1299.99, 'disponible', 3, 5),
('Console Next-Gen', 'Nouvelle console de jeux avec SSD ultra rapide', 599.99, 'en rupture', 3, 6),
('Casque Audio Pro', 'Casque audio studio avec son haute fidélité', 299.99, 'disponible', 4, 3);





