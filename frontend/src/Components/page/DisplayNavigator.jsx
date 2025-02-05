import plusIcon from "../../assets/icons/plusWhiteIcon.png"
import searchIcon from "../../assets/icons/searchIcon.png"
import Navigator from "./Navigator.jsx";

function DisplayNavigator() {

    return (

        <div className="flex justify-between w-full pb-4 border-b-2 border-[#C2C2C2]/32">

            <Navigator />

            <div className="flex items-center justify-end w-6/12 gap-5 text-white text-md xl:text-base">

                <button  className="flex justify-between items-center gap-3 bg-[#4857FF] rounded-full py-2 xl:py-3 px-5 font-bold cursor-pointer transform active:scale-95 transition-transform duration-150" type="button">
                    <p>Ajoutez</p>
                    <img src={plusIcon} alt="more"/>
                </button>

                <div className="flex gap-2 items-center justify-between bg-black  text-white py-2 xl:py-3 px-4 rounded-full w-6/12 transform active:scale-95 transition-transform duration-150">
                    <input  type="text" placeholder=" Rechercher..." className="focus:outline-none w-8/12"/>
                    <img src={searchIcon} alt=""/>
                </div>
            </div>

        </div>
    )
}

export default DisplayNavigator
