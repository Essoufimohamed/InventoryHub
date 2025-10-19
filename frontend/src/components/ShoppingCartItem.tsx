import { useCartStore } from "../stores/useCartStore";
import { Trash2, Plus, Minus } from "lucide-react";

export default function CartItem({ item }) {
    const updateQty = useCartStore((s) => s.updateQty);
    const removeItem = useCartStore((s) => s.removeItem);
    return (
        <div className="flex  items-center justify-between gap-2 mb-3 shadow rounded-xl border-gray-100 border px-3 py-2">
            <img src={item.image} alt="" width={35} height={35} />
            <div>
                <div className="font-medium">{item.name}</div>
                <div className="text-sm text-gray-500">
                    ${item.price.toFixed(2)} x {item.qty} .
                    <span className="text-black">
                        ${(item.price * item.qty).toFixed(2)}
                    </span>
                </div>
            </div>
            <div className="flex items-center gap-1">
                <button
                    onClick={() => updateQty(item._id, item.qty - 1)}
                    className="border border-gray-500 rounded"
                >
                    <Minus width={18} />
                </button>
                <div className="px-2">{item.qty}</div>
                <button
                    onClick={() => updateQty(item._id, item.qty + 1)}
                    className=" border border-gray-500 rounded"
                >
                    <Plus width={18} />
                </button>
                <button
                    onClick={() => removeItem(item._id)}
                    className="ml-2 text-red-600 hover:text-red-500 transition-all "
                >
                    <Trash2 />
                </button>
            </div>
        </div>
    );
}
