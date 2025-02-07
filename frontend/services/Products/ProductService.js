import { instance } from "../axios.js";

/*
let product1 = {
    id:'1',
    title: 'Strix RTX 5090 TI',
    description: '',
    status: 'Disponible',
    provider: 'Asus',
    category: 'Carte graphique'
}*/

/*
let product2 = {
    id:'2',
    title: 'MSI RTX 5070 TI',
    description: 'La plus puissante de toutes les cartes graphiques elle La plus puissante de toutes les cartes graphiques elle La plus puissante de toutes les cartes graphiques elle La plus puissante de toutes les cartes graphiques elle La plus puissante de toutes les cartes graphiques elle La plus puissante de toutes les cartes graphiques elle La plus puissante de toutes les cartes graphiques elle ...',
    status: 'Disponible',
    provider: 'MSI',
    category: 'Carte graphique'
}*/

//let products = [product1, product2]; //Example de produits reçus
let response = '';

export const ProductService = {

    getAllProducts: async () => {
        try {
            response = await instance.get('/product')
            console.log(response);
            if(response.status !== 200) {
                throw new Error(`Erreur HTTP: ${response.status}`);
            }
            if (!response.data) {
                throw new Error('Pas de donnée reçues');
            }
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },
    createProduct: (productToCreate, id) => {
        instance.post(`/product/${id}`, {
            id: productToCreate.id,
            name: productToCreate.title,
            purchase_price: productToCreate.purchase_price,
            description: productToCreate.description,
            status: productToCreate.status,
            provider_id: productToCreate.provider_id,
            category_id: productToCreate.category_id,
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}