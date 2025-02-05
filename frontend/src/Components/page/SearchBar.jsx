import searchIcon from "../../assets/icons/searchIcon.png";

function SearchBar() {

    return (
        <div
            className="flex gap-2 items-center justify-between bg-black  text-white py-2 xl:py-3 px-4 rounded-full w-6/12 transform active:scale-95 transition-transform duration-150">
            <input type="text" placeholder=" Rechercher..." className="focus:outline-none w-8/12"/>
            <img src={searchIcon} alt=""/>
        </div>
    )
}

export default SearchBar;