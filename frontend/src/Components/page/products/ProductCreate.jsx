function ProductCreate() {
  
  return (
    <div className="p-6  bg-white rounded-lg shadow mt-0">
      <h1 className="text-xl text-black mb-4">Créer un produit</h1>
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700">Nom du produit</label>
          <input className="bg-gray-100 p-2 w-full rounded" placeholder="Entrez le nom du produit" />
        </div>
        <div>
          <label className="block text-gray-700">Description</label>
          <textarea className="w-full p-2 bg-gray-100 rounded-md resize-none" placeholder="Entrez la description du produit" />
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div>
            <label className="block text-gray-700">Prix d'achat (€)</label>
            <input type="number" className="bg-gray-100 p-2 w-full rounded" placeholder="0" />
          </div>
          <div>
            <label className="block text-gray-700">Statut</label>
            <select className="bg-gray-100 p-2 w-full rounded">
              <option value="">Choisir</option>
              <option value="Disponible">Disponible</option>
              <option value="En rupture">En rupture</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Fournisseur</label>
            <select className="bg-gray-100 p-2 w-full rounded">
              <option value="">Choisir</option>
              <option value="Asus">Asus</option>
              <option value="MSI">MSI</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Catégorie</label>
            <select className="bg-gray-100 p-2 w-full rounded">
              <option value="">Choisir</option>
              <option value="Carte graphique">Carte graphique</option>
              <option value="Périphérique">Périphérique</option>
            </select>
          </div>
        </div>
        <button className="w-full mt-4 text-lg bg-blue-600 text-white p-3 rounded">Créer</button>
      </div>
    </div>
  );
}

export default ProductCreate;
