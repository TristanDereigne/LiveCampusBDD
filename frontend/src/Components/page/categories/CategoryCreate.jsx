import {CategoriesService} from "../../../../services/Categories/CategoryService.js";
import {useNavigate} from "react-router";
import {useState} from "react";

function CategoryCreate() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
    });

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
            const categoryToCreate = {
                name: formData.name,
            };

            const response = await CategoriesService.createCategory(categoryToCreate);
            navigate('/categories');
            window.location.reload();
        } catch (error) {
            alert("Impossible de créer le fournisseur")
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg ">
            <h1 className="text-xl text-black font-bold mb-4">Catégorie</h1>
            <div className="space-y-4">
                <div>
                    <label className="block text-black font-bold">Nom de la catégorie</label>
                    <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-[#EBEBEB] p-2 w-full rounded"
                        placeholder="Carte Graphique" />
                </div>
                <button className="w-full mt-4 text-lg bg-[#4857FF] text-white p-3 rounded-[16px] cursor-pointer">
                    Créer
                </button>
            </div>
        </form>
    );
}

export default CategoryCreate;