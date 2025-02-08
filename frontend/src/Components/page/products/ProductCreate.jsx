import {useContext, useState} from "react";
import {useNavigate} from "react-router";
import {ProductService} from "../../../../services/Products/ProductService.js";
import {AppContext} from "../../../hooks/context/AppContext.js";

function ProductCreate() {

  const navigate = useNavigate();
  const { providers, categories } = useContext(AppContext);

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    purchase_price: '',
    status: '',
    provider_name: '',
    category_name: ''
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
      const selectedProvider = providers.find(p => p.name === formData.provider_name);
      const selectedCategory = categories.find(c => c.name === formData.category_name);

      const productToCreate = {
        name: formData.name,
        purchase_price: parseFloat(formData.purchase_price),
        description: formData.description,
        status: formData.status.toLowerCase(),
        provider_id: selectedProvider?.id,
        category_id: selectedCategory?.id
      };

      const response = await ProductService.createProduct(productToCreate);
      navigate('/produits');
      window.location.reload();
    } catch (error) {
      alert("Impossible de créer le produit")
      console.error(error);
    }
  };

  return (
      <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg ">
        <h1 className="text-xl text-black font-bold mb-4">Produit</h1>
        <div className="space-y-4">
          <div>
            <label className="block text-black font-bold">Nom du produit</label>
            <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="bg-[#EBEBEB] p-2 w-full rounded"
                placeholder="RTX 5090 TI Strix Asus" />
          </div>
          <div>
            <label className="block text-black font-bold">Description</label>
            <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full p-2 bg-[#EBEBEB] rounded-md resize-none truncate"
                placeholder="La plus puissante des cartes graphiques, le tout nouveau GPU vous offrira ..." />
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div>
              <label className="block text-black font-bold">Prix d'achat (€)</label>
              <input
                  type="number"
                  name="purchase_price"
                  value={formData.purchase_price}
                  onChange={handleChange}
                  className="bg-[#EBEBEB] p-2 w-full rounded"
                  placeholder="0" />
            </div>
            <div>
              <label className="block text-black font-bold">Statut</label>
              <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="bg-[#EBEBEB] p-2 w-full rounded">
                <option value="">Choisir</option>
                <option value="Disponible">Disponible</option>
                <option value="En rupture">En rupture</option>
              </select>
            </div>
            <div>
              <label className="block text-black font-bold">Fournisseur</label>
              <select
                  name="provider_name"
                  value={formData.provider_name}
                  onChange={handleChange}
                  className="bg-[#EBEBEB] p-2 w-full rounded">
                <option value="">Choisir</option>
                {providers.map((provider) => (
                    <option key={provider.id} value={provider.name}>
                      {provider.name}
                    </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-black font-bold">Catégorie</label>
              <select
                  name="category_name"
                  value={formData.category_name}
                  onChange={handleChange}
                  className="bg-[#EBEBEB] p-2 w-full rounded">
                <option value="">Choisir</option>
                {categories.map((category) => (
                    <option key={category.id} value={category.name}>
                      {category.name}
                    </option>
                ))}
              </select>
            </div>
          </div>
          <button className="w-full mt-4 text-lg bg-[#4857FF] text-white p-3 rounded-[16px] cursor-pointer">
            Créer
          </button>
        </div>
      </form>
  );
}

export default ProductCreate;
