import { createFileRoute, Link } from '@tanstack/react-router';
import { useCartStore } from '@/stores/cartStore';
import {ArrowRight, Check, FaceGrinning, Leaf} from 'lucide-react';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button.tsx';

export const Route = createFileRoute('/cart/success')({
  component: RouteComponent,
  head: () => ({
    meta: [{ title: 'SageShop | Success' }],
  }),
});

function RouteComponent() {
  const clearCart = useCartStore((state) => state.clearCart);
  useEffect(() => {
    clearCart();
  }, [clearCart]);
  return (
    <div className="flex flex-col justify-center items-center gap-5 mx-auto my-5 max-w-3xl">
        <Leaf className="size-40 text-sage" strokeWidth={1}/>
      <h2 className="flex items-center gap-2 text-3xl text-sage">
        Checkout Success! <Check size={40} />
      </h2>
        <div className="flex flex-col justify-center items-center gap-5 mx-auto">
            <p className="text-center text-xl">Thank you for your purchase! We hope you are happy with your product. Please leave a review </p>
            <FaceGrinning strokeWidth={1}/>
        </div>
      <Button
        render={<Link to="/" search={{ filter: undefined, page: 1 }} />}
        nativeButton={false}
      >
        Shop again!
        <ArrowRight size={16} />
      </Button>
    </div>
  );
}
