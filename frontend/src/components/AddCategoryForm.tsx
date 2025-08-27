import { useState } from "react";
import { ImagePlus } from "lucide-react";

export default function AddCategoryForm() {
    const [category, setCategory] = useState("");
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImage(URL.createObjectURL(e.target.files[0]));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ category, image });
        // Add submit logic here
    };

    return (
        <div className="max-w-sm mx-auto mt-6 p-6 border border-gray-300 rounded-xl shadow-sm bg-white">
            <h2 className="text-xl font-semibold text-[#20607E] mb-4">
                Add New Category :
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Category Name */}
                <div>
                    <label className="block text-gray-700 font-medium mb-1">
                        Category Name
                    </label>
                    <input
                        type="text"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        placeholder="Enter category name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                {/* Image Upload */}
                <label
                    htmlFor="file-upload"
                    className="flex items-center gap-3 px-4 py-3 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-50"
                >
                    {image ? (
                        <img
                            src={image}
                            alt="Preview"
                            className="w-12 h-12 object-cover rounded-md"
                        />
                    ) : (
                        <ImagePlus className="w-10 h-10 text-blue-500" />
                    )}
                    <span className="text-gray-600">Add icon or image</span>
                    <input
                        id="file-upload"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageChange}
                    />
                </label>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full py-2 rounded-lg bg-blue-200 font-semibold text-gray-800 hover:bg-blue-300 transition"
                >
                    Add Category
                </button>
            </form>
        </div>
    );
}
