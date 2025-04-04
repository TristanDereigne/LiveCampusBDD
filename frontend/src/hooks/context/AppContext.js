import {createContext} from "react";

export const AppContext = createContext({
    categories: [],
    providers: [],
    products: [],
    isLoading: true,
    error: null
});