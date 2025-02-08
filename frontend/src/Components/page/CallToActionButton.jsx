import {useEffect, useState} from "react";
import {NavLink, useLocation, useNavigate} from "react-router";
import plusIcon from "../../assets/icons/plusWhiteIcon.png";
import closeIcon from "../../assets/icons/closeWhiteIcon.png";
import {ProductService} from "../../../services/Products/ProductService.js";
import {CategoriesService} from "../../../services/Categories/CategoryService.js";
import {ProviderService} from "../../../services/Providers/ProviderService.js";

function CallToActionButton() {

    const navigate = useNavigate();

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
        deleteProduct: '/produits',
        addProvider: '/fournisseurs/creer',
        stopProvider: '/fournisseurs',
        deleteProvider: '/fournisseurs',
        addCategory: '/categories/creer',
        stopCategory: '/categories',
        deleteCategory: '/categories',
    };

    const [variantValue, setVariantValue] = useState(variants.primary);
    const [textValue, setTextValue] = useState(text.add);
    const [imgSrc, setImgSrc] = useState(img.add);
    const [pathValue, setPathValue] = useState(path.addProduct);

    let location = useLocation();

    const handleClick = async (e) => {
        const currentPath = location.pathname;
        if (textValue === text.delete) {
            e.preventDefault();

            const pathParts = currentPath.split('/');
            const id = pathParts[pathParts.length - 1];
            const type = pathParts[1];

            try {
                switch (type) {
                    case 'produits':
                        await ProductService.deleteProduct(id);
                        navigate('/produits');
                        break;
                    case 'fournisseurs':
                        await ProviderService.deleteProvider(id);
                        navigate('/fournisseurs');
                        break;
                    case 'categories':
                        await CategoriesService.deleteCategory(id);
                        navigate('/categories');
                        break;
                }
                window.location.reload();
            } catch (error) {
                console.error("Erreur lors de la suppression:", error);
                alert(`Impossible de supprimer ${type.slice(0, -1)}`);
            }
        }
    };

    useEffect(() => {

        const currentPath = location.pathname;
        const isEditPath = /\/(produits|fournisseurs|categories)\/(?!creer)[^/]+$/.test(currentPath);
        if (isEditPath) {
            const basePath = currentPath.split('/').slice(0, -1).join('/');
            setVariantValue(variants.warning);
            setTextValue(text.delete);
            setImgSrc(img.delete);
            setPathValue(basePath);
            return;
        }

        switch (currentPath) {
            case "/produits":
                setVariantValue(variants.primary);
                setTextValue(text.add);
                setImgSrc(img.add);
                setPathValue(path.addProduct);
                break;
            case "/produits/creer":
                setVariantValue(variants.warning);
                setTextValue(text.stop);
                setImgSrc(img.stop);
                setPathValue(path.stopProduct);
                break;
            case "/fournisseurs":
                setVariantValue(variants.primary);
                setTextValue(text.add);
                setImgSrc(img.add);
                setPathValue(path.addProvider);
                break;
            case "/fournisseurs/creer":
                setVariantValue(variants.warning);
                setTextValue(text.stop);
                setImgSrc(img.stop);
                setPathValue(path.stopProvider);
                break;
            case "/categories":
                setVariantValue(variants.primary);
                setTextValue(text.add);
                setImgSrc(img.add);
                setPathValue(path.addCategory);
                break;
            case "/categories/creer":
                setVariantValue(variants.warning);
                setTextValue(text.stop);
                setImgSrc(img.stop);
                setPathValue(path.stopCategory);
                break;
            default:
                setVariantValue(variants.primary);
                setTextValue(text.add);
                setImgSrc(img.add);
                setPathValue(path.addProduct);
        }
    }, [location]);

    return (
        <NavLink to={pathValue}>
            <button
                onClick={handleClick}
                className={`flex justify-between items-center gap-3 rounded-full py-2 xl:py-3 px-5 font-bold cursor-pointer transform active:scale-95 transition-transform duration-150 text-white ${variantValue}`}
                type="button">
                <p>{textValue}</p>
                <img src={imgSrc} alt="icon"/>
            </button>
        </NavLink>
    )
}

export default CallToActionButton;