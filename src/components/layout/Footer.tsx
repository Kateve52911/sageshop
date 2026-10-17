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
    <footer className="bg-sage p-4">
      <div className="flex flex-col lg:flex-row items-center lg:justify-between w-full gap-2">
        <div className="flex flex-col items-center gap-2 p-2">
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
        <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-4 p-2">
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
        </div>
        <div className="items-center text-cream text-center font-light p-2">
          <p>
            &copy; {new Date().getFullYear()} Kathrine Mellem Evensen. All
            rights reserved.{' '}
          </p>
        </div>
      </div>
    </footer>
  );
}
