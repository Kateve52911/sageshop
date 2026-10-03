import type {Product} from "@/types/product.ts";
import {BASE_URL, SHOP_URL} from "./config.ts";
import {fetchHelper} from "./fetchHelper.ts";

export async function fetchProductById(productId: string): Promise<Product> {
    const URL = `${BASE_URL}${SHOP_URL}/${productId}`;
    return await fetchHelper<Product>(URL, `Could not fetch product: ${productId}`);
}


