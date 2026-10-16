import {
  createRootRouteWithContext,
  Outlet,
  HeadContent,
} from '@tanstack/react-router';
import type { QueryClient } from '@tanstack/react-query';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { Toaster } from '@/components/ui/sonner';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const RootLayout = () => (
  <>
    <div className="flex flex-col min-h-screen">
      <HeadContent />
      <Header />
      <div className="flex-1 pb-10">
        <Outlet />
      </div>
      <Footer />
      <Toaster />
    </div>
    <TanStackRouterDevtools />
  </>
);

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  { component: RootLayout },
);
