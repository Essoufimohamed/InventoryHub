// import { Trash2, Edit } from "lucide-react";
// import { useContext, useEffect, useState } from "react";
// import { ProductContext } from "../context/ProductContext";
// import EditProductForm from "./EditeProductForm";
// import DeleteModal from "./DeleteModal";
// import placeholderImg from "../assets/placeholderProduct.png";

// export default function ProductTable() {
//     // const [products, setProducts] = useState([]);
//     const { loading, filtered, deleteProduct } = useContext(ProductContext);
//     const [editProduct, setEditProduct] = useState("");
//     const [deleteProductSelected, setDeleteProduct] = useState(null);

//     const handleConfirmDelete = () => {
//         deleteProduct(deleteProductSelected);
//         setDeleteProduct(null);
//     };
//     const handleCancelDelete = () => {
//         setDeleteProduct(null);
//     };

//     return (
//         <div className="overflow-x-auto shadow-md rounded-lg">
//             <table className="min-w-full border border-gray-200 text-sm text-left">
//                 <thead className="bg-[#EBF5FB] ">
//                     <tr>
//                         <th className="px-4 py-2">Image</th>
//                         <th className="px-4 py-2">Name</th>
//                         <th className="px-4 py-2">SKU</th>
//                         <th className="px-4 py-2">Category</th>
//                         <th className="px-4 py-2">Price</th>
//                         <th className="px-4 py-2">Qty</th>
//                         <th className="px-4 py-2">Actions</th>
//                     </tr>
//                 </thead>
//                 {/* filtered && filtered.length > 0 */}
//                 <tbody>
//                     {!loading ? (
//                         filtered.map((product) => {
//                             return (
//                                 <tr
//                                     key={product._id}
//                                     className="border-b border-gray-100 hover:bg-gray-50"
//                                 >
//                                     <td className="px-4 py-2">
//                                         <img
//                                             className="w-10"
//                                             src={
//                                                 product.image || placeholderImg
//                                             }
//                                             alt=""
//                                         />
//                                     </td>
//                                     <td className="px-4 py-2">
//                                         {product.name}
//                                     </td>
//                                     <td className="px-4 py-2">{product.sku}</td>
//                                     <td className="px-4 py-2">
//                                         {product?.category?.name}
//                                     </td>
//                                     <td className="px-4 py-2">
//                                         {product.price + "DH"}
//                                     </td>
//                                     <td className="px-4 py-2">
//                                         {product.quantity}
//                                     </td>
//                                     <td className="px-4 py-2 ">
//                                         <div className="flex gap-2">
//                                             <Edit
//                                                 // color="#03B3E8"
//                                                 onClick={() => {
//                                                     setEditProduct(product);
//                                                 }}
//                                                 className="cursor-pointer text-[#03B3E8] hover:text-[#60dbdb] transition-colors duration-200"
//                                             />
//                                             |{" "}
//                                             <Trash2
//                                                 // color="#F65D5D"
//                                                 onClick={() => {
//                                                     setDeleteProduct(
//                                                         product._id
//                                                     );
//                                                 }}
//                                                 className="cursor-pointer text-[#F65D5D] hover:text-[#ff7979] transition-colors duration-200"
//                                             />
//                                         </div>
//                                     </td>
//                                 </tr>
//                             );
//                         })
//                     ) : (
//                         <tr>
//                             <td
//                                 colSpan="7"
//                                 className="text-center py-4 text-gray-500"
//                             >
//                                 Loading or no products found...
//                             </td>
//                         </tr>
//                     )}

//                     {/* <tr className="border-b border-gray-100 hover:bg-gray-50">
//                         <td className="px-4 py-2">
//                             <img className="w-10" src={placeholderImg} alt="" />
//                         </td>
//                         <td className="px-4 py-2">Example Product</td>
//                         <td className="px-4 py-2">SKU123</td>
//                         <td className="px-4 py-2">Category 1</td>
//                         <td className="px-4 py-2">$19.99</td>
//                         <td className="px-4 py-2">15</td>
//                         <td className="px-4 py-2 ">
//                             <div className="flex gap-2">
//                                 <Edit
//                                     // color="#03B3E8"
//                                     className="cursor-pointer text-[#03B3E8] hover:text-[#60dbdb] transition-colors duration-200"
//                                 />
//                                 |{" "}
//                                 <Trash2
//                                     // color="#F65D5D"
//                                     className="cursor-pointer text-[#F65D5D] hover:text-[#ff7979] transition-colors duration-200"
//                                 />
//                             </div>
//                         </td>
//                     </tr>
//                     <tr className="border-b border-gray-100 hover:bg-gray-50">
//                         <td className="px-4 py-2">
//                             <img className="w-10" src={placeholderImg} alt="" />
//                         </td>
//                         <td className="px-4 py-2">Example Product</td>
//                         <td className="px-4 py-2">SKU123</td>
//                         <td className="px-4 py-2">Category 2</td>
//                         <td className="px-4 py-2">$19.99</td>
//                         <td className="px-4 py-2">15</td>
//                         <td className="px-4 py-2 ">
//                             <div className="flex gap-2">
//                                 <Edit
//                                     // color="#03B3E8"
//                                     className="cursor-pointer text-[#03B3E8] hover:text-[#60dbdb] transition-colors duration-200"
//                                 />
//                                 |{" "}
//                                 <Trash2
//                                     // color="#F65D5D"
//                                     className="cursor-pointer text-[#F65D5D] hover:text-[#ff7979] transition-colors duration-200"
//                                 />
//                             </div>
//                         </td>
//                     </tr>

//                     <tr className="border-b border-gray-100 hover:bg-gray-50">
//                         <td className="px-4 py-2">
//                             <img className="w-10" src={placeholderImg} alt="" />
//                         </td>
//                         <td className="px-4 py-2">Example Product</td>
//                         <td className="px-4 py-2">SKU123</td>
//                         <td className="px-4 py-2">Category 1</td>
//                         <td className="px-4 py-2">$19.99</td>
//                         <td className="px-4 py-2">15</td>
//                         <td className="px-4 py-2 ">
//                             <div className="flex gap-2">
//                                 <Edit
//                                     // color="#03B3E8"
//                                     className="cursor-pointer text-[#03B3E8] hover:text-[#60dbdb] transition-colors duration-200"
//                                 />
//                                 |{" "}
//                                 <Trash2
//                                     // color="#F65D5D"
//                                     className="cursor-pointer text-[#F65D5D] hover:text-[#ff7979] transition-colors duration-200"
//                                 />
//                             </div>
//                         </td>
//                     </tr> */}
//                 </tbody>
//             </table>
//             {editProduct && (
//                 <EditProductForm
//                     onClose={() => setEditProduct(null)}
//                     product={editProduct}
//                 />
//             )}
//             {deleteProductSelected && (
//                 <DeleteModal
//                     onClose={handleCancelDelete}
//                     onConfirm={handleConfirmDelete}
//                 />
//             )}
//         </div>
//     );
// }

import { Trash2, Edit, Search, ChevronDown } from "lucide-react"; // Added Search, ChevronDown icons
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext"; // Correct path to your ProductContext
import EditProductForm from "./EditeProductForm";
import DeleteModal from "./DeleteModal";
import placeholderImg from "../assets/placeholderProduct.png";
// No need to import 'api' here, as categories are now from context

export default function ProductTable() {
    // Destructure necessary state and functions from ProductContext
    const {
        loading,
        filtered,
        deleteProduct,
        categories, // Get categories from context
        selectedCategoryId, // Get current selected category from context
        selectCategory, // Function to set selected category in context
        searchQuery, // Get current search query from context
        setSearchQuery, // Function to set search query in context
    } = useContext(ProductContext);

    const [editProduct, setEditProduct] = useState("");
    const [deleteProductSelected, setDeleteProduct] = useState(null);

    // Handlers for filter changes now directly use context setters
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleCategoryChange = (e) => {
        // Pass "" for "All Categories", context will convert to null if desired
        selectCategory(e.target.value === "" ? null : e.target.value);
    };

    const handleConfirmDelete = () => {
        deleteProduct(deleteProductSelected);
        setDeleteProduct(null);
    };

    const handleCancelDelete = () => {
        setDeleteProduct(null);
    };

    return (
        <div className="p-2 sm:p-6 bg-gray-50 min-h-screen">
            {/* Filter Section */}
            <div className="bg-white p-4 rounded-lg shadow-sm mb-6 border border-gray-200 flex flex-col sm:flex-row gap-4">
                {/* Search Input */}
                <div className="relative flex-grow">
                    <input
                        type="text"
                        placeholder="Search by name..." // Changed to name, as per context logic
                        value={searchQuery} // Bind to context's searchQuery
                        onChange={handleSearchChange}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 text-gray-700"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>

                {/* Category Filter */}
                <div className="relative sm:w-1/3 md:w-1/4">
                    <select
                        value={selectedCategoryId || ""} // Bind to context's selectedCategoryId, default to "" for "All"
                        onChange={handleCategoryChange}
                        className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg appearance-none focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-white text-gray-700"
                    >
                        <option value="">All Categories</option>
                        {categories.map((category) => (
                            <option key={category._id} value={category._id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                    {/* Custom dropdown arrow */}
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <ChevronDown className="w-4 h-4" />
                    </div>
                </div>
            </div>

            {/* Product Table */}
            <div className="overflow-x-auto shadow-md rounded-lg border border-gray-200">
                <table className="min-w-full text-sm text-left bg-white">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-3 text-gray-600 font-semibold">
                                Image
                            </th>
                            <th className="px-4 py-3 text-gray-600 font-semibold">
                                Name
                            </th>
                            <th className="px-4 py-3 text-gray-600 font-semibold">
                                SKU
                            </th>
                            <th className="px-4 py-3 text-gray-600 font-semibold">
                                Category
                            </th>
                            <th className="px-4 py-3 text-gray-600 font-semibold">
                                Price
                            </th>
                            <th className="px-4 py-3 text-gray-600 font-semibold">
                                Qty
                            </th>
                            <th className="px-4 py-3 text-gray-600 font-semibold">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {!loading && filtered.length > 0 ? (
                            filtered.map((product) => (
                                <tr
                                    key={product._id}
                                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-150"
                                >
                                    <td className="px-4 py-3">
                                        <img
                                            className="w-10 h-10 object-cover rounded-md border border-gray-100"
                                            src={
                                                product.image || placeholderImg
                                            }
                                            alt={product.name}
                                        />
                                    </td>
                                    <td className="px-4 py-3 font-medium text-gray-900">
                                        {product.name}
                                    </td>
                                    <td className="px-4 py-3 text-gray-700">
                                        {product.sku}
                                    </td>
                                    <td className="px-4 py-3 text-gray-700">
                                        {product?.category?.name || "N/A"}
                                    </td>
                                    <td className="px-4 py-3 text-green-600 font-semibold">
                                        {product.price.toFixed(2)} DH
                                    </td>
                                    <td className="px-4 py-3 text-gray-700">
                                        {product.quantity}
                                    </td>
                                    <td className="px-4 py-3">
                                        <div className="flex items-center gap-3">
                                            <Edit
                                                onClick={() =>
                                                    setEditProduct(product)
                                                }
                                                className="cursor-pointer text-blue-600 hover:text-blue-800 transition-colors duration-200 w-5 h-5"
                                                title="Edit Product"
                                            />
                                            <Trash2
                                                onClick={() =>
                                                    setDeleteProduct(
                                                        product._id
                                                    )
                                                }
                                                className="cursor-pointer text-red-600 hover:text-red-800 transition-colors duration-200 w-5 h-5"
                                                title="Delete Product"
                                            />
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan="7"
                                    className="text-center py-6 text-gray-500 text-lg"
                                >
                                    {loading
                                        ? "Loading products..."
                                        : "No products found matching your criteria."}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {editProduct && (
                <EditProductForm
                    onClose={() => setEditProduct(null)}
                    product={editProduct}
                />
            )}
            {deleteProductSelected && (
                <DeleteModal
                    onClose={handleCancelDelete}
                    onConfirm={handleConfirmDelete}
                />
            )}
        </div>
    );
}
