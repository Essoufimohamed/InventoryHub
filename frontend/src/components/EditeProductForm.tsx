import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";

export default function EditProductForm({ product, onClose }) {
    const { updateProduct, categories } = useContext(ProductContext);
    const [productInfo, setProductInfo] = useState({
        name: product.name || "",
        sku: product.sku || "",
        category: product.category || "",
        price: product.price || "",
        quantity: product.quantity || "",
        image: product.image || null,
        imageName: product.imageName || "",
    });

    // Handle image update
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProductInfo((prev) => ({
                    ...prev,
                    image: reader.result,
                    imageName: file.name,
                }));
            };
            reader.readAsDataURL(file);
        } else {
            setProductInfo((prev) => ({
                ...prev,
                image: null,
                imageName: "",
            }));
        }
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        updateProduct(product._id, productInfo);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-blue-50 p-6 rounded-lg shadow-lg w-full max-w-md relative">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-red-500 transition-colors"
                >
                    ✕
                </button>

                <h3 className="text-2xl text-center font-semibold text-[#0D4E6D] mb-3">
                    Edit Product Information
                </h3>

                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <input
                        value={productInfo.name}
                        onChange={(e) =>
                            setProductInfo({
                                ...productInfo,
                                name: e.target.value,
                            })
                        }
                        className="bg-white border border-gray-200 px-3 py-2 rounded-xl focus:border-blue-400 outline-none"
                        type="text"
                        placeholder="Product name"
                    />
                    <input
                        value={productInfo.sku}
                        onChange={(e) =>
                            setProductInfo({
                                ...productInfo,
                                sku: e.target.value,
                            })
                        }
                        className="bg-white border border-gray-200 px-3 py-2 rounded-xl focus:border-blue-400 outline-none"
                        type="text"
                        placeholder="Product SKU"
                    />
                    <select
                        value={productInfo.category}
                        onChange={(e) =>
                            setProductInfo({
                                ...productInfo,
                                category: e.target.value,
                            })
                        }
                        className="bg-white border border-gray-200 px-3 py-2 rounded-xl focus:border-blue-400 outline-none"
                    >
                        <option value="">Choose category</option>
                        {categories &&
                            categories.map((cat) => {
                                return (
                                    <option key={cat._id} value={cat._id}>
                                        {cat.name}
                                    </option>
                                );
                            })}
                    </select>
                    <input
                        value={productInfo.price}
                        onChange={(e) =>
                            setProductInfo({
                                ...productInfo,
                                price: parseFloat(e.target.value),
                            })
                        }
                        className="bg-white border border-gray-200 px-3 py-2 rounded-xl focus:border-blue-400 outline-none"
                        type="number"
                        placeholder="Price"
                    />
                    <input
                        value={productInfo.quantity}
                        onChange={(e) =>
                            setProductInfo({
                                ...productInfo,
                                quantity: parseInt(e.target.value),
                            })
                        }
                        className="bg-white border border-gray-200 px-3 py-2 rounded-xl focus:border-blue-400 outline-none"
                        type="number"
                        placeholder="Quantity"
                    />

                    {/* Preview existing or newly uploaded image */}
                    {productInfo.image && (
                        <img
                            src={productInfo.image}
                            alt="Product Preview"
                            className="w-24 h-24 object-cover rounded-lg border mx-auto"
                        />
                    )}

                    <input
                        onChange={handleFileChange}
                        className="bg-white border border-gray-200 px-3 py-2 rounded-xl focus:border-blue-400 outline-none"
                        type="file"
                        name="image"
                    />

                    <button
                        type="submit"
                        className="bg-gradient-to-tr from-yellow-500 to-orange-500 text-white px-5 py-2 rounded-xl hover:scale-105 transition-transform ml-auto"
                    >
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
}
