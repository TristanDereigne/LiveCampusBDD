import arrowIcon from "../../assets/icons/arrowGrayRight.png";


function DataList({title, category, description}) {

    return (
        <div className="flex flex-col pb-8 border-b-2 border-[#C2C2C2]/32">
            <div
                className="flex justify-between items-start cursor-pointer transform transition-all hover:scale-[99%] transition-transform duration-150">
                <div className="flex flex-col gap-3 w-full">
                    <div className="flex items-center gap-3">
                        <h2 className="font-bold text-lg">{title}</h2>

                        { category ? (
                            <div className="flex justify-center items-center py-1 px-4 bg-[#4857FF] rounded-[16px]">
                                <p className="text-white">{category}</p>
                            </div>
                        ) : null }


                    </div>
                    {description ? (
                        <p className="text-sm text-[#6B6D7B] truncate w-full">
                            {description}
                        </p>
                    ) : <p className="text-sm text-[#6B6D7B] truncate w-full">
                        Aucune description
                    </p> }


                </div>
                <img src={arrowIcon} alt="go"/>
            </div>
        </div>
    )

}

export default DataList;