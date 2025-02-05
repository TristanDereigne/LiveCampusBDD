function ProductCreate() {
  
  return (
    <div className="p-6 bg-white rounded-lg ">
      <h1 className="text-xl text-black font-bold mb-4">Créer un produit</h1>
      <div className="space-y-4">
        <div>
          <label className="block text-black font-bold">Nom du produit</label>
          <input className="bg-[#EBEBEB] p-2 w-full rounded" placeholder="RTX 5090 TI Strix Asus" />
        </div>
        <div>
          <label className="block text-black font-bold">Description</label>
          <textarea className="w-full p-2 bg-[#EBEBEB] rounded-md resize-none truncate" placeholder="La plus puissante des cartes graphiques, le tout nouveau GPU vous offrira ..." />
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div>
            <label className="block text-black font-bold">Prix d'achat (€)</label>
            <input type="number" className="bg-[#EBEBEB] p-2 w-full rounded" placeholder="0" />
          </div>
          <div>
            <label className="block text-black font-bold">Statut</label>
            <select className="bg-[#EBEBEB] p-2 w-full rounded">
              <option value="">Choisir</option>
              <option value="Disponible">Disponible</option>
              <option value="En rupture">En rupture</option>
            </select>
          </div>
          <div>
            <label className="block text-black font-bold">Fournisseur</label>
            <select className="bg-[#EBEBEB] p-2 w-full rounded">
              <option value="">Choisir</option>
              <option value="Asus">Asus</option>
              <option value="MSI">MSI</option>
            </select>
          </div>
          <div>
            <label className="block text-black font-bold">Catégorie</label>
            <select className="bg-[#EBEBEB] p-2 w-full rounded">
              <option value="">Choisir</option>
              <option value="Carte graphique">Carte graphique</option>
              <option value="Périphérique">Périphérique</option>
            </select>
          </div>
        </div>
        <button className="w-full mt-4 text-lg bg-[#4857FF] text-white p-3 rounded-[16px] cursor-pointer">Créer</button>
      </div>
    </div>
  );
}

export default ProductCreate;
