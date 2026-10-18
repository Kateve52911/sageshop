import { createFileRoute, useParams } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';
import { fetchProductById } from '@/services/api/fetchProductById';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import ErrorMessage from '@/components/common/ErrorMessage';
import ProductDetail from './-components/ProductDetail';
import PageBreadcrumb from '@/components/common/Breadcrumb';

export const Route = createFileRoute('/products/$productId')({
  component: RouteComponent,
  loader: ({ context, params }) =>
    context.queryClient.ensureQueryData({
      queryKey: ['productId', params.productId],
      queryFn: () => fetchProductById(params.productId),
    }),
  head: ({ loaderData }) => ({
    meta: [{ title: `SageShop | ${loaderData?.title || 'Product'}` }],
  }),
  errorComponent: ({ error }) => <ErrorMessage error={error} />,
});

function RouteComponent() {
  const { productId } = useParams({ from: '/products/$productId' });

  const { data, isLoading, error } = useQuery({
    queryKey: ['productId', productId],
    queryFn: () => fetchProductById(productId),
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage error={error} />;
  }

  if (!data) {
    return <p>No data available</p>;
  }

  return (
    <div className="gap-6 mx-4 lg:mx-auto my-5 max-w-5xl">
      <PageBreadcrumb currentPage={data.title.toLowerCase()} />
      <ProductDetail product={data} />
    </div>
  );
}
