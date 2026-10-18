import { Star } from 'lucide-react';

/** Props for `StarRating`. */
interface StarRatingProps {
  /** The rating to show, from 0 to 5. Decimals are rounded to the nearest whole star. */
  rating: number;
}

/** The position of each of the 5 stars. */
const rateList = [1, 2, 3, 4, 5];

/**
 * Shows a rating as 5 stars, where the number of filled stars matches the rating.
 *
 * Screen readers read the rating as text (e.g. "Rated 4 out of 5")
 * instead of the individual star icons.
 */
export default function StarRating({ rating }: StarRatingProps) {
  const rounded = Math.round(rating);
  return (
    <span
      className="flex gap-1 text-terracotta"
      aria-label={`Rated ${rounded} out of 5`}
      role="img"
    >
      {rateList.map((item) => (
        <Star
          key={item}
          className="size-4"
          aria-hidden="true"
          fill={item <= rounded ? 'currentColor' : 'none'}
        />
      ))}
    </span>
  );
}
