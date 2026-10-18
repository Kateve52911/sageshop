import type {Product} from "@/types/product.ts";
import type { SortOptions } from '@/routes/-components/SortSelector';

export function sortProducts(products: Product[], sort: SortOptions): Product[] {

    switch (sort) {
        case 'price-asc':
            return products.toSorted((a, b) => a.discountedPrice - b.discountedPrice,);
        case 'price-desc':
            return products.toSorted((a, b) => b.discountedPrice - a.discountedPrice,);
        case 'rating':
            return products.toSorted((a, b) => b.rating - a.rating,);
        default:
            return products;
    }
}