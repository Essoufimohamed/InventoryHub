// import React, { useRef } from "react"; // Import useRef
// import { X, Download } from "lucide-react"; // Import Download icon
// // import html2canvas from "html2canvas";
// import html2canvas from "html2canvas-oklch";

// import jsPDF from "jspdf";

// export default function ReceiptModal({ isOpen, onClose, saleDetails }) {
//     const receiptRef = useRef(null); // Create a ref for the receipt content

//     if (!isOpen || !saleDetails) return null;

//     const handleDownloadPdf = async () => {
//         if (!receiptRef.current) return;

//         const input = receiptRef.current;
//         const canvas = await html2canvas(input, { scale: 2 }); // Scale for better resolution
//         const imgData = canvas.toDataURL("image/png");
//         const pdf = new jsPDF("p", "mm", "a4"); // 'p' for portrait, 'mm' for millimeters, 'a4' size
//         const imgWidth = 210; // A4 width in mm
//         const pageHeight = 297; // A4 height in mm
//         const imgHeight = (canvas.height * imgWidth) / canvas.width;
//         let heightLeft = imgHeight;
//         let position = 0;

//         pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
//         heightLeft -= pageHeight;

//         while (heightLeft >= 0) {
//             position = heightLeft - imgHeight;
//             pdf.addPage();
//             pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
//             heightLeft -= pageHeight;
//         }

//         pdf.save(`receipt-${saleDetails._id}.pdf`);
//     };

//     // Calculate total amount if not directly available from saleDetails
//     const totalAmount = saleDetails.items.reduce((sum, item) => {
//         return sum + (item.price * item.quantity || 0);
//     }, 0);

//     return (
//         <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
//             <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md mx-4">
//                 <div className="flex justify-between items-center border-b pb-3 mb-4">
//                     <h3 className="text-2xl font-semibold text-gray-800">
//                         Purchase Receipt
//                     </h3>
//                     <button
//                         onClick={onClose}
//                         className="text-gray-500 hover:text-gray-700 transition-colors"
//                     >
//                         <X className="h-6 w-6" />
//                     </button>
//                 </div>

//                 {/* Receipt content that will be captured */}
//                 <div ref={receiptRef} className="p-2">
//                     {" "}
//                     {/* Attach the ref here */}
//                     <div className="mb-4">
//                         <p className="text-sm text-gray-600 mb-2">
//                             Sale ID:{" "}
//                             <span className="font-medium text-gray-800">
//                                 {saleDetails._id}
//                             </span>
//                         </p>
//                         <p className="text-sm text-gray-600">
//                             Date:{" "}
//                             <span className="font-medium text-gray-800">
//                                 {new Date(
//                                     saleDetails.createdAt
//                                 ).toLocaleString()}
//                             </span>
//                         </p>
//                     </div>
//                     <div className="max-h-60 overflow-y-auto mb-4 border-t border-b py-3">
//                         <h4 className="font-semibold text-gray-700 mb-2">
//                             Items Purchased:
//                         </h4>
//                         {saleDetails.items.map((item) => (
//                             <div
//                                 key={item._id}
//                                 className="flex justify-between items-center text-sm mb-1"
//                             >
//                                 <span>
//                                     {item.product.name} x {item.qty}
//                                 </span>
//                                 <span>
//                                     $
//                                     {item.price
//                                         ? (item.price * item.qty).toFixed(2)
//                                         : "N/A"}
//                                 </span>
//                             </div>
//                         ))}
//                     </div>
//                     <div className="flex justify-between items-center text-lg font-bold text-gray-800 mt-4">
//                         <span>Total</span>
//                         <span>
//                             $
//                             {saleDetails.total
//                                 ? saleDetails.total.toFixed(2)
//                                 : totalAmount.toFixed(2)}
//                         </span>
//                     </div>
//                 </div>
//                 {/* End of content to be captured */}

//                 <div className="mt-6 flex justify-end gap-3">
//                     <button
//                         onClick={handleDownloadPdf}
//                         className="px-5 py-2 flex items-center gap-1 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
//                     >
//                         <Download className="h-5 w-5" />
//                         Download PDF
//                     </button>
//                     <button
//                         onClick={onClose}
//                         className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
//                     >
//                         Close
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// import React, { useRef } from "react";
// import { X, Download } from "lucide-react";
// import html2canvas from "html2canvas-oklch";
// import jsPDF from "jspdf";

// export default function ReceiptModal({ isOpen, onClose, saleDetails }) {
//     const receiptRef = useRef(null);

//     if (!isOpen || !saleDetails) return null;

//     const handleDownloadPdf = async () => {
//         if (!receiptRef.current) return;

//         const input = receiptRef.current;
//         const canvas = await html2canvas(input, { scale: 2 });
//         const imgData = canvas.toDataURL("image/png");
//         const pdf = new jsPDF("p", "mm", "a4");
//         const imgWidth = 210;
//         const pageHeight = 297;
//         const imgHeight = (canvas.height * imgWidth) / canvas.width;
//         let heightLeft = imgHeight;
//         let position = 0;

//         pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
//         heightLeft -= pageHeight;

//         while (heightLeft >= 0) {
//             position = heightLeft - imgHeight;
//             pdf.addPage();
//             pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
//             heightLeft -= pageHeight;
//         }

//         pdf.save(`receipt-${saleDetails._id}.pdf`);
//     };

//     const totalAmount = saleDetails.items.reduce((sum, item) => {
//         return sum + (item.price * item.qty || 0);
//     }, 0);

//     return (
//         <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center z-50 p-4">
//             <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-lg mx-auto transform transition-all duration-300 scale-100 opacity-100">
//                 {/* Header */}
//                 <div className="flex justify-between items-center pb-4 mb-4 border-b border-gray-200">
//                     <h3 className="text-2xl font-extrabold text-gray-900">
//                         Purchase Receipt
//                     </h3>
//                     <button
//                         onClick={onClose}
//                         className="text-gray-500 hover:text-gray-700 transition-colors duration-200 p-1 rounded-full hover:bg-gray-100"
//                     >
//                         <X className="h-6 w-6" />
//                     </button>
//                 </div>

//                 {/* Receipt Content to be Captured */}
//                 <div ref={receiptRef} className="py-2 px-1 text-gray-800">
//                     <div className="mb-5 space-y-1">
//                         <p className="text-sm font-medium text-gray-600">
//                             Sale ID:{" "}
//                             <span className="font-semibold text-gray-800 block md:inline-block">
//                                 {saleDetails._id}
//                             </span>
//                         </p>
//                         <p className="text-sm font-medium text-gray-600">
//                             Date:{" "}
//                             <span className="font-semibold text-gray-800 block md:inline-block">
//                                 {new Date(
//                                     saleDetails.createdAt
//                                 ).toLocaleString()}
//                             </span>
//                         </p>
//                     </div>

//                     <div className="border-t border-b border-gray-200 py-4 mb-5 max-h-72 overflow-y-auto custom-scrollbar-receipt">
//                         <h4 className="text-lg font-bold text-gray-800 mb-3">
//                             Items Purchased
//                         </h4>
//                         <div className="space-y-3">
//                             {saleDetails.items.map((item) => (
//                                 <div
//                                     key={item._id}
//                                     className="flex justify-between items-start text-base"
//                                 >
//                                     <span className="flex-1 pr-4 text-gray-700">
//                                         {item.product.name} x {item.qty}
//                                     </span>
//                                     <span className="font-semibold text-gray-900 whitespace-nowrap">
//                                         $
//                                         {item.price
//                                             ? (item.price * item.qty).toFixed(2)
//                                             : "N/A"}
//                                     </span>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                     <div className="flex justify-between items-center text-xl font-extrabold text-gray-900 mt-5 pt-3 border-t border-gray-200">
//                         <span>Total</span>
//                         <span>
//                             $
//                             {saleDetails.total
//                                 ? saleDetails.total.toFixed(2)
//                                 : totalAmount.toFixed(2)}
//                         </span>
//                     </div>
//                 </div>
//                 {/* End of Content to be Captured */}

//                 <div className="mt-8 flex justify-end gap-3">
//                     <button
//                         onClick={handleDownloadPdf}
//                         className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg shadow-md hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
//                     >
//                         <Download className="h-5 w-5" />
//                         Download PDF
//                     </button>
//                     <button
//                         onClick={onClose}
//                         className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-300 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
//                     >
//                         Close
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

import React, { useRef } from "react";
import { X, Download } from "lucide-react";
import html2canvas from "html2canvas-oklch";
import jsPDF from "jspdf";

export default function ReceiptModal({ isOpen, onClose, saleDetails }) {
    const receiptRef = useRef(null);
    if (!isOpen || !saleDetails) return null;

    const handleDownloadPdf = async () => {
        if (!receiptRef.current) return;
        const input = receiptRef.current;

        // Capture a narrow receipt-style canvas
        const canvas = await html2canvas(input, { scale: 2 });
        const imgData = canvas.toDataURL("image/png");

        const pdf = new jsPDF({
            orientation: "portrait",
            unit: "mm",
            format: [80, 297], // narrow receipt format (80mm wide)
        });

        const imgWidth = 80;
        const pageHeight = 297;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;
        let position = 0;

        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
        }

        pdf.save(`receipt-${saleDetails._id}.pdf`);
    };

    const totalAmount =
        saleDetails.items?.reduce(
            (sum, item) => sum + (item.price * item.qty || 0),
            0
        ) || 0;

    return (
        <div className=" fixed inset-0 bg-[#00000060] bg-opacity-60 flex justify-center items-center z-50 p-3">
            <div className="h-[95vh] bg-white rounded-lg shadow-lg w-full max-w-sm p-4">
                {/* Close Button */}
                <div className="flex justify-between items-center border-b pb-2 mb-2">
                    <h3 className="text-lg font-semibold text-gray-800">
                        Receipt Preview
                    </h3>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 transition"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {/* Receipt Content */}
                <div
                    ref={receiptRef}
                    className="h-[75vh] overflow-y-scroll bg-white p-4 text-gray-900 font-mono text-sm leading-6 border border-gray-300"
                    style={{ width: "74mm", margin: "0 auto" }}
                >
                    {/* Logo and Header */}
                    <div className="text-center mb-2">
                        <img
                            src="/logo.png" // ✅ Replace with your actual logo (e.g., /marjane-logo.png)
                            alt="Store Logo"
                            className="mx-auto h-12 mb-2"
                        />
                        <p className="font-bold text-lg tracking-widest">
                            Med Market
                        </p>
                        <p className="text-xs text-gray-600">Agadir, Morocco</p>
                        <p className="text-xs text-gray-600 mb-1">
                            Tel: +212 5XX XXX XXX
                        </p>
                        <p className="border-b border-gray-400 my-2"></p>
                    </div>

                    {/* Sale Info */}
                    <div className="mb-3">
                        <p>Ref: {saleDetails._id}</p>
                        <p>
                            Date:{" "}
                            {new Date(saleDetails.createdAt).toLocaleString()}
                        </p>
                        <p className="border-b border-gray-400 mt-2"></p>
                    </div>

                    {/* Items */}
                    <div className="mb-3">
                        <p className="font-bold text-center mb-1">
                            ITEMS PURCHASED
                        </p>
                        <p className="border-b border-gray-400"></p>
                        {saleDetails.items.map((item) => (
                            <div
                                key={item._id}
                                className="flex justify-between"
                            >
                                <span className="truncate pr-2">
                                    {item.product?.name || "Unknown"} x{" "}
                                    {item.qty}
                                </span>
                                <span>
                                    {(item.price * item.qty).toFixed(2)} DH
                                </span>
                            </div>
                        ))}
                        <p className="border-b border-gray-400 mt-1"></p>
                    </div>

                    {/* Totals */}
                    <div className="mt-2">
                        <div className="flex justify-between font-bold text-base">
                            <span>Total:</span>
                            <span>{totalAmount.toFixed(2)} DH</span>
                        </div>
                        <div className="text-center mt-2 text-xs">
                            <p>
                                Payment Method:{" "}
                                {saleDetails.paymentMethod || "Cash"}
                            </p>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="text-center mt-3 border-t border-gray-400 pt-2 text-xs">
                        <p>Thank you for shopping with us!</p>
                        <p>Visit again 👋</p>
                    </div>
                </div>

                {/* Buttons */}
                <div className="mt-4 flex justify-end gap-3">
                    <button
                        onClick={handleDownloadPdf}
                        className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
                    >
                        <Download className="h-4 w-4" />
                        Download PDF
                    </button>
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}

// import React, { useRef, useState } from "react"; // Import useState
// import { X, Download, Loader2 } from "lucide-react"; // Import Loader2 icon
// import html2canvas from "html2canvas-oklch";
// import jsPDF from "jspdf";

// export default function ReceiptModal({ isOpen, onClose, saleDetails }) {
//     const receiptRef = useRef(null);
//     const [isDownloading, setIsDownloading] = useState(false); // Add loading state

//     if (!isOpen || !saleDetails) return null;

//     const handleDownloadPdf = async () => {
//         if (!receiptRef.current) return;
//         setIsDownloading(true); // Set loading to true
//         const input = receiptRef.current;

//         try {
//             const canvas = await html2canvas(input, { scale: 2 });
//             console.log(canvas);

//             const imgData = canvas.toDataURL("image/png");

//             const pdf = new jsPDF({
//                 orientation: "portrait",
//                 unit: "mm",
//                 format: [80, 297], // narrow receipt format (80mm wide)
//             });

//             const imgWidth = 80;
//             const pageHeight = 297;
//             const imgHeight = (canvas.height * imgWidth) / canvas.width;
//             let heightLeft = imgHeight;
//             let position = 0;

//             pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
//             heightLeft -= pageHeight;

//             while (heightLeft >= 0) {
//                 position = heightLeft - imgHeight;
//                 pdf.addPage();
//                 pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
//                 heightLeft -= pageHeight;
//             }

//             pdf.save(`receipt-${saleDetails._id}.pdf`);
//         } catch (error) {
//             console.error("Error generating PDF:", error);
//             // Optionally show an error message to the user
//         } finally {
//             setIsDownloading(false);
//         }
//     };

//     const totalAmount =
//         saleDetails.items?.reduce(
//             (sum, item) => sum + (item.price * item.qty || 0),
//             0
//         ) || 0;

//     return (
//         <div className=" fixed inset-0 bg-[#00000060] bg-opacity-60 flex justify-center items-center z-50 p-3">
//             <div className="h-[95vh] bg-white rounded-lg shadow-lg w-full max-w-sm p-4">
//                 {/* Close Button */}
//                 <div className="flex justify-between items-center border-b pb-2 mb-2">
//                     <h3 className="text-lg font-semibold text-gray-800">
//                         Receipt Preview
//                     </h3>
//                     <button
//                         onClick={onClose}
//                         className="text-gray-500 hover:text-gray-700 transition"
//                     >
//                         <X className="h-5 w-5" />
//                     </button>
//                 </div>

//                 {/* Receipt Content */}
//                 <div
//                     ref={receiptRef}
//                     className="h-[75vh] overflow-y-scroll bg-white p-3 text-gray-900 font-mono text-sm leading-6 border border-gray-300"
//                     style={{ width: "74mm", margin: "0 auto" }}
//                 >
//                     {/* ... (rest of receipt content) ... */}
//                     <div className="text-center mb-2">
//                         <img
//                             src="/logo.png"
//                             alt="Store Logo"
//                             className="mx-auto h-12 mb-2"
//                         />
//                         <p className="font-bold text-lg tracking-widest">
//                             Med Market
//                         </p>
//                         <p className="text-xs text-gray-600">Agadir, Morocco</p>
//                         <p className="text-xs text-gray-600 mb-1">
//                             Tel: +212 5XX XXX XXX
//                         </p>
//                         <p className="border-b border-gray-400 my-2"></p>
//                     </div>

//                     <div className="mb-2">
//                         <p>Ref: {saleDetails._id}</p>
//                         <p>
//                             Date:{" "}
//                             {new Date(saleDetails.createdAt).toLocaleString()}
//                         </p>
//                         <p className="border-b border-gray-400 mt-2"></p>
//                     </div>

//                     <div className="mb-3">
//                         <p className="font-bold text-center mb-1">
//                             ITEMS PURCHASED
//                         </p>
//                         <p className="border-b border-gray-400"></p>
//                         {saleDetails.items.map((item) => (
//                             <div
//                                 key={item._id}
//                                 className="flex justify-between"
//                             >
//                                 <span className="truncate pr-2">
//                                     {item.product?.name || "Unknown"} x{" "}
//                                     {item.qty}
//                                 </span>
//                                 <span>
//                                     {(item.price * item.qty).toFixed(2)} DH
//                                 </span>
//                             </div>
//                         ))}
//                         <p className="border-b border-gray-400 mt-1"></p>
//                     </div>

//                     <div className="mt-2">
//                         <div className="flex justify-between font-bold text-base">
//                             <span>Total:</span>
//                             <span>{totalAmount.toFixed(2)} DH</span>
//                         </div>
//                         <div className="text-center mt-2 text-xs">
//                             <p>
//                                 Payment Method:{" "}
//                                 {saleDetails.paymentMethod || "Cash"}
//                             </p>
//                         </div>
//                     </div>

//                     <div className="text-center mt-3 border-t border-gray-400 pt-2 text-xs">
//                         <p>Thank you for shopping with us!</p>
//                         <p>Visit again 👋</p>
//                     </div>
//                 </div>

//                 {/* Buttons */}
//                 <div className="mt-4 flex justify-end gap-3">
//                     <button
//                         onClick={handleDownloadPdf}
//                         disabled={isDownloading} // Disable button during download
//                         className={`flex items-center gap-2 px-4 py-2 text-white rounded-md transition ${
//                             isDownloading
//                                 ? "bg-green-400 cursor-not-allowed"
//                                 : "bg-green-600 hover:bg-green-700"
//                         }`}
//                     >
//                         {isDownloading ? (
//                             <Loader2 className="h-4 w-4 animate-spin" />
//                         ) : (
//                             <Download className="h-4 w-4" />
//                         )}
//                         {isDownloading ? "Downloading..." : "Download PDF"}
//                     </button>
//                     <button
//                         onClick={onClose}
//                         disabled={isDownloading} // Optionally disable close button too
//                         className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition"
//                     >
//                         Close
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }
