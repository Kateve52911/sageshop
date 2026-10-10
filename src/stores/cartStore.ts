import { create } from 'zustand'
import { persist } from 'zustand/middleware';
import type {CartItem} from "@/types/cartItem";
import type {Product} from "@/types/product";

/** The shape of the shopping cart store: the items and the actions that change them. */
interface CartStore {
    /** The products currently in the cart, saved to localStorage. */
    items: CartItem[];

    /**
     * Adds a product to the cart.
     * If the product is already in the cart, its quantity goes up by one.
     *
     * @param product - The product to add.
     */
    addItem: (product: Product) => void;

    /**
     * Removes an item from the cart completely, whatever its quantity.
     *
     * @param id - The id of the item to remove.
     */
    removeItem: (id: string) => void;

    /**
     * Sets the quantity of an item in the cart.
     * If the quantity is 0 or lower, the item is removed instead.
     *
     * @param id - The id of the item to change.
     * @param quantity - The new quantity.
     */
    setQuantity: (id: string, quantity: number) => void;

    /** Empties the cart. Used after a completed checkout. */
    clearCart: () => void;
}


/**
 * Zustand store for the shopping cart.
 *
 * The cart is persisted to localStorage under the key "shopping-cart-storage",
 * so it survives page reloads. Totals are not stored; components calculate
 * them from `items`.
 */
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

