import { SearchIcon } from "lucide-react"
import { useSearch, useNavigate } from "@tanstack/react-router"


import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group"

/**
 * Search bar for the product list on the homepage.
 *
 * The search text is stored in the URL (`?filter=...`) instead of in state,
 * so the search survives a refresh and can be shared as a link.
 * Typing also resets the list to page 1.
 */
export default function SearchBar() {
    const { filter } = useSearch({ from: '/'})
    const navigate = useNavigate({ from: '/' })

    return (
        <InputGroup className="relative">
            <InputGroupInput id="product-search" aria-label="Search products" value={filter ?? ''} onChange={(e) => {void navigate({search:{filter: e.target.value || undefined, page: 1}, replace:true} )}} placeholder="Search..." />
            <InputGroupAddon align="inline-start">
                <SearchIcon className="text-muted-foreground"/>
            </InputGroupAddon>
        </InputGroup>
    )
}
