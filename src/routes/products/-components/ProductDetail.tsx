import type { Product } from '@/types/product';
import { Button } from '@/components/ui/button';
import {MessageSquareText} from 'lucide-react';
import { useCartStore } from '@/stores/cartStore';
import { toast } from 'sonner';
import {Badge} from "@/components/ui/badge.tsx";
import StarRating from "@/components/product/StarRating.tsx";

export default function ProductDetail({ product }: { product: Product }) {
  const addItem = useCartStore((state) => state.addItem);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-4 lg:mx-auto my-5 max-w-5xl">
        <div>
          <img
            className="rounded shadow-lg aspect-square object-cover"
            src={product.image.url}
            alt={product.image.alt}
          />
        </div>
        <div className="md:row-span-2 flex flex-col gap-2">
          <p className="uppercase text-sm text-gray-500 tracking-widest">{product.tags[0]}</p>
          <h1 className="lowercase text-4xl font-serif">{product.title}</h1>
          <div className="flex gap-5 my-2 text-lg">
            <p className="font-bold">${product.discountedPrice}</p>
            {product.discountedPrice < product.price && (
              <p className="line-through text-gray-500">${product.price}</p>
            )}
          </div>
          <p>{product.description}</p>
          <div className="flex flex-col gap-3">
            <p className="flex items-center gap-1"><span className="font-bold">Product rating:</span><StarRating rating={product.rating} /></p>
            <div className="flex gap-3">
              {product.tags.map((tag: string) => (
                  <Badge className="bg-sage-light text-dark" key={tag}> #{tag}</Badge>
              ))}
            </div>
          </div>
          <Button
            className="w-full mt-4"
            onClick={() => {
              addItem(product);
              toast(`${product.title} was added to your cart!`);
            }}
          >
            Add to cart
          </Button>
        </div>
      {product.reviews.length > 0 && (
        <div className="md:col-start-1 mt-6 gap-3">
          <h3 className="text-xl">REVIEWS</h3>
          {product.reviews.map((review) => (
            <div key={review.id}>
              <div className="flex flex-col items-start gap-4 border py-6 px-4 lg:px-8 w-full border-sage-light rounded ">
                <p className="uppercase text-gray-500 flex gap-1 items-center font-serif">
                  <MessageSquareText size={16}/>{review.username}
                </p>
                <p className="text-lg">{review.description}</p>
                <p className="flex items-center gap-1"><span className="font-bold">Rating:</span><StarRating rating={review.rating} /></p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
