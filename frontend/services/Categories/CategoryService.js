import { instance } from "../axios.js";

let response = '';

export const CategoriesService = {

    getAllCategories: async () => {
        try {
            response = await instance.get('/categories')
            if(response.status !== 200) {
                throw new Error(`Erreur HTTP: ${response.status}`);
            }
            if (!response.data) {
                throw new Error('Pas de donnée reçues');
            }
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    updateCategories: async (updatedCategory, id) => {
        try {
            response = await instance.put(`/categories/${id}`, {
                name: updatedCategory.name,
            })
            if (response.status !== 200) {
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
    createCategory: async (createdCategory) => {
        try {
            response = await instance.post(`/categories`, {
                name: createdCategory.name,
            })
            if(response.status !== 200 && response.status !== 201) {
                throw new Error(`Erreur HTTP: ${response.status}`);
            }
            if (!response.data) {
                throw new Error('Pas de donnée reçues');
            }
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error("Impossible de créer le fournisseur");
        }
    },
    deleteCategory: async (id) => {
        try {
            const response = await instance.delete(`/categories/${id}`);
            if(response.status !== 200) {
                throw new Error(`Erreur HTTP: ${response.status}`);
            }
            return response.data;
        } catch (error) {
            throw new Error("Impossible de supprimer la catégorie");
        }
    }
}