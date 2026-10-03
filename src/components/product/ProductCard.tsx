import {  Link } from '@tanstack/react-router'
import { ShoppingBasket } from 'lucide-react'

import { MoveRight } from "lucide-react"
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

export function ProductCard({ product }: { product: Product }) {
    const discountPercentage = () => {
        const difference = product.price - product.discountedPrice
        const fractionOfDiscountedPrice = difference / product.price
        return Math.round(fractionOfDiscountedPrice * 100)
    }


    return (
        <Card className={'relative max-w-xs'}>
            {product.discountedPrice < product.price && (
                <Badge className={'bg-terracotta absolute top-2 right-2'}>{discountPercentage()}%</Badge>
            )}
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
            <CardFooter className={'flex-col justify-center gap-4'}>
                <Link to="/products/$productId"  params={{productId: product.id}} className={'w-full'}>
                    <Button className={'w-full flex justify-center'}>
                        See more details <MoveRight />
                    </Button>
                </Link>


                <Button className={'w-full flex justify-center'} variant={'secondary'} >
                    Add to cart <ShoppingBasket/>
                </Button>
            </CardFooter>
        </Card>
    )
}
