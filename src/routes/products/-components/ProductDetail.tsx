import type {Product} from "@/types/product";
import { Button } from "@/components/ui/button"
import { UserStar } from 'lucide-react'
import {useCartStore} from "@/stores/cartStore";
import { toast } from "sonner"

export default function ProductDetail({ product }: { product: Product }) {
    const addItem = useCartStore((state) => state.addItem);
    return (
        <div className="flex flex-col items-center gap-6 mx-auto max-w-3xl">
            <div className="flex-col md:flex-row justify-center items-start gap-3">
                <div>
                    <img  className="w-96 rounded shadow-lg" src={product.image.url} alt={product.image.alt} />
                </div>
                <div className="flex flex-col content-stretch items-start gap-2 mt-5">
                    <h2 className="uppercase text-sm text-gray-500" >{product.tags[0]}</h2>
                    <h1 className="lowercase text-4xl">{product.title}</h1>
                    <div className={'flex gap-5 my-2 text-lg'}>
                        <p>{product.discountedPrice}</p>
                        {product.discountedPrice < product.price && (
                            <p className={'line-through text-gray-500'}>{product.price}</p>
                        )}
                    </div>
                    <p className="w-96">{product.description}</p>
                    <Button className="w-full mt-4" onClick={() =>  {addItem(product); toast("Added to cart!")}} >
                        Add to cart
                    </Button>

                </div>
            </div>
                {product.reviews.length > 0 && (
                    <div className="flex flex-col gap-3 md:mt-2 m-3">
                        <h3 className="text-xl text-center">PRODUCT REVIEW:</h3>
                        {product.reviews.map((review) => (
                            <div className="gap-4" key={review.id}>
                                <div className="flex flex-col content-stretch gap-4 border py-10 px-20 border-sage rounded ">
                                    <p className="uppercase text-gray-500 flex items-center"><UserStar  /> {review.username}</p>
                                    <p className="text-lg">{review.description}</p>
                                    <p><span className={'font-bold'}>Product rating: </span>{review.rating}</p>
                                </div>

                            </div>
                        ))}
                    </div>
                )}
        </div>
    )

}