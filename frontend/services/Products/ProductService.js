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
            response = await instance.get('/products/')
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
    getProduct: async (id) => {
        try {
            response = await instance.get(`/products/${id}`)
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
    updateProduct: async (updatedProduct, id) => {
        try {
            response = await instance.put(`/products/${id}`, {
                name: updatedProduct.name,
                purchase_price: updatedProduct.purchase_price,
                description: updatedProduct.description,
                status: updatedProduct.status,
                provider_id: updatedProduct.provider_id,
                category_id: updatedProduct.category_id,
            })
            if(response.status !== 200) {
                throw new Error(`Erreur HTTP: ${response.status}`);
            }
            if (!response.data) {
                throw new Error('Pas de donnée reçues');
            }
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error("Problème pour mettre à jour le produit");
        }
    }
    /*createProduct: (productToCreate) => {
        instance.post(`/products`, {
            name: productToCreate.title,
            description: productToCreate.description,
            purchase_price: productToCreate.purchase_price,
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
    }*/
}