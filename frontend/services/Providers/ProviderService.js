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
            throw new Error("Problème pour mettre à jour le fournisseur");
        }
    },
    createProvider: async (createdProvider) => {
        try {
            response = await instance.post(`/providers`, {
                name: createdProvider.name,
            })
            if(response.status !== 200 && response.status !== 201) {
                throw new Error(`Erreur HTTP: ${response.status}`);
            }
            if (!response.data) {
                throw new Error('Pas de donnée reçues');
            }
            return response.data;
        } catch (error) {
            throw new Error("Impossible de créer le fournisseur");
        }
    },
    deleteProvider: async (id) => {
        try {
            const response = await instance.delete(`/providers/${id}`);
            if(response.status !== 200) {
                throw new Error(`Erreur HTTP: ${response.status}`);
            }
            return response.data;
        } catch (error) {
            throw new Error("Impossible de supprimer le fournisseur");
        }
    }
}