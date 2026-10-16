import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import type { MouseEvent } from 'react';

/** Props for `PaginationControls`. */
interface PaginationControlsProps {
  /** The page that is shown now, starting at 1. */
  currentPage: number;
  /** How many pages there are in total. */
  totalPages: number;
  /** Called with the new page number when the user clicks a page, Previous or Next. */
  onPageChange: (page: number) => void;
}

/**
 * Page buttons for the product list: Previous, one button per page, and Next.
 *
 * Only shows the buttons. The parent decides what happens when the page changes.
 * Previous is disabled on the first page, and Next on the last.
 */
export default function PaginationControls({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationControlsProps) {
  const pageNumbers: number[] = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const goToPage = (event: MouseEvent<HTMLAnchorElement>, page: number) => {
    event.preventDefault();
    onPageChange(page);
  };

  if (totalPages <= 1) {
    return null;
  }

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className={
              currentPage === 1 ? 'pointer-events-none opacity-50' : ''
            }
            aria-disabled={currentPage === 1}
            onClick={(e) => goToPage(e, currentPage - 1)}
            href={'#'}
          />
        </PaginationItem>
        {pageNumbers.map((page: number) => (
          <PaginationItem key={page}>
            <PaginationLink
              isActive={currentPage === page}
              onClick={(e) => goToPage(e, page)}
              href={'#'}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            className={
              currentPage === totalPages ? 'pointer-events-none opacity-50' : ''
            }
            aria-disabled={currentPage === totalPages}
            onClick={(e) => goToPage(e, currentPage + 1)}
            href={'#'}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
