import { instance } from "../axios.js";

export const ProductService = {
    getAllProducts: () => instance.get('/todos/1'),
}