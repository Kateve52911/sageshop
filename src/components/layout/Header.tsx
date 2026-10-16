import { Link } from '@tanstack/react-router';
import { Leaf } from 'lucide-react';
import CartLink from '@/components/cart/CartLink.tsx';

/**
 * The site header, fixed to the top of the page.
 *
 * Shows the SageShop logo (links to the homepage), the navigation links,
 * and the cart link with the item count.
 * Links to the homepage reset the search and go back to page 1.
 */
export default function Header() {
  return (
    <header className="p-2 flex justify-between items-center gap-2 shadow-md bg-cream fixed top-0 left-0 right-0 z-50">
      <Link
        to="/"
        className=" font-serif md:text-5xl text-2xl text-ink p-2"
        aria-label="SageShop, go to homepage"
        search={{ filter: undefined, page: 1 }}
      >
        <div className="flex items-center">
          S
          <Leaf className="lg:size-10 size-5" strokeWidth={1} color="#5C7A5E" />
          geShop
        </div>
      </Link>
      <nav className="flex justify-evenly gap-2 content-center p-4 ">
        <Link
          to="/"
          search={{ filter: undefined, page: 1 }}
          className="[&.active]:font-bold"
        >
          Home
        </Link>
        <Link to="/contact" className="[&.active]:font-bold">
          Contact
        </Link>
        <CartLink />
      </nav>
    </header>
  );
}
