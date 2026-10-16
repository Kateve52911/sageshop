/**
 * Custom error for failed API requests.
 *
 * Works like a normal `Error`, but can also hold the HTTP status code,
 * so the app can show different messages for different errors.
 */
export class APIError extends Error {
  /** The HTTP status code from the response. Undefined if there was no response, e.g. a network error. */
  readonly status?: number;

  /**
   * @param message - A readable description of what went wrong.
   * @param status - The HTTP status code, if there was a response.
   */
  constructor(message: string, status?: number) {
    super(message);
    this.name = 'APIError';
    this.status = status;
  }
}
