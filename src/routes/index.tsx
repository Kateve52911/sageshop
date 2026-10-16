import { createFileRoute } from '@tanstack/react-router'
import ProductList from "@/routes/-components/ProductList";
import SearchBar from "@/routes/-components/SearchBar";
import SortSelector, {type SortOptions} from "@/routes/-components/SortSelector";
import {useState} from "react";

export const Route = createFileRoute('/')({
    component: Index,
    validateSearch: (searchParams) => {
        return {
            filter: searchParams?.filter ? String(searchParams.filter) : undefined,
            page: Number(searchParams?.page) || 1,
        }
    }
})

function Index() {
    const [sort, setSort] = useState<SortOptions>("default")
    return (
        <div className="mx-auto max-w-6xl justify-items-center p-2">
            <div className="w-full sm:items-center gap-3 max-w-5xl mx-auto flex flex-col sm:flex-row">
                <div className="flex-1">
                    <SearchBar/>
                </div>
                <SortSelector value={sort} onChange={setSort}/>
            </div>

            <ProductList sort={sort}/>

        </div>
    )
}