
import DisplayNavigator from './DisplayNavigator.jsx'
import {BrowserRouter, Route, Routes} from "react-router";
import CategoryList from "./categories/CategoryList.jsx";
import ProviderList from "./provider/ProviderList.jsx";
import ProductList from "./products/ProductList.jsx";
import React from "react";
import RouteNav from "./RouteNav.jsx";

function Display() {
    
      return (

          <BrowserRouter>

              <div className="bg-white w-full h-full rounded-[16px] p-16">
                  <DisplayNavigator/>
              </div>
              <div className="mt-4">
                  <RouteNav />
              </div>
          </BrowserRouter>

      )
}

export default Display