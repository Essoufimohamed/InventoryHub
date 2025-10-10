import { Trash2, Edit } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import EditProductForm from "./EditeProductForm";
import DeleteModal from "./DeleteModal";
import placeholderImg from "../assets/placeholderProduct.png";

export default function ProductTable() {
    // const [products, setProducts] = useState([]);
    const { loading, filtered, deleteProduct } = useContext(ProductContext);
    const [editProduct, setEditProduct] = useState("");
    const [deleteProductSelected, setDeleteProduct] = useState(null);

    const handleConfirmDelete = () => {
        deleteProduct(deleteProductSelected);
        setDeleteProduct(null);
    };
    const handleCancelDelete = () => {
        setDeleteProduct(null);
    };

    return (
        <div className="overflow-x-auto shadow-md rounded-lg">
            <table className="min-w-full border border-gray-200 text-sm text-left">
                <thead className="bg-[#EBF5FB] ">
                    <tr>
                        <th className="px-4 py-2">Image</th>
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">SKU</th>
                        <th className="px-4 py-2">Category</th>
                        <th className="px-4 py-2">Price</th>
                        <th className="px-4 py-2">Qty</th>
                        <th className="px-4 py-2">Actions</th>
                    </tr>
                </thead>
                {/* filtered && filtered.length > 0 */}
                <tbody>
                    {!loading ? (
                        filtered.map((product) => {
                            return (
                                <tr
                                    key={product._id}
                                    className="border-b border-gray-100 hover:bg-gray-50"
                                >
                                    <td className="px-4 py-2">
                                        <img
                                            className="w-10"
                                            src={
                                                product.image || placeholderImg
                                            }
                                            alt=""
                                        />
                                    </td>
                                    <td className="px-4 py-2">
                                        {product.name}
                                    </td>
                                    <td className="px-4 py-2">{product.sku}</td>
                                    <td className="px-4 py-2">
                                        {product.category}
                                    </td>
                                    <td className="px-4 py-2">
                                        {product.price + "DH"}
                                    </td>
                                    <td className="px-4 py-2">
                                        {product.quantity}
                                    </td>
                                    <td className="px-4 py-2 ">
                                        <div className="flex gap-2">
                                            <Edit
                                                // color="#03B3E8"
                                                onClick={() => {
                                                    setEditProduct(product);
                                                }}
                                                className="cursor-pointer text-[#03B3E8] hover:text-[#60dbdb] transition-colors duration-200"
                                            />
                                            |{" "}
                                            <Trash2
                                                // color="#F65D5D"
                                                onClick={() => {
                                                    setDeleteProduct(
                                                        product._id
                                                    );
                                                }}
                                                className="cursor-pointer text-[#F65D5D] hover:text-[#ff7979] transition-colors duration-200"
                                            />
                                        </div>
                                    </td>
                                </tr>
                            );
                        })
                    ) : (
                        <tr>
                            <td
                                colSpan="7"
                                className="text-center py-4 text-gray-500"
                            >
                                Loading or no products found...
                            </td>
                        </tr>
                    )}

                    {/* <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="px-4 py-2">
                            <img className="w-10" src={placeholderImg} alt="" />
                        </td>
                        <td className="px-4 py-2">Example Product</td>
                        <td className="px-4 py-2">SKU123</td>
                        <td className="px-4 py-2">Category 1</td>
                        <td className="px-4 py-2">$19.99</td>
                        <td className="px-4 py-2">15</td>
                        <td className="px-4 py-2 ">
                            <div className="flex gap-2">
                                <Edit
                                    // color="#03B3E8"
                                    className="cursor-pointer text-[#03B3E8] hover:text-[#60dbdb] transition-colors duration-200"
                                />
                                |{" "}
                                <Trash2
                                    // color="#F65D5D"
                                    className="cursor-pointer text-[#F65D5D] hover:text-[#ff7979] transition-colors duration-200"
                                />
                            </div>
                        </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="px-4 py-2">
                            <img className="w-10" src={placeholderImg} alt="" />
                        </td>
                        <td className="px-4 py-2">Example Product</td>
                        <td className="px-4 py-2">SKU123</td>
                        <td className="px-4 py-2">Category 2</td>
                        <td className="px-4 py-2">$19.99</td>
                        <td className="px-4 py-2">15</td>
                        <td className="px-4 py-2 ">
                            <div className="flex gap-2">
                                <Edit
                                    // color="#03B3E8"
                                    className="cursor-pointer text-[#03B3E8] hover:text-[#60dbdb] transition-colors duration-200"
                                />
                                |{" "}
                                <Trash2
                                    // color="#F65D5D"
                                    className="cursor-pointer text-[#F65D5D] hover:text-[#ff7979] transition-colors duration-200"
                                />
                            </div>
                        </td>
                    </tr>
                    
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="px-4 py-2">
                            <img className="w-10" src={placeholderImg} alt="" />
                        </td>
                        <td className="px-4 py-2">Example Product</td>
                        <td className="px-4 py-2">SKU123</td>
                        <td className="px-4 py-2">Category 1</td>
                        <td className="px-4 py-2">$19.99</td>
                        <td className="px-4 py-2">15</td>
                        <td className="px-4 py-2 ">
                            <div className="flex gap-2">
                                <Edit
                                    // color="#03B3E8"
                                    className="cursor-pointer text-[#03B3E8] hover:text-[#60dbdb] transition-colors duration-200"
                                />
                                |{" "}
                                <Trash2
                                    // color="#F65D5D"
                                    className="cursor-pointer text-[#F65D5D] hover:text-[#ff7979] transition-colors duration-200"
                                />
                            </div>
                        </td>
                    </tr> */}
                </tbody>
            </table>
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
