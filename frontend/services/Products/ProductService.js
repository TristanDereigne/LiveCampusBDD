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
            throw new Error("Problème pour mettre à jour le produit");
        }
    },
    createProduct: async (createdProduct) => {
        try {
            response = await instance.post(`/products`, {
                name: createdProduct.name,
                purchase_price: createdProduct.purchase_price,
                description: createdProduct.description,
                status: createdProduct.status,
                provider_id: createdProduct.provider_id,
                category_id: createdProduct.category_id,
            })
            if(response.status !== 200 && response.status !== 201) {
                throw new Error(`Erreur HTTP: ${response.status}`);
            }
            if (!response.data) {
                throw new Error('Pas de donnée reçues');
            }
            return response.data;
        } catch (error) {
            throw new Error("Problème pour mettre à jour le produit");
        }
    },
    deleteProduct: async (id) => {
        try {
            const response = await instance.delete(`/products/${id}`);
            if(response.status !== 200) {
                throw new Error(`Erreur HTTP: ${response.status}`);
            }
            return response.data;
        } catch (error) {
            throw new Error("Impossible de supprimer le produit");
        }
    }
}