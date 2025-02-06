import DataList from "../DataList.jsx";
import {useEffect} from "react";
import {ProductService} from "../../../../services/Products/ProductService.js";
import {NavLink} from "react-router";

function ProductList() {

    /*useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await ProductService.getAllProducts();
                console.log(response);
            } catch (error) {
                console.error(error);
            }
        };

        fetchProducts();
    }, []);*/

    let product = {
        id:'1',
        title: 'Strix RTX 5090 TI',
        category: '',
        description: '',
    }

    let product2 = {
        id:'2',
        title: 'Strix RTX 5090 TI',
        category: 'Carte Graphique',
        description: 'La plus puissante de toutes les cartes graphiques elle La plus puissante de toutes les cartes graphiques elle La plus puissante de toutes les cartes graphiques elle La plus puissante de toutes les cartes graphiques elle La plus puissante de toutes les cartes graphiques elle La plus puissante de toutes les cartes graphiques elle La plus puissante de toutes les cartes graphiques elle ...',
    }

    let products = [product, product2];

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