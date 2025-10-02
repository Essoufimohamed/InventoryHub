import { useState } from "react";
import api from "../utils/api";
import toast from "react-hot-toast";

export default function AddProductForm({ onClose }) {
    const [productInfo, setProductInfo] = useState({
        name: "",
        sku: "",
        category: "",
        price: "",
        quantity: "",
    });

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            console.log(reader);

            reader.onloadend = () => {
                setProductInfo((prevInfo) => ({
                    ...prevInfo,
                    image: reader.result, // Store the Base64 string
                    imageName: file.name, // Store the original file name
                }));
            };
            reader.readAsDataURL(file); // Reads the file content as a Data URL (Base64)
            console.log(reader);
        } else {
            setProductInfo((prevInfo) => ({
                ...prevInfo,
                image: null,
                imageName: "",
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(productInfo);

        try {
            api.post("product", productInfo)
                .then((res) => {
                    toast.success("product added successful");
                    onClose();
                })
                .catch((err) => {
                    toast.error("error ");
                });
        } catch (error) {}
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
                <h3 className="text-2xl text-center font-semibold text-[#0D4E6D]  mb-3">
                    Add Information Product :
                </h3>

                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <input
                        value={productInfo.name}
                        onChange={(e) => {
                            setProductInfo({
                                ...productInfo,
                                name: e.target.value,
                            });
                        }}
                        className="bg-white border border-gray-200 px-3 py-2 rounded-xl focus:border-blue-400 outline-none"
                        type="text"
                        placeholder="Write product name"
                    />
                    <input
                        value={productInfo.sku}
                        onChange={(e) => {
                            setProductInfo({
                                ...productInfo,
                                sku: e.target.value,
                            });
                        }}
                        className="bg-white border border-gray-200 px-3 py-2 rounded-xl focus:border-blue-400 outline-none"
                        type="text"
                        placeholder="Write product sku"
                    />
                    <select
                        value={productInfo.category}
                        onChange={(e) => {
                            setProductInfo({
                                ...productInfo,
                                category: e.target.value,
                            });
                        }}
                        className="bg-white border border-gray-200 px-3 py-2 rounded-xl focus:border-blue-400 outline-none"
                        name="category"
                        id="category"
                    >
                        <option value="">Choose category</option>
                        <option value="category1">Category 1</option>
                        <option value="category2">Category 2</option>
                        <option value="category3">Category 3</option>
                    </select>
                    <input
                        value={productInfo.price}
                        onChange={(e) => {
                            setProductInfo({
                                ...productInfo,
                                price: parseFloat(e.target.value),
                            });
                        }}
                        className="bg-white border border-gray-200 px-3 py-2 rounded-xl focus:border-blue-400 outline-none"
                        type="number"
                        placeholder="Price"
                    />
                    <input
                        value={productInfo.quantity}
                        onChange={(e) => {
                            setProductInfo({
                                ...productInfo,
                                quantity: parseInt(e.target.value),
                            });
                        }}
                        className="bg-white border border-gray-200 px-3 py-2 rounded-xl focus:border-blue-400 outline-none"
                        type="number"
                        placeholder="Quantity"
                    />
                    <input
                        onChange={handleFileChange}
                        className="bg-white border border-gray-200 px-3 py-2 rounded-xl focus:border-blue-400 outline-none"
                        type="file"
                        name="image"
                    />

                    <button className="bg-gradient-to-tr from-blue-500 to-teal-500 text-white px-5 py-2 rounded-xl hover:scale-105 transition-transform ml-auto">
                        Add Now
                    </button>
                </form>
            </div>
        </div>
    );
}
