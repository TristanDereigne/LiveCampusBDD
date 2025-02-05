import Navigator from "./Navigator.jsx";
import CallToActionButton from "./CallToActionButton.jsx";
import SearchBar from "./SearchBar.jsx";

function DisplayNavigator() {

    return (

        <div className="flex justify-between w-full pb-4 border-b-2 border-[#C2C2C2]/32">

            <Navigator />

            <div className="flex items-center justify-end w-6/12 gap-5 text-white text-md xl:text-base">

                <CallToActionButton/>
                <SearchBar />

            </div>

        </div>
    )
}

export default DisplayNavigator
