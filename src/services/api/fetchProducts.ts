import { BASE_URL, SHOP_URL } from './config.ts';

import type { Product } from '@/types/product.ts';
import { fetchHelper } from './fetchHelper.ts';

/**
 * Fetches all products from the online shop API.
 *
 * @returns A promise that resolves to an array of all products.
 * @throws {APIError} If the request fails. See `fetchHelper` for details.
 */
export async function fetchProducts(): Promise<Product[]> {
  const url = `${BASE_URL}${SHOP_URL}`;
  return fetchHelper<Product[]>(url, `Could not fetch products...`);
}
