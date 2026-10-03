import type {ProductImage} from "@/types/product.ts";

export interface CartItem {
    id: string;
    title: string;
    image: ProductImage;
    price: number;
    discountPrice: number;
    quantity: number;
}