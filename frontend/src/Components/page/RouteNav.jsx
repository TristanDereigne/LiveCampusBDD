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

    useEffect(() => {
        let isMounted = true;
        const fetchProducts = async () => {
            try {
                const response = await ProductService.getAllProducts();
                if(isMounted){
                    setProducts(response);
                }
            } catch (error) {
                console.error(error);
                alert("Erreur lors de la récupération des produits, veuillez contacter le support.")
            }
        };
        const fetchProviders = async () => {
            try {
                const response = await ProviderService.getAllProviders();
                if(isMounted){
                    setProviders(response);
                }
            } catch (error) {
                console.error(error);
                alert("Erreur lors de la récupération des produits, veuillez contacter le support.")
            }
        };
        const fetchCategories = async () => {
            try {
                const response = await CategoriesService.getAllCategories();
                if(isMounted){
                    setCategories(response);
                }
            } catch (error) {
                console.error(error);
                alert("Erreur lors de la récupération des produits, veuillez contacter le support.")
            }
        };

        fetchProducts();
        fetchProviders();
        fetchCategories();
        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <AppContext.Provider value={{categories, providers,products}}>
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