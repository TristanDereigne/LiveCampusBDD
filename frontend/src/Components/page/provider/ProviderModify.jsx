import {useNavigate, useParams} from "react-router";
import {useContext, useEffect, useState} from "react";
import {AppContext} from "../../../hooks/context/AppContext.js";
import {ProviderService} from "../../../../services/Providers/ProviderService.js";

function ProviderModify() {

    const navigate = useNavigate();
    const { providers} = useContext(AppContext);
    const { id } = useParams();

    const [formData, setFormData] = useState({
        name: '',
    });

    useEffect(() => {
        try {
            const provider = providers.find(p => p.id === parseInt(id));

            setFormData({
                name: provider.name,
            })
        } catch (error) {
            console.error(error);
            alert("Problème lors de la récupération des infos fournisseurs.")
        }


    },[providers, id])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const dataToUpdate = {
                name: formData.name,
            };
            console.log('Données envoyées:', dataToUpdate);
            await ProviderService.updateProvider(dataToUpdate, id);
            navigate('/fournisseurs');
            window.location.reload();
        } catch (error) {
            console.error(error);
            alert("Impossible de modifier le fournisseur");
        }
    };


    return (

        <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg ">
            <h1 className="text-xl text-black font-bold mb-4">Fournisseur</h1>
            <div className="space-y-4">
                <div>
                    <label className="block text-black font-bold">Nom du fournisseur</label>
                    <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-[#EBEBEB] p-2 w-full rounded" placeholder="Asus" />
                </div>
                <button className="w-full mt-4 text-lg bg-[#4857FF] text-white p-3 rounded-[16px] cursor-pointer">Modifier</button>
            </div>
        </form>
    );
}

export default ProviderModify;