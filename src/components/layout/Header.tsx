import { Link } from '@tanstack/react-router';
import { Leaf, SearchIcon } from 'lucide-react';
import CartLink from '@/components/cart/CartLink.tsx';
import SearchBar from '@/routes/-components/SearchBar.tsx';
import { Button } from '@/components/ui/button.tsx';
import { useState } from 'react';

/**
 * The site header, fixed to the top of the page.
 *
 * Shows the SageShop logo (links to the homepage), the navigation links,
 * and the cart link with the item count.
 * Links to the homepage reset the search and go back to page 1.
 */
export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <header className="p-2 shadow-md bg-cream sticky top-0 z-50">
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
        <Link
          to="/"
          className=" font-serif md:text-5xl text-2xl text-ink p-2"
          aria-label="SageShop, go to homepage"
          search={{ filter: undefined, page: 1 }}
        >
          <div className="flex items-center px-4">
            S
            <Leaf
              className="lg:size-10 size-5"
              strokeWidth={1}
              color="#5C7A5E"
            />
            geShop
          </div>
        </Link>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsSearchOpen(!isSearchOpen)}
          aria-label="Search"
          aria-expanded={isSearchOpen}
          className="md:hidden"
        >
          <SearchIcon />
        </Button>
        <div className="hidden md:block flex-1 max-w-md">
          <SearchBar />
        </div>
        <nav className="flex justify-self-end gap-2 content-center p-4 ">
          <Link
            to="/"
            search={{ filter: undefined, page: 1 }}
            className="[&.active]:after:w-full after:left-1/2 after:-translate-x-1/2 after:w-0 relative after:absolute after:-bottom-1 after:h-0.5 after:bg-sage after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
          >
            Home
          </Link>
          <Link
            to="/contact"
            className="[&.active]:after:w-full after:left-1/2 after:-translate-x-1/2 after:w-0 relative after:absolute after:-bottom-1 after:h-0.5 after:bg-sage after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
          >
            Contact
          </Link>
          <CartLink />
        </nav>
      </div>

      {isSearchOpen && (
        <div>
          <SearchBar />
        </div>
      )}
    </header>
  );
}
