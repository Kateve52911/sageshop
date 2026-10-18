# AI Log

**Tool:** Claude
**Date:** July – October 2026
**Purpose:** Talking through course material to check my understanding ("rubber ducking"), e.g. TanStack Query and caching, TanStack Router search params, and how the lessons on filtering, search and pagination connect.
**Outcome:** Improved understanding of the course material, which I then used when writing the code myself.

**Tool:** Claude
**Date:** 22 July 2026
**Purpose:** Brainstorming the header and navigation layout (search bar, cart placement, mobile navigation), and looking at examples of e-commerce sites built as SPAs.
**Outcome:** Got feedback on UX conventions. I decided on the final layout myself.

**Tool:** Claude
**Date:** 22 July 2026
**Purpose:** Brainstorming project structure and build order: choosing between React Router and TanStack Router, folder-per-route structure with `-components` folders, and whether to use TanStack Query for fetching.
**Outcome:** Chose the stack and structure. Set up the project and wrote the code independently.

**Tool:** Claude
**Date:** 28 september 2026
**Purpose:** Explanation of how search, URL search params and pagination work together, and how to check an array of tags with `.some()` while studying the Noroff material.
**Outcome:** Improved understanding.

**Tool:** Claude
**Date:** 10 October 2026
**Purpose:** Debugging invalid HTML from a `Link` inside a `Button`.
**Outcome:** Learned to use Base UI's `render` prop and fixed the issue myself.

**Tool:** Claude
**Date:** 11 October 2026
**Purpose:** Explanation of how React Hook Form and Zod validation work together, and debugging the form (empty error messages, mismatched ids, wrong error checks, a TypeScript "declared but never read" error).
**Outcome:** Explanation received.

**Tool:** Claude
**Date:** 16 October 2026
**Purpose:** Brainstorming how to add sorting, and explanation of `type` vs `interface`, union types, `.toSorted()` with compare functions, and `switch` statements.
**Outcome:** Wrote `SortSelector`, the sort logic and `sortProducts`.

**Tool:** Claude
**Date:** 16 October 2026
**Purpose:** Explanation on strict mode in `tsconfig`, and replacing the `vite-tsconfig-paths` plugin with Vite's built-in option.
**Outcome:** Explanation received.

**Tool:** Claude
**Date:** 17 – 18 October 2026
**Purpose:** Explanation of unit testing with Vitest (`describe`, `test`, `expect`, `safeParse`, `toEqual`, `beforeEach`).
**Outcome:** Explanation received.

**Tool:** Claude
**Date:** 17 October 2026
**Purpose:** Debugging a `storage.setItem is not a function` error when testing the cart store. Got an explanation of the cause (Node's built-in localStorage in tests) and of the approach: an in-memory storage object and mocking globals in Vitest.
**Outcome:** Wrote `src/test/testSetup.ts` using MDN and Vitest docs.

**Tool:** Claude
**Date:** 18 October 2026
**Purpose:** Guidance on building reusable breadcrumbs with shadcn and TanStack `Link` (the `render` prop).
**Outcome:** Guidance received.
