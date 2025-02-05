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

