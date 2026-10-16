import type { Product } from '@/types/product';
import { Button } from '@/components/ui/button';
import {MessageSquareText} from 'lucide-react';
import { useCartStore } from '@/stores/cartStore';
import { toast } from 'sonner';
import {Badge} from "@/components/ui/badge.tsx";
import StarRating from "@/components/product/StartRating.tsx";

export default function ProductDetail({ product }: { product: Product }) {
  const addItem = useCartStore((state) => state.addItem);
  return (
    <div className="flex flex-col items-center gap-6 mx-auto max-w-3xl">
      <div className="flex flex-col md:flex-row justify-center md:items-start gap-3">
        <div>
          <img
            className="w-96 rounded shadow-lg"
            src={product.image.url}
            alt={product.image.alt}
          />
        </div>
        <div className="flex flex-col content-stretch items-start gap-2 mt-5">
          <h2 className="uppercase text-sm text-gray-500">{product.tags[0]}</h2>
          <h1 className="lowercase text-4xl font-serif">{product.title}</h1>
          <div className="flex gap-5 my-2 text-lg">
            <p className="font-bold">${product.discountedPrice}</p>
            {product.discountedPrice < product.price && (
              <p className="line-through text-gray-500">$ {product.price}</p>
            )}
          </div>
          <p className="w-96">{product.description}</p>
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
              toast('Added to cart!');
            }}
          >
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
                <p className="uppercase text-gray-500 flex gap-1 items-center">
                  <MessageSquareText size={16}/>{review.username}
                </p>
                <p className="text-lg">{review.description}</p>
                <p className="flex items-center gap-1"><span className="font-bold">Product rating:</span><StarRating rating={product.rating} /></p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
