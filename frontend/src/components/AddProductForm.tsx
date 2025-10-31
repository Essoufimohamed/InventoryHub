// import { useContext, useState } from "react";

// import { ProductContext } from "../context/ProductContext";

// export default function AddProductForm({ onClose }) {
//     const [productInfo, setProductInfo] = useState({
//         name: "",
//         sku: "",
//         category: "",
//         price: "",
//         quantity: "",
//     });

//     const { addProduct, categories } = useContext(ProductContext);

//     const handleFileChange = (event) => {
//         const file = event.target.files[0];
//         if (file) {
//             const reader = new FileReader();
//             console.log(reader);

//             reader.onloadend = () => {
//                 setProductInfo((prevInfo) => ({
//                     ...prevInfo,
//                     image: reader.result, // Store the Base64 string
//                     imageName: file.name, // Store the original file name
//                 }));
//             };
//             reader.readAsDataURL(file); // Reads the file content as a Data URL (Base64)
//             console.log(reader);
//         } else {
//             setProductInfo((prevInfo) => ({
//                 ...prevInfo,
//                 image: null,
//                 imageName: "",
//             }));
//         }
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(productInfo);
//         addProduct(productInfo);
//         onClose();
//     };

//     return (
//         <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
//             <div className="bg-blue-50 p-6 rounded-lg shadow-lg w-full max-w-md relative">
//                 <button
//                     onClick={onClose}
//                     className="absolute top-3 right-3 text-gray-500 hover:text-red-500 transition-colors"
//                 >
//                     ✕
//                 </button>
//                 <h3 className="text-2xl text-center font-semibold text-[#0D4E6D]  mb-3">
//                     Add Information Product :
//                 </h3>

//                 <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
//                     <input
//                         value={productInfo.name}
//                         onChange={(e) => {
//                             setProductInfo({
//                                 ...productInfo,
//                                 name: e.target.value,
//                             });
//                         }}
//                         className="bg-white border border-gray-200 px-3 py-2 rounded-xl focus:border-blue-400 outline-none"
//                         type="text"
//                         placeholder="Write product name"
//                     />
//                     <input
//                         value={productInfo.sku}
//                         onChange={(e) => {
//                             setProductInfo({
//                                 ...productInfo,
//                                 sku: e.target.value,
//                             });
//                         }}
//                         className="bg-white border border-gray-200 px-3 py-2 rounded-xl focus:border-blue-400 outline-none"
//                         type="text"
//                         placeholder="Write product sku"
//                     />
//                     <select
//                         value={productInfo.category}
//                         onChange={(e) => {
//                             setProductInfo({
//                                 ...productInfo,
//                                 category: e.target.value,
//                             });
//                         }}
//                         className="bg-white border border-gray-200 px-3 py-2 rounded-xl focus:border-blue-400 outline-none"
//                         name="category"
//                         id="category"
//                     >
//                         <option value="">Choose category</option>
//                         {categories &&
//                             categories.map((cat) => {
//                                 return (
//                                     <option key={cat._id} value={cat._id}>
//                                         {cat.name}
//                                     </option>
//                                 );
//                             })}

//                         {/* <option value="category2">Category 2</option>
//                         <option value="category3">Category 3</option> */}
//                     </select>
//                     <input
//                         value={productInfo.price}
//                         onChange={(e) => {
//                             setProductInfo({
//                                 ...productInfo,
//                                 price: parseFloat(e.target.value),
//                             });
//                         }}
//                         className="bg-white border border-gray-200 px-3 py-2 rounded-xl focus:border-blue-400 outline-none"
//                         type="number"
//                         placeholder="Price"
//                     />
//                     <input
//                         value={productInfo.quantity}
//                         onChange={(e) => {
//                             setProductInfo({
//                                 ...productInfo,
//                                 quantity: parseInt(e.target.value),
//                             });
//                         }}
//                         className="bg-white border border-gray-200 px-3 py-2 rounded-xl focus:border-blue-400 outline-none"
//                         type="number"
//                         placeholder="Quantity"
//                     />
//                     <input
//                         onChange={handleFileChange}
//                         className="bg-white border border-gray-200 px-3 py-2 rounded-xl focus:border-blue-400 outline-none"
//                         type="file"
//                         name="image"
//                     />

//                     <button className="bg-gradient-to-tr from-blue-500 to-teal-500 text-white px-5 py-2 rounded-xl hover:scale-105 transition-transform ml-auto">
//                         Add Now
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// }

import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import {
    X,
    PackagePlus,
    Image as ImageIcon,
    Tag,
    DollarSign,
    Box,
    Layers,
    Plus,
    ChevronDown,
} from "lucide-react"; // Added new icons
import { toast } from "react-hot-toast"; // Assuming you have react-hot-toast

export default function AddProductForm({ onClose }) {
    const [productInfo, setProductInfo] = useState({
        name: "",
        sku: "",
        category: "", // Should be category._id
        price: "",
        quantity: "",
        image: null, // For Base64 string
        imageFile: null, // To hold the actual File object temporarily
    });
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({}); // State for form errors
    const [imagePreviewUrl, setImagePreviewUrl] = useState(null); // For image preview

    const { addProduct, categories } = useContext(ProductContext);

    const validateForm = () => {
        const newErrors = {};
        if (!productInfo.name.trim())
            newErrors.name = "Product name is required.";
        if (!productInfo.sku.trim()) newErrors.sku = "SKU is required.";
        if (!productInfo.category) newErrors.category = "Category is required.";
        if (Number(productInfo.price) <= 0 || productInfo.price === "")
            newErrors.price = "Price must be a positive number.";
        if (Number(productInfo.quantity) <= 0 || productInfo.quantity === "")
            newErrors.quantity = "Quantity must be a positive number.";
        // Image is optional, so no direct validation for it unless specified

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            // Basic file type validation (optional)
            const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
            if (!allowedTypes.includes(file.type)) {
                setErrors((prev) => ({
                    ...prev,
                    image: "Only JPEG, PNG, WEBP images are allowed.",
                }));
                setImagePreviewUrl(null);
                setProductInfo((prev) => ({
                    ...prev,
                    image: null,
                    imageFile: null,
                }));
                return;
            }

            setErrors((prev) => ({ ...prev, image: undefined })); // Clear image error
            setProductInfo((prevInfo) => ({
                ...prevInfo,
                imageFile: file, // Store the file itself
            }));
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreviewUrl(reader.result); // For immediate preview
                setProductInfo((prevInfo) => ({
                    ...prevInfo,
                    image: reader.result, // Store Base64 for submission
                }));
            };
            reader.readAsDataURL(file);
        } else {
            setProductInfo((prevInfo) => ({
                ...prevInfo,
                image: null,
                imageFile: null,
            }));
            setImagePreviewUrl(null);
            setErrors((prev) => ({ ...prev, image: undefined }));
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value,
        }));
        setErrors((prevErrors) => ({ ...prevErrors, [name]: undefined })); // Clear error on change
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            toast.error("Please correct the errors in the form.");
            return;
        }

        setLoading(true);
        try {
            await addProduct({
                ...productInfo,
                price: parseFloat(productInfo.price),
                quantity: parseInt(productInfo.quantity),
            });
            onClose();
        } catch (error) {
            console.error("Error adding product:", error);
            toast.error("Failed to add product. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0  bg-[#00000050] bg-opacity-75 flex items-center justify-center z-50 p-4 animate-fade-in">
            <div className="bg-white max-h-[95%]  rounded-xl p-5 sm:p-8 w-full max-w-md shadow-2xl relative overflow-y-scroll animate-scale-up">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-full p-1"
                    aria-label="Close modal"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Header */}
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                    <PackagePlus className="w-6 h-6 text-blue-600" /> Add New
                    Product
                </h3>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    {/* Name */}
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Product Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            value={productInfo.name}
                            onChange={handleChange}
                            className={`w-full border ${
                                errors.name
                                    ? "border-red-500"
                                    : "border-gray-300"
                            } rounded-lg px-3 py-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-gray-800`}
                            type="text"
                            placeholder="e.g., Organic Honey"
                            required
                            disabled={loading}
                        />
                        {errors.name && (
                            <p className="mt-1 text-sm text-red-600">
                                {errors.name}
                            </p>
                        )}
                    </div>

                    {/* SKU */}
                    <div>
                        <label
                            htmlFor="sku"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            SKU (Stock Keeping Unit)
                        </label>
                        <input
                            id="sku"
                            name="sku"
                            value={productInfo.sku}
                            onChange={handleChange}
                            className={`w-full border ${
                                errors.sku
                                    ? "border-red-500"
                                    : "border-gray-300"
                            } rounded-lg px-3 py-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-gray-800`}
                            type="text"
                            placeholder="e.g., HNY001"
                            required
                            disabled={loading}
                        />
                        {errors.sku && (
                            <p className="mt-1 text-sm text-red-600">
                                {errors.sku}
                            </p>
                        )}
                    </div>

                    {/* Category */}
                    <div>
                        <label
                            htmlFor="category"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Category
                        </label>
                        <div className="relative">
                            <select
                                id="category"
                                name="category"
                                value={productInfo.category}
                                onChange={handleChange}
                                className={`w-full border ${
                                    errors.category
                                        ? "border-red-500"
                                        : "border-gray-300"
                                } rounded-lg px-3 py-2 pr-10 focus:ring-blue-500 focus:border-blue-500 outline-none appearance-none bg-white text-gray-800 transition-colors`}
                                required
                                disabled={loading}
                            >
                                <option value="">Choose category</option>
                                {categories &&
                                    categories.map((cat) => (
                                        <option key={cat._id} value={cat._id}>
                                            {cat.name}
                                        </option>
                                    ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <ChevronDown className="w-4 h-4" />{" "}
                                {/* Assuming ChevronDown is imported */}
                            </div>
                        </div>
                        {errors.category && (
                            <p className="mt-1 text-sm text-red-600">
                                {errors.category}
                            </p>
                        )}
                    </div>

                    {/* Price */}
                    <div>
                        <label
                            htmlFor="price"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Price (DH)
                        </label>
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                                <DollarSign className="w-4 h-4" />
                            </span>
                            <input
                                id="price"
                                name="price"
                                value={productInfo.price}
                                onChange={handleChange}
                                className={`w-full border ${
                                    errors.price
                                        ? "border-red-500"
                                        : "border-gray-300"
                                } rounded-lg pl-10 pr-3 py-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-gray-800`}
                                type="number"
                                step="0.01" // Allow decimal prices
                                min="0.01"
                                placeholder="e.g., 29.99"
                                required
                                disabled={loading}
                            />
                        </div>
                        {errors.price && (
                            <p className="mt-1 text-sm text-red-600">
                                {errors.price}
                            </p>
                        )}
                    </div>

                    {/* Quantity */}
                    <div>
                        <label
                            htmlFor="quantity"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Quantity
                        </label>
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                                <Box className="w-4 h-4" />
                            </span>
                            <input
                                id="quantity"
                                name="quantity"
                                value={productInfo.quantity}
                                onChange={handleChange}
                                className={`w-full border ${
                                    errors.quantity
                                        ? "border-red-500"
                                        : "border-gray-300"
                                } rounded-lg pl-10 pr-3 py-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-gray-800`}
                                type="number"
                                min="1"
                                placeholder="e.g., 100"
                                required
                                disabled={loading}
                            />
                        </div>
                        {errors.quantity && (
                            <p className="mt-1 text-sm text-red-600">
                                {errors.quantity}
                            </p>
                        )}
                    </div>

                    {/* Image Upload */}
                    <div>
                        <label
                            htmlFor="imageUpload"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Product Image
                        </label>
                        <input
                            id="imageUpload"
                            onChange={handleFileChange}
                            className={`block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition-colors cursor-pointer ${
                                errors.image
                                    ? "border-red-500"
                                    : "border-gray-300"
                            }`}
                            type="file"
                            name="imageFile"
                            accept="image/jpeg,image/png,image/webp"
                            disabled={loading}
                        />
                        {errors.image && (
                            <p className="mt-1 text-sm text-red-600">
                                {errors.image}
                            </p>
                        )}
                        {imagePreviewUrl && (
                            <div className="mt-3 text-center">
                                <p className="text-xs text-gray-500 mb-1">
                                    Image Preview:
                                </p>
                                <img
                                    src={imagePreviewUrl}
                                    alt="Product Preview"
                                    className="max-h-32 mx-auto rounded-lg shadow-md border border-gray-200 object-cover"
                                />
                            </div>
                        )}
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end pt-4">
                        <button
                            type="submit"
                            className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                            disabled={loading}
                        >
                            {loading ? (
                                <span className="flex items-center gap-2">
                                    <svg
                                        className="animate-spin h-5 w-5 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        ></circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        ></path>
                                    </svg>
                                    Adding...
                                </span>
                            ) : (
                                <>
                                    <Plus className="w-5 h-5" /> Add Product
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
