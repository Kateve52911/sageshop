import { createFileRoute, useParams } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import {fetchProductById} from "@/services/api/fetchProductById.ts";
import LoadingSpinner from "@/components/common/LoadingSpinner.tsx";
import ErrorMessage from "@/components/common/ErrorMessage.tsx";
import ProductDetail from './-components/ProductDetail';

export const Route = createFileRoute('/products/$productId')({
  component: RouteComponent,

})

function RouteComponent() {
  const { productId } = useParams({from: '/products/$productId'})

  const { data, isLoading, error } = useQuery ({
    queryKey: ['productId', productId],
    queryFn: () => fetchProductById(productId)
  })

  if(isLoading){
    return <LoadingSpinner />
  }

  if(error){
    return <ErrorMessage error={error} />
  }

  if(!data){
    return (
        <p>No data available</p>
    )
  }

  return <ProductDetail product={data} />
}
