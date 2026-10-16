import type {Product} from "@/types/product.ts";
import {BASE_URL, SHOP_URL} from "./config.ts";
import {fetchHelper} from "./fetchHelper.ts";

/**
 * Fetches a single product from the online shop API by its id.
 *
 * @param productId - The id of the product to fetch.
 * @returns A promise that resolves to the product.
 * @throws {APIError} If the request fails, for example with 404 if no product
 * has that id. See `fetchHelper` for details.
 */
export async function fetchProductById(productId: string): Promise<Product> {
    const url = `${BASE_URL}${SHOP_URL}/${productId}`;
    return await fetchHelper<Product>(url, `Could not fetch product: ${productId}`);
}


