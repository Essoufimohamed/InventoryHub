import { createContext, useEffect, useState } from "react";
import api from "../utils/api";
import toast from "react-hot-toast";

export const ProductContext = createContext({});

// export const useProducts = () => useContext(ProductContext);

export function ProductProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch products once
    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            setLoading(true);
            const { data } = await api.get("product");
            setProducts(data);
            setFiltered(data);
        } catch (error) {
            console.error("Error fetching products:", error);
            toast.error("Error fetching products");
        } finally {
            setLoading(false);
        }
    };

    const addProduct = async (newProduct) => {
        try {
            const { data } = await api.post("product", newProduct);
            setProducts((prev) => [...prev, data]);
            setFiltered((prev) => [...prev, data]);
            // fetchProducts();
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

    return (
        <ProductContext.Provider
            value={{
                products,
                filtered,
                loading,
                addProduct,
                filterProducts,
                updateProduct,
                deleteProduct,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
}
