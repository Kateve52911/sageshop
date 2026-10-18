import { expect, describe, test } from 'vitest';
import type {Product} from "@/types/product.ts";
import { sortProducts } from "@/utils/helperFunctions/sortProducts";

const products: Product[] = [
    {
        id: '65',
        title: 'Test Product',
        description: "A beautiful test product",
        image: { url: 'test.jpg', alt: 'Test image' },
        price: 5,
        discountedPrice: 5,
        tags: ["Test"],
        rating: 3,
        reviews: []
    },
    {
        id: '22',
        title: 'Flower',
        description: "A beautiful bouquet of flowers",
        image: { url: 'test.jpg', alt: 'Test image' },
        price: 10,
        discountedPrice: 3,
        tags: ["Flower"],
        rating: 5,
        reviews: []
    },
    {
        id: '1',
        title: 'Almond',
        description: "A beautiful almond",
        image: { url: 'test.jpg', alt: 'Test image' },
        price: 11,
        discountedPrice: 9,
        tags: ["Almond"],
        rating: 4,
        reviews: []
    },
]

describe('sortProducts', () => {
    test('sort products by price from highest to lowest', () => {
        expect(sortProducts(products, 'price-desc').map((p: Product) => p.id)).toEqual(['1', '65', '22'])
        })
    test('sort products by price from lowest to highest', () => {
        expect(sortProducts(products, 'price-asc').map((p: Product) => p.id)).toEqual(['22', '65', '1'])
    })
    test('sort products by their product rating', () => {
        expect(sortProducts(products, 'rating').map((p: Product) => p.id)).toEqual(['22', '1', '65'])
    })
    test('sort products by their default order', () => {
        expect(sortProducts(products, 'default').map((p: Product) => p.id)).toEqual(['65', '22', '1'])
    })
    test('tests it does not change the original order of the array', () => {
        sortProducts(products, 'price-asc')
        expect(products.map((p: Product) => p.id)).toEqual(['65', '22', '1'])
    })
})
