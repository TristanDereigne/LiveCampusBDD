import DataList from "../DataList.jsx";
import {useContext} from "react";
import {NavLink} from "react-router";
import {AppContext} from "../../../hooks/context/AppContext.js";

function ProductList() {

    const {products} = useContext(AppContext);

    return (
        <div className="bg-[#F1F1F1] w-full rounded-[16px] py-6 px-8 flex flex-col gap-6 max-h-[60vh] overflow-scroll overflow-x-hidden">

            {products.map((product, index) => (
                <NavLink to={`/produits/${product.id}`} key={product.id}>
                    <DataList
                        title={product.name}
                        category={product.category_name}
                        description={product.description}
                    />
                </NavLink>

            ))}

        </div>

    )
}

export default ProductList