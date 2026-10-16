import { APIError } from './apiError.ts';

/**
 * Fetches data from the API and returns the `data` field from the response.
 *
 * Used by the other API functions (e.g. `fetchProducts`, `fetchProductById`)
 * so that error handling is the same for every request.
 *
 * @template T - The type of data the request is expected to return.
 * @param url - The full URL to fetch from.
 * @param notFoundMessage - The error message to use if the API returns 404.
 * @returns A promise that resolves to the `data` from the API response.
 * @throws {APIError} If the response is not OK (with a message based on the status code),
 * or if the request fails for another reason, such as a network error.
 */
export async function fetchHelper<T>(
  url: string,
  notFoundMessage: string,
): Promise<T> {
  let response;
  try {
    response = await fetch(url);
    if (!response.ok) {
      if (response.status === 404) {
        throw new APIError(notFoundMessage, response.status);
      } else if (response.status === 401 || response.status === 403) {
        throw new APIError(`Unauthorised or forbidden`, response.status);
      } else if (response.status === 400) {
        throw new APIError(`Bad request to the API`, response.status);
      } else if (response.status >= 500) {
        throw new APIError(
          `Request was valid but server could not fulfill the request`,
          response.status,
        );
      } else {
        throw new APIError(`Could not fetch the data`, response.status);
      }
    } else {
      const { data } = await response.json();
      return data;
    }
  } catch (error) {
    if (error instanceof APIError) {
      throw error;
    } else {
      throw new APIError(
        `Could not load the data, check your connection`,
        undefined,
      );
    }
  }
}
