import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
    const handleClick = () => {
        setShowIndex();
    };

    return (
        <div>
            <div className="w-6/12 mx-auto my-4 bg-pink-50 shadow-lg p-4 rounded-lg">
                <div 
                    className="flex justify-between items-center cursor-pointer" 
                    onClick={handleClick}
                >
                    <span className="font-bold text-lg text-pink-700">
                        {data.title} ({data.itemCards.length})
                    </span>
                    <span className="text-pink-700">⬇️</span>
                </div>
                {showItems && <ItemList items={data.itemCards} />}
            </div>
        </div>
    );
};

export default RestaurantCategory;
