import type { ProductImage } from '@/types/product.ts';

/**
 * A product in the shopping cart.
 *
 * Only holds the fields the cart needs to display, plus the quantity,
 * so that the full product (reviews, tags, etc.) isn't saved in the cart.
 */
export interface CartItem {
  id: string;
  title: string;
  image: ProductImage;
  /** The price the customer pays. Equal to the original price if there's no discount. */
  discountedPrice: number;
  /** How many of this product are in the cart. */
  quantity: number;
}
