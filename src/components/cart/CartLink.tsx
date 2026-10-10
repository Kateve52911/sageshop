import {useCartStore} from "@/stores/cartStore.ts";
import {Link} from "@tanstack/react-router";
import {ShoppingBasket} from "lucide-react";

export default function CartLink () {
    const items = useCartStore((state) => state.items);
    const totalItems = items.reduce((total, item) => total + item.quantity, 0);
    return (
        <Link to="/cart" className="[&.active]:font-bold relative">
            <ShoppingBasket/> {totalItems > 0 && (
            <span className="absolute -top-3 -right-3 flex items-center justify-center rounded-full size-5 bg-terracotta text-sm text-cream">{totalItems}</span>
        )}
        </Link>
    )
}