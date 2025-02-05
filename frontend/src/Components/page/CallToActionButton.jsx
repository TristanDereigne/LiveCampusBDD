import {useEffect, useState} from "react";
import {NavLink, useLocation} from "react-router";
import plusIcon from "../../assets/icons/plusWhiteIcon.png";
import closeIcon from "../../assets/icons/closeWhiteIcon.png";

function CallToActionButton() {

    const variants = {
        primary: 'bg-[#4857FF]',
        secondary: 'bg-[#000000]',
        success: 'bg-[#34D399]',
        warning: 'bg-[#FF4E48]',
    };

    const img = {
        add: plusIcon,
        stop: closeIcon,
        delete: closeIcon,
    };

    const text = {
        add: 'Ajoutez',
        stop: 'Annulez',
        delete: 'Supprimez',
    };

    const path = {
        addProduct: '/produits/creer',
        stopProduct: '/produits',
        deleteProduct: '/produits/modifier',
        addProvider: '/fournisseurs/creer',
        stopProvider: '/fournisseurs',
        deleteProvider: '/produits/modifier',
        addCategory: '/categories/creer',
        stopCategory: '/categories',
        deleteCategory: '/produits/modifier',

    };

    const [variantValue, setVariantValue] = useState(variants.primary);
    const [textValue, setTextValue] = useState(text.add);
    const [imgSrc, setImgSrc] = useState(img.add);
    const [pathValue, setPathValue] = useState(path.addProduct);

    let location = useLocation();

    useEffect(() => {
        if(location.pathname === "/produits"){
            setVariantValue(variants.primary)
            setTextValue(text.add)
            setImgSrc(img.add)
            setPathValue(path.addProduct);
        } else if (location.pathname === "/produits/creer"){
            setVariantValue(variants.warning)
            setTextValue(text.stop)
            setImgSrc(img.stop)
            setPathValue(path.stopProduct);
        } else if (location.pathname === "/produits/modifier"){
            setVariantValue(variants.warning)
            setTextValue(text.delete)
            setImgSrc(img.delete)
            setPathValue(path.deleteProduct);
        } else if (location.pathname === "/fournisseurs"){
            setVariantValue(variants.primary)
            setTextValue(text.add)
            setImgSrc(img.add)
            setPathValue(path.addProvider);
        } else if (location.pathname === "/fournisseurs/creer"){
            setVariantValue(variants.warning)
            setTextValue(text.stop)
            setImgSrc(img.stop)
            setPathValue(path.stopProvider);
        } else if (location.pathname === "/fournisseurs/modifier"){
            setVariantValue(variants.warning)
            setTextValue(text.delete)
            setImgSrc(img.delete)
            setPathValue(path.deleteProvider);
        } else if (location.pathname === "/categories"){
            setVariantValue(variants.primary)
            setTextValue(text.add)
            setImgSrc(img.add)
            setPathValue(path.addCategory);
        } else if (location.pathname === "/categories/creer"){
            setVariantValue(variants.warning)
            setTextValue(text.stop)
            setImgSrc(img.stop)
            setPathValue(path.stopCategory);
        } else if (location.pathname === "/categories/modifier"){
            setVariantValue(variants.warning)
            setTextValue(text.delete)
            setImgSrc(img.delete)
            setPathValue(path.deleteCategory);
        }
    }, [location]);

    return (
        <NavLink to={pathValue}>
            <button
                className={`flex justify-between items-center gap-3 rounded-full py-2 xl:py-3 px-5 font-bold cursor-pointer transform active:scale-95 transition-transform duration-150 text-white ${variantValue}`}
                type="button">
                <p>{textValue}</p>
                <img src={imgSrc} alt="icon"/>
            </button>
        </NavLink>
    )
}

export default CallToActionButton;