import { create } from 'zustand'
import { persist } from 'zustand/middleware';
import type {CartItem} from "@/types/cartItem.ts";
import type {Product} from "@/types/product.ts";

interface CartStore {
    items: CartItem[];
    addItem: (product: Product) => void;
    removeItem: (id: string) => void;
    setQuantity: (id: string, quantity: number) => void;
    clearCart: () => void;
}

export const useCartStore = create<CartStore>()(
    persist(
        (set) => ({
            items: [],

            addItem: (product ) =>
                set((state) => {
                    const existingItem = state.items.find((item) => item.id === product.id);

                    if (existingItem) {
                        const updatedItems = state.items.map((item) =>
                            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
                        return { items: updatedItems}
                    } else {
                        const newItem = {id: product.id, title: product.title, image: product.image, discountedPrice: product.discountedPrice, quantity: 1}
                        const updatedItems = [...state.items, newItem]
                        return { items: updatedItems }
                    }
                }),

            removeItem: (id) => set((state) => {
                const updatedItems = state.items.filter((item) => item.id !== id)
                return { items: updatedItems }
            }),

            setQuantity: (id, quantity) => set((state) => {
                if (quantity <= 0) {
                    const updatedItems = state.items.filter((item) => item.id !== id)
                    return { items: updatedItems}
                } else {
                    const updatedItems = state.items.map((item) => item.id === id ? { ...item, quantity } : item)
                    return { items: updatedItems }
                }
            }),

            clearCart: () => set({ items: [] })
        }),
        {
    name: 'shopping-cart-storage',
    } ,
    )
)

