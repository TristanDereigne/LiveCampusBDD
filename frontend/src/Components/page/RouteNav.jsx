import {Route, Routes} from "react-router";
import ProductList from "./products/ProductList.jsx";
import ProviderList from "./provider/ProviderList.jsx";
import CategoryList from "./categories/CategoryList.jsx";
import React, {useEffect, useState} from "react";
import ProductCreate from "./products/ProductCreate.jsx";
import ProductModify from "./products/ProductModify.jsx";
import ProviderCreate from "./provider/ProviderCreate.jsx";
import ProviderModify from "./provider/ProviderModify.jsx";
import CategoryCreate from "./categories/CategoryCreate.jsx";
import CategoryModify from "./categories/CategoryModify.jsx";
import {AppContext} from "../../hooks/context/AppContext.js";
import {ProductService} from "../../../services/Products/ProductService.js";
import {ProviderService} from "../../../services/Providers/ProviderService.js";
import {CategoriesService} from "../../../services/Categories/CategoryService.js";

function RouteNav() {

    const [categories, setCategories] = useState([]);
    const [providers, setProviders] = useState([]);
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const [productsResponse, providersResponse, categoriesResponse] = await Promise.all([
                    ProductService.getAllProducts(),
                    ProviderService.getAllProviders(),
                    CategoriesService.getAllCategories()
                ]);

                if(isMounted) {
                    setProducts(productsResponse);
                    setProviders(providersResponse);
                    setCategories(categoriesResponse);
                }
            } catch (error) {
                if(isMounted) {
                    console.error(error);
                    setError("Impossible de contacter le serveur");
                }
            } finally {
                if(isMounted) {
                    setIsLoading(false);
                }
            }
        };

        fetchData();

        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <AppContext.Provider value={{categories, providers,products, isLoading, error}}>
            <Routes>

                <Route path="/" element={<ProductList/>}/>

                <Route path="/produits" element={<ProductList/>}/>
                <Route path="/produits/creer" element={<ProductCreate/>}/>
                <Route path="/produits/:id" element={<ProductModify/>}/>

                <Route path="/fournisseurs" element={<ProviderList/>}/>
                <Route path="/fournisseurs/creer" element={<ProviderCreate/>}/>
                <Route path="/fournisseurs/:id" element={<ProviderModify/>}/>

                <Route path="/categories" element={<CategoryList/>}/>
                <Route path="/categories/creer" element={<CategoryCreate/>}/>
                <Route path="/categories/:id" element={<CategoryModify/>}/>

            </Routes>
        </AppContext.Provider>
    )
}

export default RouteNav;