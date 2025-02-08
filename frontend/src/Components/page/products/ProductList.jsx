import DataList from "../DataList.jsx";
import {useContext} from "react";
import {NavLink} from "react-router";
import {AppContext} from "../../../hooks/context/AppContext.js";

function ProductList() {

    const {products, isLoading, error} = useContext(AppContext);

    if (isLoading) {
        return (
            <div className="bg-[#F1F1F1] w-full rounded-[16px] py-6 px-8 flex justify-center items-center h-[60vh]">
                <div className="w-8 h-8 border-4 border-[#4857FF] border-t-transparent rounded-full animate-spin"/>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-[#F1F1F1] w-full rounded-[16px] py-6 px-8 flex justify-center items-center h-[60vh]">
                <p className="text-red-500 text-xl">{error}</p>
            </div>
        );
    }

    if (!products.length) {
        return (
            <div className="bg-[#F1F1F1] w-full rounded-[16px] py-6 px-8 flex justify-center items-center h-[60vh]">
                <p className="text-gray-500">Aucun produit disponible</p>
            </div>
        );
    }

    return (
        <div className="bg-[#F1F1F1] w-full rounded-[16px] py-6 px-8 flex flex-col gap-6 max-h-[60vh] overflow-scroll overflow-x-hidden">
            {products.map((product) => (
                <NavLink to={`/produits/${product.id}`} key={product.id}>
                    <DataList
                        title={product.name}
                        category={product.category_name}
                        description={product.description}
                    />
                </NavLink>
            ))}
        </div>
    );
}

export default ProductList