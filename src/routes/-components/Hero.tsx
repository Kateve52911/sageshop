import {Leaf} from "lucide-react";

export default function Hero() {
    return (
        <div className="flex w-full flex-col justify-center items-center mt-0 gap-1 py-10 mb-4 mx-auto bg-gradient-sage">
            <div className="flex font-serif text-3xl items-center font-light text-cream">
                S<Leaf size={30} strokeWidth={1} />
                geShop
            </div>
            <h1 className="text-xl font-light  text-cream">Thoughtfully chosen, everyday goods</h1>

        </div>
    )
}