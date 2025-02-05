import {Route, Routes} from "react-router";
import ProductList from "./products/ProductList.jsx";
import ProviderList from "./provider/ProviderList.jsx";
import CategoryList from "./categories/CategoryList.jsx";
import React from "react";
import ProductCreate from "./products/ProductCreate.jsx";
import ProductModify from "./products/ProductModify.jsx";
import ProviderCreate from "./provider/ProviderCreate.jsx";
import ProviderModify from "./provider/ProviderModify.jsx";
import CategoryCreate from "./categories/CategoryCreate.jsx";
import CategoryModify from "./categories/CategoryModify.jsx";

function RouteNav() {

    return (

        <Routes>

            <Route path="/" element={<ProductList/>}/>

            <Route path="/produits" element={<ProductList/>}/>
            <Route path="/produits/creer" element={<ProductCreate/>}/>
            <Route path="/produits/modifier" element={<ProductModify/>}/>

            <Route path="/fournisseurs" element={<ProviderList/>}/>
            <Route path="/fournisseurs/creer" element={<ProviderCreate/>}/>
            <Route path="/fournisseurs/modifier" element={<ProviderModify/>}/>

            <Route path="/categories" element={<CategoryList/>}/>
            <Route path="/categories/creer" element={<CategoryCreate/>}/>
            <Route path="/categories/modifier" element={<CategoryModify/>}/>

        </Routes>

    )
}

export default RouteNav;