import {  Link } from '@tanstack/react-router'
import { ShoppingBasket } from 'lucide-react'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import type { Product } from '@/types/product.ts'
import {useCartStore} from "@/stores/cartStore.ts";
import {toast} from "sonner";

export function ProductCard({ product }: { product: Product }) {
    const discountPercentage = () => {
        const difference = product.price - product.discountedPrice
        const fractionOfDiscountedPrice = difference / product.price
        return Math.round(fractionOfDiscountedPrice * 100)
    }
    const addItem = useCartStore((state) => state.addItem);

    return (

            <Card className="relative h-full max-w-xs motion-safe:hover:scale-105 safe:focus-within:scale-105 transition hover:shadow-lg duration-200">
                {product.discountedPrice < product.price && (
                    <Badge className="bg-terracotta absolute top-2 right-2">{discountPercentage()}%</Badge>
                )}
                <Link to="/products/$productId"  params={{productId: product.id}} className="w-full">
                <CardHeader className={'flex justify-center'}>
                    <img src={product.image.url} alt={product.image.alt} className={'w-full aspect-square object-cover rounded-md'} />
                </CardHeader>
                <CardContent>
                    <CardTitle className={'text-xl'}>{product.title}</CardTitle>
                    <div className={'flex gap-5 my-2 text-lg'}>
                        <p>{product.discountedPrice}</p>
                        {product.discountedPrice < product.price && (
                            <p className={'line-through text-gray-500'}>{product.price}</p>
                        )}
                    </div>
                    <CardDescription className={'flex flex-col gap-2'}>
                        <p>{product.description}</p>
                        <p><span className={'font-bold'}>Product rating:</span> {product.rating}</p>
                        <p>
                            {product.tags.map((tag: string) => (
                                <span key={tag}> #{tag}</span>
                            ))}
                        </p>
                    </CardDescription>
                </CardContent>
                </Link>
                <CardFooter className={'flex justify-center gap-1 mt-auto'}>
                    <Button className="w-full mt-4" onClick={() =>  {addItem(product); toast("Added to cart!")}} >
                        Add to cart <ShoppingBasket/>
                    </Button>
                </CardFooter>
            </Card>
    )
}
