import DataList from "../DataList.jsx";
import {useEffect, useState} from "react";
import {ProductService} from "../../../../services/Products/ProductService.js";
import {NavLink} from "react-router";

function ProductList() {


    const [products, setProducts] = useState([]);

    useEffect(() => {
        let isMounted = true;
        const fetchProducts = async () => {
            try {
                const response = await ProductService.getAllProducts();
                if(isMounted){
                    console.log(response);
                    setProducts(response);
                }
            } catch (error) {
                console.error(error);
                alert("Erreur lors de la récupération des produits, veuillez contacter le support.")
            }
        };

        fetchProducts();
        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <div className="bg-[#F1F1F1] w-full rounded-[16px] py-6 px-8 flex flex-col gap-6 max-h-[60vh] overflow-scroll overflow-x-hidden">

            {products.map((product, index) => (
                <NavLink to={`/produits/${product.id}`} key={product.id}>
                    <DataList
                        title={product.title}
                        category={product.category}
                        description={product.description}
                    />
                </NavLink>

            ))}

        </div>

    )
}

export default ProductList