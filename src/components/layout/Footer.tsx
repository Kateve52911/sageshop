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
    <footer className="bg-sage">
      <div className="flex flex-col items-center justify-center w-full gap-3">
        <Link
          to="/"
          className="font-serif text-3xl text-cream p-2"
          aria-label="SageShop, go to homepage"
          search={{ filter: undefined, page: 1 }}
        >
          <div className="flex items-center text-cream">
            S<Leaf size={28} strokeWidth={1} />
            geShop
          </div>
        </Link>
        <Link to="/contact" className="[&.active]:font-bold text-cream">
          Contact Us
        </Link>
        <div className="items-center text-cream text-center font-light">
          <p>
            &copy; {new Date().getFullYear()} Kathrine Mellem Evensen. All
            rights reserved.{' '}
          </p>
        </div>
      </div>
    </footer>
  );
}
