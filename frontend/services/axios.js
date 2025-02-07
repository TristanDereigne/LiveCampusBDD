import axios from "axios";

export const instance = axios.create({
  baseURL: "https://localhost:3000/",
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;

    if (status >= 500) {
      console.error("Erreur serveur");
    } else if (status >= 400) {
      console.error(
        status === 401
          ? "Non autorisé"
          : status === 403
          ? "Accès interdit"
          : status === 404
          ? "Ressource non trouvée"
          : "Erreur client"
      );
    } else if (status >= 300) {
      console.error("Erreur de redirection");
    }

    return Promise.reject(error);
  }
);
