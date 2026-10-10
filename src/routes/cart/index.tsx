import {createFileRoute, Link} from '@tanstack/react-router'
import {useCartStore} from "@/stores/cartStore";
import {ArrowRight} from "lucide-react";
import CartItemRow from "@/components/cart/CartItemRow";
import { Button } from "@/components/ui/button"

export const Route = createFileRoute('/cart/')({
    component: Cart,
})

/**
 * The shopping cart page.
 *
 * Shows every item in the cart with its quantity controls, plus a summary
 * with the total number of items and the total price. If the cart is empty,
 * it shows a message with a link back to the shop instead.
 *
 * The cart data comes from the Zustand cart store, so the page updates
 * automatically when items are added, changed or removed.
 */
function Cart() {
    const items = useCartStore((state) => state.items)

    const totalItems= items.reduce((total, item) => total + item.quantity, 0);

    const totalCost = items.reduce((total, item) => total + item.discountedPrice * item.quantity, 0)

    if (items.length === 0) {
        return(
            <div className="flex flex-col items-start gap-6 m-6">
                <h2 className="text-xl">Your cart is empty.</h2>
                <Link to="/" search={{ filter: undefined, page: 1 }} className="text-xl flex items-center">Continue shopping <ArrowRight size={16}/></Link>
            </div>
        )
    }

    return (
        <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col gap-5 m-6">
                <h2 className="text-2xl font-bold text-center text-sage">Your shopping cart:</h2>
                {items.map((item) => (
                    <CartItemRow  key={item.id} item={item} />
                ))}
                <div>
                    <div className="flex-col justify-start">
                        <p className="font-bold">Your Summary: </p>
                        <p>Total items: {totalItems}</p>
                        <p>Total price: {totalCost.toFixed(2)}</p>
                    </div>
                    <div className="flex gap-4 justify-end my-2">
                        <Button variant="outline" render={<Link to="/" search={{ filter: undefined, page: 1 }} />} nativeButton={false}>Continue shopping <ArrowRight size={16}/></Button>
                        <Button render={<Link to="/cart/success" />} nativeButton={false}>Proceed to checkout</Button>
                    </div>
                </div>

            </div>
        </div>

    )
}
