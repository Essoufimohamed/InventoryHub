const categories = [
    { id: 1, name: "Electronics", image: "../src/assets/icons/gadgets.png" },
    { id: 2, name: "Fashion", image: "../src/assets/icons/fashion.png" },
    { id: 3, name: "Beauty", image: "../src/assets/icons/make-up.png" },
    ,
];

export default function CategoriesList() {
    return (
        <div className="max-w-3xl mx-auto mt-6 p-6 border border-gray-300 rounded-xl shadow-sm bg-white">
            <h2 className="text-xl font-semibold text-[#20607E] mb-4">
                Categories List :
            </h2>
            <div className="grid grid-cols-3 gap-4">
                {categories.map((cat) => (
                    <div
                        key={cat.id}
                        className="flex flex-col items-center p-3 border border-gray-300 rounded-lg hover:shadow-md transition"
                    >
                        <img
                            src={cat.image}
                            alt={cat.name}
                            className="w-16 h-16 object-contain mb-2"
                        />
                        <span className="text-gray-700 font-medium">
                            {cat.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
