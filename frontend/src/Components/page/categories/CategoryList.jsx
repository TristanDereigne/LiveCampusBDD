import {useContext} from "react";
import {AppContext} from "../../../hooks/context/AppContext.js";
import {NavLink} from "react-router";
import DataList from "../DataList.jsx";

function CategoryList() {

    const {categories} = useContext(AppContext);

    return (
        <div className="bg-[#F1F1F1] w-full rounded-[16px] py-6 px-8 flex flex-col gap-6 max-h-[60vh] overflow-scroll overflow-x-hidden">

            {categories.map((category, index) => (
                <NavLink to={`/categories/${category.id}`} key={category.id}>
                    <DataList
                        title={category.name}
                    />
                </NavLink>

            ))}

        </div>

    )
}

export default CategoryList