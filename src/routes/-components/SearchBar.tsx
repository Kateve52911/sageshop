import { SearchIcon } from "lucide-react"
import { useSearch, useNavigate } from "@tanstack/react-router"


import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group"

export default function SearchBar() {
    const { filter } = useSearch({ from: '/'})
    const navigate = useNavigate({ from: '/' })

    return (
        <InputGroup className="relative mx-w-m md:max-w-xl mx-auto">
            <InputGroupInput id="inline-start-input" value={filter ?? ''} onChange={(e) => {void navigate({search:{filter: e.target.value, page: 1}, replace:true} )}} placeholder="Search..." />
            <InputGroupAddon align="inline-start">
                <SearchIcon className="text-muted-foreground"/>
            </InputGroupAddon>
        </InputGroup>
    )
}
