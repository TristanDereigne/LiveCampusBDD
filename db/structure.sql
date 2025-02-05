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
