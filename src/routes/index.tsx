import { createFileRoute } from '@tanstack/react-router';
import ProductList from '@/routes/-components/ProductList';
import SearchBar from '@/routes/-components/SearchBar';
import SortSelector, {
  type SortOptions,
} from '@/routes/-components/SortSelector';
import { useState } from 'react';
import Hero from "@/routes/-components/Hero.tsx";

/**
 * The homepage route.
 *
 * `validateSearch` reads the URL search params and makes sure they have
 * the right types:
 * - `filter`: the search text, or undefined if there's no search
 * - `page`: the current page number, defaults to 1
 */
export const Route = createFileRoute('/')({
  component: Index,
  validateSearch: (searchParams) => {
    return {
      filter: searchParams?.filter ? String(searchParams.filter) : undefined,
      page: Number(searchParams?.page) || 1,
    };
  },
  head: () => ({
    meta: [{ title: 'SageShop | Products' }],
  }),
});

/**
 * The homepage: search bar, sort dropdown and the product list.
 *
 * Holds the sort choice in state and passes it down to `ProductList`.
 */
function Index() {
  const [sort, setSort] = useState<SortOptions>('default');
  return (
      <div>
        <Hero/>
        <div className="mx-auto max-w-6xl justify-items-center my-2">
          <h1 className="sr-only">Products</h1>
          <div className="w-full sm:items-center gap-3 max-w-sm lg:max-w-5xl lg:mx-auto flex flex-col sm:flex-row">
            <div className="flex-1">
              <SearchBar />
            </div>
            <SortSelector value={sort} onChange={setSort} />
          </div>
          <ProductList sort={sort} />
        </div>
      </div>

  );
}
