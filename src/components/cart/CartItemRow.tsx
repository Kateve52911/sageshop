import type {CartItem} from "@/types/cartItem";
import {useCartStore} from "@/stores/cartStore";
import {Trash2} from "lucide-react";
import { toast } from "sonner"


export default function CartItemRow({ item }: { item: CartItem }) {
    const removeItem = useCartStore((state) => state.removeItem);
    const setQuantity = useCartStore((state) => state.setQuantity);

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 md:items-center justify-items-center shadow-lg p-2 gap-2">
            <img  className="w-20 rounded shadow-lg" src={item.image.url} alt={item.image.alt} />
            <h4 className=" text-lg font-bold mx-2 text-center md:text-left">{item.title}</h4>
            <div className="flex items-center">
                <button onClick={() => setQuantity(item.id, item.quantity - 1)} className="mx-2 px-2 py-1 rounded bg-sage/30">-</button>
                <p>Quantity: <span className="font-bold">{item.quantity}</span></p>
                <button onClick={() => setQuantity(item.id, item.quantity + 1)} className="mx-2 px-2 py-1 rounded bg-sage/30">+</button>
            </div>
            <div className="flex items-center gap-2">
                <p>Price: <span className="font-bold">{item.discountedPrice}</span></p>
                <button onClick={() => {removeItem(item.id); toast("Removed from cart!")}} aria-label="Remove item" className="text-destructive"><Trash2 size={16}/></button>
            </div>
        </div>

    )
}