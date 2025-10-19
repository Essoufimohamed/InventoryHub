import { useCartStore } from "../stores/useCartStore";

export default function ProductCard({ product }) {
    const addItem = useCartStore((state) => state.addItem);

    return (
        <div
            className="bg-white p-4 rounded-2xl shadow cursor-pointer transition-all duration-300 hover:scale-105"
            onClick={() => addItem(product)}
        >
            <img
                src={product.image}
                className="h-40 w-full object-cover mx-auto rounded-xl mb-2"
            />
            <h3 className="font-medium">{product.name}</h3>
            <p className="text-sm text-gray-600">${product.price.toFixed(2)}</p>
            {/* <div className="mt-3">
                <button
                    onClick={() => addItem(product)}
                    className="px-3 py-1 bg-green-500 text-white rounded"
                >
                    + Add
                </button>
            </div> */}
        </div>
    );
}
