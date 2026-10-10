import {Link} from "@tanstack/react-router";
import {Leaf} from "lucide-react";

export default function Footer() {
    return (
        <div className="bg-sage">
            <div className="flex flex-col items-center justify-center w-full">
                <Link to="/" className=" font-serif text-3xl text-cream p-2 " search={{ filter: undefined, page: 1 }}>
                    <div className="flex items-center text-cream">S<Leaf size={28} strokeWidth={1}/>geShop</div>
                </Link>{' '}
                <p className="text-cream font-thin">
                    &copy; {new Date().getFullYear()} Kathrine Mellem Evensen. All rights
                    reserved.
                </p>
            </div>


        </div>
    )
}