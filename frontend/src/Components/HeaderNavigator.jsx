import { useState } from "react";



function HeaderNavigator() {

    console.log("header")

    const [activeButton, setActiveButton] = useState("Produit"); 
    return (

        <div className="flex font-[intel] text-[25px]  justify-between py-[30px] px-[128px] border-b-2 border-gray-400 ">

            <div className="flex  py-[20px] px-[20px]  gap-[20px]  ">

            <button className={` w-[150px] rounded-full py-[10px] px-[20px] ${ activeButton === "Produit" ? "bg-black text-white " : "bg-white text-black " }`}
            onClick={() => setActiveButton("Produit")}> Produit</button>

             <button className={` w-[150px] rounded-full py-[10px] px-[20px] ${ activeButton === "Fournisseur" ? "bg-black text-white " : "bg-white text-black " }`}
            onClick={() => setActiveButton("Fournisseur")}> Fournisseur</button>

             <button className={` w-[150px] rounded-full py-[10px] px-[20px]  ${ activeButton === "Catégories" ? "bg-black text-white " : "bg-white text-black " }`}
            onClick={() => setActiveButton("Catégories")}> Catégories</button>

            
            </div>

            <div className=" flex min-w-[150px] py-[20px] px-[20px]  gap-[20px] text-white">
                <button  className=" bg-[#FF4E48]  rounded-full  py-[10px] px-[20px]"  type="button">Annuler</button>
                <input  type="text" placeholder="Rechercher..." className="bg-black text-white py-[10px] px-[10px] rounded-full   w-[250px]"/>
            </div>

        </div>
    )
}

export default HeaderNavigator
