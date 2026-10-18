import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '@/services/api/fetchProducts';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import ErrorMessage from '@/components/common/ErrorMessage';
import { ProductCard } from '@/components/product/ProductCard';
import PaginationControls from '@/routes/-components/PaginationControls';
import { useNavigate, useSearch } from '@tanstack/react-router';
import type { Product } from '@/types/product';
import type { SortOptions } from '@/routes/-components/SortSelector';
import { sortProducts } from "@/utils/helperFunctions/sortProducts";

/** How many products are shown per page**/
const itemsPerPage = 9;

/** Props for `ProductList`. */
interface ProductListProps {
  /** How the products should be sorted. */
  sort: SortOptions;
}

/**
 * Fetches all products and shows them in a grid, with pagination.
 *
 * The products go through three steps, in this order:
 * 1. Filter: only products matching the search text (`filter` from the URL)
 * 2. Sort: by the chosen `sort` option
 * 3. Paginate: only the products for the current page (`page` from the URL)
 *
 * Sorting must happen before pagination, so the order applies to all
 * products, not just the ones on the current page.
 */
export default function ProductList({ sort }: ProductListProps) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  const { filter, page } = useSearch({ from: '/' });
  const navigate = useNavigate({ from: '/' });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage error={error} />;
  }

  if (!data) {
    return <p className="text-center text-2xl text-sage">No data available</p>;
  }
  const productsToDisplay: Product[] = filter
    ? data.filter(
        (product) =>
          product.title.toLowerCase().includes(filter.toLowerCase()) ||
          product.description.toLowerCase().includes(filter.toLowerCase()) ||
          product.tags.some((tag: string): boolean =>
            tag.toLowerCase().includes(filter.toLowerCase()),
          ),
      )
    : data;

  if (productsToDisplay.length === 0) {
    return <p className="text-center text-sage text-2xl my-10">No Products match your search.</p>;
  }

  const sortedProducts = sortProducts(productsToDisplay, sort);

  const totalPages: number = Math.ceil(sortedProducts.length / itemsPerPage);

  const indexOfLastItem: number = page * itemsPerPage;
  const indexOfFirstItem: number = indexOfLastItem - itemsPerPage;
  const currentItems: Product[] = sortedProducts.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );

  const handlePageChange = (pageNumber: number): void => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      void navigate({ search: { filter, page: pageNumber }, replace: true });
    }
  };

  return (
    <div className="my-10">
      <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-8">
        {currentItems.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="my-5">
        <PaginationControls
          currentPage={page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}
