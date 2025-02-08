import {useContext} from "react";
import {AppContext} from "../../../hooks/context/AppContext.js";
import {NavLink} from "react-router";
import DataList from "../DataList.jsx";

function ProviderList() {

    const {providers} = useContext(AppContext);

    return (
        <div className="bg-[#F1F1F1] w-full rounded-[16px] py-6 px-8 flex flex-col gap-6 max-h-[60vh] overflow-scroll overflow-x-hidden">

            {providers.map((provider, index) => (
                <NavLink to={`/fournisseurs/${provider.id}`} key={provider.id}>
                    <DataList
                        title={provider.name}
                    />
                </NavLink>

            ))}

        </div>

    )
}

export default ProviderList