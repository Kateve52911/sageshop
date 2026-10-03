import type {Product} from "@/types/product.ts";
import { Button } from "@/components/ui/button"
import { UserStar } from 'lucide-react'
import { Marker } from "@/components/ui/marker"

export default function ProductDetail({ product }: { product: Product }) {
    return (
        <div className="flex flex-col items-start gap-2 my-3 mx-auto max-w-3xl">
            <div className="flex justify-center items-start gap-3">
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
                    <Button className="w-full mt-4">
                        Add to cart
                    </Button>
                </div>
            </div>
                {product.reviews.length > 0 && (
                    <div className="flex flex-col gap-3 mt-2 items-start">
                        {product.reviews.map((review) => (
                            <div className="gap-4" key={review.id}>
                                <div>
                                    <p className="ippercase text-gray-500 flex items-center"><UserStar  />{review.username}</p>
                                    <p className="text-lg">{review.description}</p>
                                    <p><span className={'font-bold'}>Product rating: </span>{review.rating}</p>
                                    <Marker variant='separator' />
                                </div>

                            </div>
                        ))}
                    </div>
                )}
        </div>
    )

}