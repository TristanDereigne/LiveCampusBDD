
import DisplayNavigator from './DisplayNavigator.jsx'
import {BrowserRouter, Route, Routes} from "react-router";
import CategoryList from "./categories/CategoryList.jsx";
import ProviderList from "./provider/ProviderList.jsx";
import ProductList from "./products/ProductList.jsx";
import React from "react";

function Display() {
    
      return (

          <BrowserRouter>

              <div className="bg-white w-full h-full rounded-[16px] p-16">
                  <DisplayNavigator/>
              </div>
              <div className="mt-4">
                  <Routes>
                      <Route path="/" element={<ProductList/>}/>
                      <Route path="/produits" element={<ProductList/>}/>
                      <Route path="/fournisseurs" element={<ProviderList/>}/>
                      <Route path="/categories" element={<CategoryList/>}/>
                  </Routes>
              </div>
          </BrowserRouter>

      )
}

export default Display