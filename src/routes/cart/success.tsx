import {createFileRoute, Link} from '@tanstack/react-router'
import {useCartStore} from "@/stores/cartStore";
import {ArrowRight, Check} from "lucide-react";
import { useEffect } from "react";
import {Button} from "@/components/ui/button.tsx";

export const Route = createFileRoute('/cart/success')({
  component: RouteComponent,
})

function RouteComponent() {
  const clearCart = useCartStore((state) => state.clearCart);
  useEffect(() => {clearCart() }, [clearCart]);
  return (
      <div className="flex flex-col justify-center items-center gap-5 mx-auto my-50 max-w-3xl">
        <h2 className="flex items-center gap-2 text-2xl text-sage">Checkout Success! <Check size={16} /></h2>
        <p>Thank you for your order!</p>
        <Button  render={<Link to="/" search={{ filter: undefined, page: 1 }} />} nativeButton={false}>Shop again!<ArrowRight size={16}/></Button>
      </div>
  )
}
