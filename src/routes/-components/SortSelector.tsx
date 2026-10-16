import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

/**
 * The ways the product list can be sorted.
 *
 * - `default`: the order the API returns
 * - `price-asc`: lowest price first
 * - `price-desc`: highest price first
 * - `rating`: highest rating first
 */
export type SortOptions = 'default' | 'price-asc' | 'price-desc' | 'rating';

/** Props for `SortSelector`. */
export interface SortSelectProps {
  /** The sort option that is currently selected. */
  value: SortOptions;
  /** Called with the new option when the user picks one. */
  onChange: (value: SortOptions) => void;
}

const items: { label: string; value: SortOptions }[] = [
  { label: 'Default', value: 'default' },
  { label: 'Price: High to low', value: 'price-desc' },
  { label: 'Price: Low to high', value: 'price-asc' },
  { label: 'Rating', value: 'rating' },
];

/**
 * Dropdown for choosing how the product list is sorted.
 *
 * Only shows the choice. The parent page holds the state,
 * and `ProductList` does the actual sorting.
 */
export default function SortSelector({ value, onChange }: SortSelectProps) {
  return (
    <div className="my-2">
      <Select
        items={items}
        value={value}
        onValueChange={(newValue) => onChange(newValue ?? 'default')}
      >
        <SelectTrigger aria-label="Sort products" className="w-full">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Sort by:</SelectLabel>
            {items.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
