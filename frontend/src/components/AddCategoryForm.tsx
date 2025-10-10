import { useState, useEffect } from "react";
import { ImagePlus } from "lucide-react";
import api from "../utils/api";
import toast from "react-hot-toast";

export default function AddCategoryForm({
    onCategoryAdded,
    editCategory,
    setEditCategory,
}) {
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (editCategory) {
            setCategory(editCategory.name);
            setImage(editCategory.image);
        }
    }, [editCategory]);

    const handleImageChange = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onloadend = () => setImage(reader.result);
        reader.readAsDataURL(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!category.trim()) return toast.error("Category name is required.");
        if (!image) return toast.error("Please select an image.");

        setLoading(true);
        try {
            if (editCategory) {
                await api.put(`/categories/${editCategory._id}`, {
                    name: category,
                    image: image,
                });
                toast.success("Category updated successfully!");
            } else {
                await api.post("/categories", { name: category, image });
                toast.success("Category added successfully!");
            }

            setCategory("");
            setImage("");
            setEditCategory(null);
            onCategoryAdded();
        } catch (error) {
            toast.error(
                error.response?.data?.message ||
                    "Something went wrong. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-sm mx-auto mt-6 p-6 border border-gray-300 rounded-xl shadow-sm bg-white">
            <h2 className="text-xl font-semibold text-[#20607E] mb-4">
                {editCategory ? "Edit Category" : "Add New Category"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
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

                <div className="flex gap-2">
                    <button
                        disabled={loading}
                        type="submit"
                        className="flex-1 py-2 rounded-lg bg-blue-200 font-semibold text-gray-800 hover:bg-blue-300 transition"
                    >
                        {loading
                            ? editCategory
                                ? "Updating..."
                                : "Adding..."
                            : editCategory
                            ? "Update"
                            : "Add"}
                    </button>

                    {editCategory && (
                        <button
                            type="button"
                            onClick={() => {
                                setEditCategory(null);
                                setCategory("");
                                setImage("");
                            }}
                            className="py-2 px-4 bg-gray-200 rounded-lg font-semibold hover:bg-gray-300"
                        >
                            Cancel
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
}
