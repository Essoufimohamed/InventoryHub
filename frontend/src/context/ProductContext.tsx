import { createContext, useCallback, useEffect, useState } from "react";
import api from "../utils/api";
import toast from "react-hot-toast";

export const ProductContext = createContext({});

// export const useProducts = () => useContext(ProductContext);

export function ProductProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [loading, setLoading] = useState(true);

    // filter metadata
    const [selectedCategoryId, setSelectedCategoryId] = useState(null); // category._id or null
    const [searchQuery, setSearchQuery] = useState("");

    // Fetch products once
    useEffect(() => {
        fetchProducts();
        fetchCategories();
    }, []);

    //  single function to apply all filters
    const applyFilters = useCallback(() => {
        let result = [...products];

        if (selectedCategoryId) {
            result = result.filter((p) => {
                // handle case where p.category is an object or an id string
                const catId =
                    p.category &&
                    (p.category._id ? p.category._id : p.category);
                return catId === selectedCategoryId;
            });
        }

        if (searchQuery && searchQuery.trim() !== "") {
            const q = searchQuery.toLowerCase();
            result = result.filter((p) => p.name.toLowerCase().includes(q));
        }

        setFiltered(result);
    }, [products, selectedCategoryId, searchQuery]);

    // re-run filters when dependencies change
    useEffect(() => {
        applyFilters();
    }, [products, selectedCategoryId, searchQuery, applyFilters]);

    const fetchProducts = async () => {
        try {
            setLoading(true);
            const { data } = await api.get("/product");
            setProducts(data);
            setFiltered(data);
        } catch (error) {
            console.error("Error fetching products:", error);
            toast.error("Error fetching products");
        } finally {
            setLoading(false);
        }
    };
    const fetchCategories = async () => {
        try {
            const { data } = await api.get("/categories");
            setCategories(data);
        } catch (error) {
            console.error("Error fetching products:", error);
            toast.error("Error fetching products");
        }
    };

    const addProduct = async (newProduct) => {
        try {
            const { data } = await api.post("/product", newProduct);
            setProducts((prev) => [...prev, data]);
            setFiltered((prev) => [...prev, data]);

            toast.success("The product is added successfuly");
        } catch (error) {
            console.error("Error adding product:", error);
        }
    };

    const updateProduct = async (id, Product) => {
        try {
            const { data } = await api.put(`product/${id}`, Product);
            setProducts((prev) => prev.map((p) => (p._id === id ? data : p)));
            setFiltered((prev) => prev.map((p) => (p._id === id ? data : p)));
            toast.success("The product is updated successfuly");
        } catch (error) {
            console.error("Error updating product:", error);
        }
    };

    const deleteProduct = async (id) => {
        try {
            const { data } = await api.delete(`product/${id}`);
            setFiltered((prev) => prev.filter((p) => p._id !== id));
            toast.success("The product is deleted successfuly");
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };

    const filterProducts = (query) => {
        if (!query) return setFiltered(products);
        setFiltered(
            products.filter((p) =>
                p.name.toLowerCase().includes(query.toLowerCase())
            )
        );
    };

    // search helper: sets search query which triggers filter via useEffect
    // const filterByQuery = (query) => {
    //     setSearchQuery(query);
    // };

    // category setter: sets category id or null
    const selectCategory = (categoryId) => {
        setSelectedCategoryId(categoryId);
    };

    return (
        <ProductContext.Provider
            value={{
                products,
                categories,
                filtered,
                loading,
                addProduct,
                filterProducts,
                updateProduct,
                deleteProduct,
                selectedCategoryId,
                selectCategory,
                searchQuery,
                setSearchQuery,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
}
