import {useEffect, useState} from "react";
import {useLocation} from "react-router";
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

    const [variantValue, setVariantValue] = useState(variants.primary);
    const [textValue, setTextValue] = useState(text.add);
    const [imgSrc, setImgSrc] = useState(img.add);

    let location = useLocation();

    useEffect(() => {
        if(location.pathname === "/produits"){
            setVariantValue(variants.primary)
            setTextValue(text.add)
            setImgSrc(img.add)
        } else if (location.pathname === "/produits/creer"){
            setVariantValue(variants.warning)
            setTextValue(text.stop)
            setImgSrc(img.stop)
        } else if (location.pathname === "/produits/modifier"){
            setVariantValue(variants.warning)
            setTextValue(text.delete)
            setImgSrc(img.delete)
        } else if (location.pathname === "/fournisseurs"){
            setVariantValue(variants.primary)
            setTextValue(text.add)
            setImgSrc(img.add)
        } else if (location.pathname === "/fournisseurs/creer"){
            setVariantValue(variants.warning)
            setTextValue(text.stop)
            setImgSrc(img.stop)
        } else if (location.pathname === "/fournisseurs/modifier"){
            setVariantValue(variants.warning)
            setTextValue(text.delete)
            setImgSrc(img.delete)
        } else if (location.pathname === "/categories"){
            setVariantValue(variants.primary)
            setTextValue(text.add)
            setImgSrc(img.add)
        } else if (location.pathname === "/categories/creer"){
            setVariantValue(variants.warning)
            setTextValue(text.stop)
            setImgSrc(img.stop)
        } else if (location.pathname === "/categories/modifier"){
            setVariantValue(variants.warning)
            setTextValue(text.delete)
            setImgSrc(img.delete)
        }
    }, [location]);

    return (
        <button
            className={`flex justify-between items-center gap-3 rounded-full py-2 xl:py-3 px-5 font-bold cursor-pointer transform active:scale-95 transition-transform duration-150 text-white ${variantValue}`}
            type="button">
            <p>{textValue}</p>
            <img src={imgSrc} alt="icon"/>
        </button>
    )
}

export default CallToActionButton;