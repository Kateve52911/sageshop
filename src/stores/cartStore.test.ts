import { expect, describe, test, beforeEach } from 'vitest';
import {useCartStore} from "@/stores/cartStore.ts";
import type {Product} from "@/types/product.ts";

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
]

describe('cartStore', () => {
    beforeEach(() => {
        useCartStore.setState({ items: [] })
    })

    describe('addItem', () => {
        test('Should add items to the cart', () => {
            useCartStore.getState().addItem(products[0])
            expect(useCartStore.getState().items).toHaveLength(1)
        })
        test('increases the quantity when the same product is added twice', () => {
            useCartStore.getState().addItem(products[0])
            useCartStore.getState().addItem(products[0])
            expect(useCartStore.getState().items).toHaveLength(1)
            expect(useCartStore.getState().items[0].quantity).toBe(2)
        })
    })

    describe('removeItem', () => {
        test('removes the item in the cart when quantity is set to 0 or is deleted', () => {
            useCartStore.getState().addItem(products[0])
            useCartStore.getState().removeItem(products[0].id)
            expect(useCartStore.getState().items).toHaveLength(0)
        })
    })

    describe('setQuantity', () => {
        test('set the quantity of the item in the cart', () => {
            useCartStore.getState().addItem(products[0])
            useCartStore.getState().setQuantity(products[0].id, 5)
            expect(useCartStore.getState().items).toHaveLength(1)
            expect(useCartStore.getState().items[0].quantity).toBe(5)
        })
        test('deletes the item if quantity is set to 0', () => {
            useCartStore.getState().addItem(products[0])
            useCartStore.getState().setQuantity(products[0].id, 0)
            expect(useCartStore.getState().items).toHaveLength(0)
        })
    })

    describe('clearCart', () => {
        test('clears the cart', () => {
            useCartStore.getState().addItem(products[0])
            useCartStore.getState().addItem(products[1])
            useCartStore.getState().clearCart()
            expect(useCartStore.getState().items).toHaveLength(0)
        })
    })
})