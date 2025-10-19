import { create } from "zustand";

// simple localStorage persistence helper
const persistStorageKey = "cashier_cart";

const load = () => {
    try {
        const raw = localStorage.getItem(persistStorageKey);
        return raw ? JSON.parse(raw) : { items: [] };
    } catch {
        return { items: [] };
    }
};
const save = (state) => {
    try {
        localStorage.setItem(persistStorageKey, JSON.stringify(state));
    } catch {}
};

const initial = load();

export const useCartStore = create((set, get) => ({
    items: initial.items || [],

    // add product { id, name, price, qty=1 }
    addItem: (product) => {
        const items = [...get().items];
        const idx = items.findIndex((i) => i._id === product._id);
        if (idx > -1) {
            items[idx] = {
                ...items[idx],
                qty: items[idx].qty + (product.qty || 1),
            };
        } else {
            items.push({ ...product, qty: product.qty || 1 });
        }
        set({ items }, false, "addItem");
        save({ items });
    },

    removeItem: (id) => {
        const items = get().items.filter((i) => i._id !== id);
        set({ items }, false, "removeItem");
        save({ items });
    },

    updateQty: (id, qty) => {
        const items = get().items.map((i) =>
            i._id === id ? { ...i, qty: Math.max(0, qty) } : i
        );
        // strip zeros
        const filtered = items.filter((i) => i.qty > 0);
        set({ items: filtered }, false, "updateQty");
        save({ items: filtered });
    },

    clearCart: () => {
        const items = [];
        set({ items }, false, "clearCart");
        save({ items });
    },

    getTotalItems: () => {
        return get().items.reduce((s, i) => s + i.qty, 0);
    },

    getSubtotal: () => {
        return get().items.reduce((s, i) => s + i.qty * i.price, 0);
    },
}));
