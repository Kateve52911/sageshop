import { Link } from '@tanstack/react-router';
import { Leaf } from 'lucide-react';

/**
 * The site footer, shown at the bottom of every page.
 *
 * Shows the SageShop logo (links to the homepage) and the copyright line.
 * The year updates automatically.
 */
export default function Footer() {
  return (
    <footer className="bg-sage p-10">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6 ">
        <div className="flex flex-col md:justify-self-start items-center gap-2 md:text-left">
          <Link
              to="/"
              className="font-serif text-3xl text-cream "
              aria-label="SageShop, go to homepage"
              search={{ filter: undefined, page: 1 }}
          >
            <div className="flex items-center text-cream">
              S<Leaf size={28} strokeWidth={1} />
              geShop
            </div>
          </Link>
          <h3 className=" text-lg text-center font-light font-serif italic text-cream">Thoughtfully chosen, everyday goods</h3>
        </div>
        <nav className="flex flex-col lg:flex-row items-center justify-center w-full gap-4">
            <Link to="/"
                     search={{ filter: undefined, page: 1 }}
                     className="[&.active]:font-bold text-cream">
            Home
          </Link>
            <Link to="/contact" className="[&.active]:font-bold text-cream">
              Contact Us
            </Link>
            <Link to="/cart" className="[&.active]:font-bold text-cream">
              Cart
            </Link>
        </nav>
        <div className="items-center text-cream md:text-right md:justify-self-end flex flex-col font-light">
          <p>&copy; {new Date().getFullYear()}</p>
          <p>Kathrine M. Evensen</p>
          <p>All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
