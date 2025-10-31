import { useEffect, useState } from "react";
import api from "../utils/api";
import AddCategoryForm from "../components/AddCategoryForm";
import CategoriesList from "../components/CategoriesList";
import SectionsTitle from "../components/SectionsTitle";
import toast from "react-hot-toast";

export default function DashboardCategory() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editCategory, setEditCategory] = useState(null);

    const fetchCategories = async () => {
        try {
            const { data } = await api.get("/categories");
            setCategories(data);
        } catch (err) {
            console.error(err);
            toast.error("Failed to fetch categories.");
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!confirm("Are you sure you want to delete this category?")) return;

        try {
            await api.delete(`/categories/${id}`);
            toast.success("Category deleted successfully!");
            setCategories((prev) => prev.filter((cat) => cat._id !== id));
            fetchCategories();
        } catch (err) {
            toast.error("Failed to delete category.");
        }
    };

    const handleEdit = (category) => {
        setEditCategory(category);
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <>
            <SectionsTitle title="Product Categories" />
            <div className="flex flex-col lg:flex-row gap-6 mt-4">
                <div className="basis-1/3">
                    <AddCategoryForm
                        onCategoryAdded={fetchCategories}
                        editCategory={editCategory}
                        setEditCategory={setEditCategory}
                    />
                </div>
                <div className="basis-2/3">
                    <CategoriesList
                        categories={categories}
                        loading={loading}
                        onDelete={handleDelete}
                        onEdit={handleEdit}
                    />
                </div>
            </div>
        </>
    );
}
