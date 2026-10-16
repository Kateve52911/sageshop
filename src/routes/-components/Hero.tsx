import {Leaf} from "lucide-react";

export default function Hero() {
    return (
        <div className="flex w-full flex-col justify-center items-center mt-0 gap-1 py-5 mb-4 mx-auto">
            <Leaf className="size-10 text-sage" aria-hidden="true" strokeWidth={1}/>
            <h1 className="text-3xl text-center font-serif font-bold text-sage">Thoughtfully chosen, everyday goods</h1>
            <h4 className="text-lg text-center font-light italic text-dark">Browse our collection below</h4>
        </div>
    )
}