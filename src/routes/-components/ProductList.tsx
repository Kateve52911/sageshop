
import { useQuery } from '@tanstack/react-query'
import {fetchProducts} from "@/services/api/fetchProducts";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import ErrorMessage from "@/components/common/ErrorMessage";
import {ProductCard} from "@/components/product/ProductCard";
import PaginationControls from "@/routes/-components/PaginationControls";
import {useNavigate, useSearch} from "@tanstack/react-router"
import type {Product} from "@/types/product";
import type {SortOptions} from "@/routes/-components/SortSelector";

const itemsPerPage = 9

interface ProductListProps {
    sort: SortOptions;
}

export default  function ProductList({ sort }: ProductListProps) {
    const { data, isLoading, error } = useQuery ({
        queryKey: ['products'],
        queryFn: fetchProducts,
    })

    const  { filter, page } = useSearch({from: '/'})
    const navigate = useNavigate({ from: '/' })

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
   const productsToDisplay: Product[] = ((filter) ? data.filter((product) =>
       product.title.toLowerCase().includes(filter.toLowerCase()) ||
       product.description.toLowerCase().includes(filter.toLowerCase()) ||
       product.tags.some((tag: string): boolean => tag.toLowerCase().includes(filter.toLowerCase()))) : data )

    let sortedProducts: Product[]

    switch(sort) {
        case "price-asc":
            sortedProducts = productsToDisplay.toSorted((a, b) => a.discountedPrice - b.discountedPrice)
            break
        case "price-desc":
            sortedProducts = productsToDisplay.toSorted((a, b) => b.discountedPrice - a.discountedPrice)
            break
        case "rating":
            sortedProducts = productsToDisplay.toSorted((a, b) => b.rating - a.rating)
            break
        default:
            sortedProducts = productsToDisplay
            break
    }

    const totalPages: number = Math.ceil(sortedProducts.length / itemsPerPage)

    const indexOfLastItem: number = page * itemsPerPage
    const indexOfFirstItem: number = indexOfLastItem - itemsPerPage
    const currentItems: Product[] = sortedProducts.slice(indexOfFirstItem, indexOfLastItem)

    const handlePageChange = (pageNumber: number): void => {
        if (pageNumber >= 1 && pageNumber <= totalPages)  {
            void navigate({search:{filter, page: pageNumber}, replace:true})
        }
    }

    return (
        <div className="my-10">
            <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-8">
                {currentItems.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>
            <div className="my-5">
                <PaginationControls currentPage={page} totalPages={totalPages} onPageChange={handlePageChange}/>
            </div>
        </div>

    )


}