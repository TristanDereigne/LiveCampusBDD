import {useState} from "react";
import {useNavigate} from "react-router";

function ProductCreate() {

  const navigate = useNavigate();

  const category1 = {
    id: 1,
    name: "Carte graphique"
  }
  const category2 = {
    id: 2,
    name: "Périphérique"
  }
  const provider1 = {
    id: 1,
    name: "Asus"
  }
  const provider2 = {
    id: 2,
    name: "MSI"
  }

  const categories = [category1, category2];
  const providers = [provider1, provider2];

  const [formData, setFormData] = useState({
    productName: '',
    description: '',
    price: '',
    status: '',
    provider: '',
    category: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Données du formulaire:', formData);
    navigate('/produits');
  };


  return (

    <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg ">
      <h1 className="text-xl text-black font-bold mb-4">Produit</h1>
      <div className="space-y-4">
        <div>
          <label className="block text-black font-bold">Nom du produit</label>
          <input
              name="productName"
              value={formData.productName}
              onChange={handleChange}
              className="bg-[#EBEBEB] p-2 w-full rounded" placeholder="RTX 5090 TI Strix Asus" />
        </div>
        <div>
          <label className="block text-black font-bold">Description</label>
          <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-2 bg-[#EBEBEB] rounded-md resize-none truncate" placeholder="La plus puissante des cartes graphiques, le tout nouveau GPU vous offrira ..." />
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div>
            <label className="block text-black font-bold">Prix d'achat (€)</label>
            <input type="number"
                   name="price"
                   value={formData.price}
                   onChange={handleChange}
                   className="bg-[#EBEBEB] p-2 w-full rounded" placeholder="0" />
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
                name="provider"
                value={formData.provider}
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
                name="category"
                value={formData.category}
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
        <button className="w-full mt-4 text-lg bg-[#4857FF] text-white p-3 rounded-[16px] cursor-pointer">Créer</button>
      </div>
    </form>
  );
}

export default ProductCreate;
