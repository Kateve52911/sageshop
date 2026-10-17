import { SearchIcon } from 'lucide-react';
import { useSearch, useNavigate, useLocation } from '@tanstack/react-router';

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/ui/input-group';

/**
 * Search bar for the product list both on the homepage and other pages. Searching on other pages takes you back to the homepage.
 *
 * The search text is stored in the URL (`?filter=...`) instead of in state,
 * so the search survives a refresh and can be shared as a link.
 * Typing also resets the list to page 1.
 */
export default function SearchBar() {
  const { filter } = useSearch({ strict: false });
  const navigate = useNavigate();
  const {pathname} = useLocation();

  return (
    <InputGroup className="relative">
      <InputGroupInput
        aria-label="Search products"
        value={filter ?? ''}
        onChange={(e) => {
          void navigate({
              to: '/',
            search: { filter: e.target.value || undefined, page: 1 },
            replace: pathname === '/',
          });
        }}
        placeholder="Search..."
      />
      <InputGroupAddon align="inline-start">
        <SearchIcon className="text-muted-foreground" />
      </InputGroupAddon>
    </InputGroup>
  );
}
