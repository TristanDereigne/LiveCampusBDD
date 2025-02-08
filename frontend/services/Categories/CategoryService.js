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
            console.error(error);
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
            console.log(error);
            throw new Error("Problème pour mettre à jour le produit");
        }
    }
}