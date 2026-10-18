import { Item, ItemContent, ItemMedia, ItemTitle } from '@/components/ui/item';
import { Spinner } from '@/components/ui/spinner';

/**
 * Loading message with a spinner.
 * Shown while data is being fetched from the API.
 */
export default function LoadingSpinner() {
  return (
    <div className="flex w-full max-w-xs mx-auto my-10 flex-col gap-4">
      <Item variant="muted">
        <ItemMedia>
          <Spinner />
        </ItemMedia>
        <ItemContent>
          <ItemTitle className="line-clamp-1">Loading items...</ItemTitle>
        </ItemContent>
      </Item>
    </div>
  );
}
