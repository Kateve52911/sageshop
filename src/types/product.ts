/**
 * A product from the Noroff online shop API.
 */
export interface Product {
    id: string;
    title: string;
    description: string;
    /** The original price, before any discount. */
    price: number;
    /** The price the customer pays. Equal to `price` if there's no discount. */
    discountedPrice: number;
    image: ProductImage;
    rating: number;
    /** Tags describing the product. Can be empty. */
    tags: string[];
    /** Customer reviews of the product. Can be empty. */
    reviews: Review[];
}

/**
 * A customer review of a product.
 */
export interface Review {
    id: string;
    username: string;
    rating: number;
    description: string;
}

/**
 * An image of a product.
 */
export interface ProductImage {
    url: string;
    alt: string;
}
