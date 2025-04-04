

-- -----------------------Structure BDD-----------------------------------------------------  -- 
SET NAMES utf8mb4;
SET CHARACTER SET utf8mb4;
SET character_set_client = utf8mb4;
SET character_set_connection = utf8mb4;
SET character_set_results = utf8mb4;

DROP DATABASE IF EXISTS LiveCampusBDD;
CREATE DATABASE LiveCampusBDD
CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE LiveCampusBDD;



CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    date_creation DATETIME DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



CREATE TABLE categories (
    id INT AUTO_INCREMENT,
    name VARCHAR(254) NOT NULL,
    date_creation DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE providers (
    id INT AUTO_INCREMENT,
    name VARCHAR(254) UNIQUE NOT NULL,
    date_creation DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE products (
    id INT AUTO_INCREMENT, 
    name VARCHAR(254) NOT NULL , 
    description TEXT,
    purchase_price DECIMAL(10,2),
    status ENUM('disponible','en rupture') DEFAULT 'disponible',
    date_creation DATETIME DEFAULT CURRENT_TIMESTAMP,
    date_update DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    provider_id INT NOT NULL,
    category_id INT NOT NULL,
    
    PRIMARY KEY (id),
    FOREIGN KEY (provider_id) REFERENCES providers(id) ON DELETE CASCADE,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE INDEX idx_provider ON products (provider_id);
CREATE INDEX idx_category ON products (category_id);

-- ------------------------PROCEDURE---------------------------------------------------------------------------------------------- --




DELIMITER //

CREATE PROCEDURE GetAllProducts()
BEGIN
    SELECT 
        p.id, 
        p.name, 
        p.description, 
        p.purchase_price, 
        p.status, 
        p.date_creation, 
        p.date_update, 
        pr.id AS provider_id,
        pr.name AS provider_name,
        c.id AS category_id,
        c.name AS category_name
    FROM products p
    LEFT JOIN providers pr ON p.provider_id = pr.id
    LEFT JOIN categories c ON p.category_id = c.id
    ORDER BY p.date_creation DESC;
END //

CREATE PROCEDURE GetOneProduct(
    IN p_id INT
)
BEGIN
    SELECT 
        p.id, 
        p.name, 
        p.description, 
        p.purchase_price, 
        p.status, 
        p.date_creation, 
        p.date_update, 
        pr.id AS provider_id,
        pr.name AS provider_name,
        c.id AS category_id,
        c.name AS category_name
    FROM products p
    LEFT JOIN providers pr ON p.provider_id = pr.id
    LEFT JOIN categories c ON p.category_id = c.id
    WHERE p.id = p_id;
END //
-- Procedure creer un produit --
CREATE PROCEDURE InsertProduit(
              
    IN name VARCHAR(254), 
    IN description TEXT, 
    IN purchase_price DECIMAL(10,2), 
    IN status VARCHAR(50),
    IN provider_id INT,
    IN category_id INT
)
BEGIN

    INSERT INTO products (name, description, purchase_price, status, provider_id, category_id)
    VALUES (name, description, purchase_price, status, provider_id, category_id);
    
END //


-- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- -- 


-- Procedure supprimer un produit --


CREATE PROCEDURE DeleteProduct(IN product_id INT)
BEGIN
   
    DELETE FROM products WHERE id = product_id;
    
END //

-- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- -- 


-- procedure modifier un produit  --  

CREATE PROCEDURE UpdateProduct(
    IN  p_id INT ,
    IN  p_name VARCHAR(254), 
    IN  p_description TEXT, 
    IN  p_purchase_price DECIMAL(10,2), 
    IN  p_status VARCHAR(50),
    IN  p_provider_id INT, 
    IN  p_category_id INT

) 

BEGIN 

UPDATE products 
SET  
name = p_name, 
description = p_description,
purchase_price =   p_purchase_price, 
status = p_status, 
provider_id = p_provider_id,
category_id= p_category_id
WHERE 
id = p_id ; 

END //

-- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- -- 

CREATE PROCEDURE GetAllProviders()
BEGIN
    SELECT * FROM providers ORDER BY date_creation DESC;
END //


CREATE PROCEDURE GetOneProvider(
    IN p_id INT
)
BEGIN
    SELECT * FROM providers WHERE id = p_id;
END //


-- -------Creer un fournisseur------- -- 


CREATE PROCEDURE CreateProvider(
    IN  f_name VARCHAR(254) 
) 

BEGIN 

  INSERT INTO providers (name)   VALUES (f_name);

END //



-- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- --
-- Modifier un fournisseur  -- 


CREATE PROCEDURE UpdateProvider(
    IN  f_id INT ,
    IN  f_name VARCHAR(254) 
) 

BEGIN 

UPDATE providers
SET  
name = f_name
WHERE 
id = f_id;

END //

 -- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- --

-- Supprimer un revendeur ---- 

CREATE PROCEDURE DeleteProvider(
    IN f_id INT 

) 

BEGIN 

DELETE FROM providers WHERE  id = f_id;

END //

 -- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- --

CREATE PROCEDURE GetAllCategories()
BEGIN
    SELECT * FROM categories ORDER BY date_creation DESC;
END //

CREATE PROCEDURE GetOneCategory(
    IN c_id INT
)
BEGIN
    SELECT * FROM categories WHERE id = c_id;
END //

-- Ajouter une categorie ---- 



CREATE PROCEDURE CreateCategory(
    IN  c_name VARCHAR(254) 
) 

BEGIN 

  INSERT INTO categories (name)  VALUES (c_name);

END //

 -- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- --

-- Modifier une categorie ---- 

CREATE PROCEDURE UpdateCategory(
    IN  c_id INT ,
    IN  c_name VARCHAR(254) 
) 

BEGIN 

UPDATE categories
SET  
name = c_name
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

-- Creer un utilisateur ---------------------------------------------- --

CREATE PROCEDURE InsertUser(
    IN p_username VARCHAR(50), 
    IN p_password VARCHAR(255)
)
BEGIN
    DECLARE hashed_password VARCHAR(255);
    
    SET hashed_password = SHA2(p_password, 256);

    INSERT INTO users (username, password) 
    VALUES (p_username, hashed_password);
END //

-- ---Modifier un user -------- --

CREATE PROCEDURE UpdateUser(
    IN  p_id INT ,
    IN  p_name VARCHAR(254),
    IN p_password  VARCHAR(254)
) 

BEGIN 
DECLARE hashed_password VARCHAR(255);
  SET hashed_password = SHA2(p_password, 256);

UPDATE users
SET  
username = p_name, 
password = hashed_password
WHERE 
id = p_id;

END //


-- ----------- Supprimmer un user ----------------------------------------------- --

CREATE PROCEDURE DeleteUser(
    IN p_id INT
)
BEGIN
    DELETE FROM users WHERE id = p_id;
END //

-- Recuperer tous les users ----------------------------------------- --

CREATE PROCEDURE GetAllUsers()
BEGIN
    SELECT id, username, date_creation FROM users ORDER BY date_creation DESC;
END //


-- ---- Recuperer un user ---------------------- --
CREATE PROCEDURE GetOneUser(
    IN p_id INT
)
BEGIN
    SELECT id, username, password 
    FROM users 
    WHERE id = p_id;
END //

DELIMITER ;


-- -------------------------Initial Data ----------------------------------------------------------- --

INSERT INTO categories (name) VALUES 
('Ordinateurs & Accessoires'),
('Téléphones & Tablettes'),
('Audio & Casques'),
('Télévisions & Vidéo'),
('Composants & Périphériques'),
('Gaming & Consoles');



INSERT INTO providers (name) VALUES 
('TechWorld'),
('ElectroShop'),
('GamerZone'),
('AudioMax'),
('SmartTech');



INSERT INTO products (name, description, purchase_price, status, provider_id, category_id) VALUES 
('PC Portable Gamer', 'Ordinateur portable puissant pour le gaming', 1499.99, 'disponible', 1, 1),
('Clavier Mécanique RGB', 'Clavier gaming avec switches mécaniques', 89.99, 'disponible', 3, 5),
('Smartphone 5G', 'Téléphone dernière génération avec écran AMOLED', 999.99, 'disponible', 5, 2),
('Écouteurs Sans Fil', 'Écouteurs Bluetooth avec réduction de bruit', 129.99, 'disponible', 4, 3),
('Télévision 4K OLED', 'Téléviseur ultra haute définition avec Dolby Vision', 1999.99, 'disponible', 2, 4),
('Carte Graphique RTX 4080', 'Carte graphique haut de gamme pour le gaming', 1299.99, 'disponible', 3, 5),
('Console Next-Gen', 'Nouvelle console de jeux avec SSD ultra rapide', 599.99, 'en rupture', 3, 6),
('Casque Audio Pro', 'Casque audio studio avec son haute fidélité', 299.99, 'disponible', 4, 3);

INSERT INTO users (username, password) 
VALUES ('user1', SHA2('password1', 256));


-- Creation d'un utilisateur SGBDR ( Droit : SELECT , EXECUTE sur toutes les procédures stockées) ------- --
-- se connecter sur mysql avec cet utilisateur -- 
DROP USER IF EXISTS 'read_user'@'localhost';

CREATE USER 'read_user'@'localhost' IDENTIFIED BY '';

GRANT SELECT ON LiveCampusBDD.* TO 'read_user'@'localhost';

GRANT EXECUTE ON LiveCampusBDD.* TO 'read_user'@'localhost';

FLUSH PRIVILEGES;




