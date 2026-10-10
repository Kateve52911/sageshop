import {Link} from "@tanstack/react-router";
import {Leaf} from "lucide-react";
import CartLink from "@/components/cart/CartLink.tsx";

export default function Header() {
    return (
        <div className="p-2 flex justify-between gap-2 shadow-md bg-cream fixed top-0 left-0 right-0 z-50">
            <Link to="/" className=" font-serif text-5xl text-ink p-2 " search={{ filter: undefined, page: 1 }}>
                <div className="flex items-center">S<Leaf size={36} strokeWidth={1} color="#5C7A5E" />geShop</div>

            </Link>{' '}
            <div className="flex justify-evenly gap-2 content-center p-4 ">
                <Link to="/" search={{ filter: undefined, page: 1 }} className="[&.active]:font-bold">
                    Home
                </Link>{' '}
                <Link to="/contact" search={{ filter: undefined, page: 1 }} className="[&.active]:font-bold">
                    Contact
                </Link>{' '}
                <CartLink/>
            </div>
        </div>
    )
}