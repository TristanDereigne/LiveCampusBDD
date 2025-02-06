import { instance } from "../axios.js";

let product1 = {
    id:'1',
    title: 'Strix RTX 5090 TI',
    description: '',
    status: 'Disponible',
    provider: 'Asus',
    category: 'Carte graphique'
}

let product2 = {
    id:'2',
    title: 'MSI RTX 5070 TI',
    description: 'La plus puissante de toutes les cartes graphiques elle La plus puissante de toutes les cartes graphiques elle La plus puissante de toutes les cartes graphiques elle La plus puissante de toutes les cartes graphiques elle La plus puissante de toutes les cartes graphiques elle La plus puissante de toutes les cartes graphiques elle La plus puissante de toutes les cartes graphiques elle ...',
    status: 'Disponible',
    provider: 'MSI',
    category: 'Carte graphique'
}

let products = [product1, product2]; //Example de produits reçus

export const ProductService = {
    getAllProducts: () => {
        instance.get('/todos/1') // fake call
        return products;
    },
    createProduct: (productToCreate, id) => {
        instance.post(`/products/${id}`, {
            id: productToCreate.id,
            title: productToCreate.title,
            description: productToCreate.description,
            status: productToCreate.status,
            provider: productToCreate.provider,
            category: productToCreate.category,
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}