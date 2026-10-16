
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export type SortOptions = "default" | "price-asc" | "price-desc" | "rating"


export interface SortSelectProps {
    value: SortOptions
    onChange: (value: SortOptions) => void
}

const items: { label: string; value: SortOptions }[] = [
    {label: "Default", value: "default"},
    {label: "Price: High to low", value: "price-desc"},
    {label: "Price: Low to low", value: "price-asc"},
    {label: "Rating", value: "rating"},
]

export default function SortSelector({value, onChange}: SortSelectProps ) {

    return (
        <div className="my-2" >
            <Select items={items} value={value} onValueChange={(newValue) => onChange(newValue ?? "default")}>
            <SelectTrigger className="w-full">
                <SelectValue/>
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Sort by:</SelectLabel>
                    {items.map((item) => (
                        <SelectItem key={item.value} value={item.value}>{item.label}</SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>

        </Select>
        </div>

    )
}
