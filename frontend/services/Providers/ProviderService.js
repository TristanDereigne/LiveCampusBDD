import { instance } from "../axios.js";

let response = '';

export const ProviderService = {

    getAllProviders: async () => {
        try {
            response = await instance.get('/providers')
            if (response.status !== 200) {
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
    updateProvider: async (updatedProvider, id) => {
        try {
            response = await instance.put(`/providers/${id}`, {
                name: updatedProvider.name,
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