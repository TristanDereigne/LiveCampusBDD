import {NavLink, useLocation} from "react-router";
import {useEffect, useState} from "react";

function Navigator() {

    const [activeButton, setActiveButton] = useState("Produit");

    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;
        if (path.includes("/produits")) {
            setActiveButton("Produit");
        } else if (path.includes("/fournisseurs")) {
            setActiveButton("Fournisseur");
        } else if (path.includes("/categories")) {
            setActiveButton("Catégories");
        }
    }, [location]);

    return (

        <div className="flex gap-2 xl:gap-5 text-base lg:text-lg xl:text-xl w-6/12">

            <NavLink className={"w-4/12"} to={"/produits"}>
                <button
                    className={`w-full rounded-full py-2 px-5 cursor-pointer ${activeButton === "Produit" ? "bg-black text-white font-bold " : "bg-white text-black "}`}
                    onClick={() => setActiveButton("Produit")}>Produits
                </button>
            </NavLink>

            <NavLink className={"w-5/12"} to={"/fournisseurs"}>
                <button
                    className={`flex items-center justify-center w-full rounded-full py-2 px-5 cursor-pointer ${activeButton === "Fournisseur" ? "bg-black text-white font-bold" : "bg-white text-black "}`}
                    onClick={() => setActiveButton("Fournisseur")}>Fournisseurs
                </button>
            </NavLink>

            <NavLink className={"w-4/12"} to={"/categories"}>
                <button
                    className={`w-full rounded-full py-2 px-5 cursor-pointer ${activeButton === "Catégories" ? "bg-black text-white font-bold" : "bg-white text-black "}`}
                    onClick={() => setActiveButton("Catégories")}>Catégories
                </button>
            </NavLink>

        </div>

    )
}

export default Navigator