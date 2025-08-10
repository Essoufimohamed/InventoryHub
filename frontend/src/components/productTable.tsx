// export default function ProductTable() {
//     return (
//         <>
//             <table>
//                 <thead>
//                     <th>
//                         <td>Image</td>
//                         <td>Name</td>
//                         <td>SKU</td>
//                         <td>Category</td>
//                         <td>Price</td>
//                         <td>Qty</td>
//                         <td>Actions</td>
//                     </th>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td></td>
//                         <td></td>
//                         <td></td>
//                         <td></td>
//                         <td></td>
//                         <td></td>
//                         <td></td>
//                         <td></td>
//                     </tr>
//                 </tbody>
//             </table>
//         </>
//     );
// }

import { Trash2, Edit } from "lucide-react";
import placeholderImg from "../assets/placeholderProduct.png";
export default function ProductTable() {
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
                <tbody>
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
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
