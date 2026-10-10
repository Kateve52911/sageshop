import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { Toaster } from "@/components/ui/sonner"
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const RootLayout = () => (
    <>
        <div className="flex flex-col min-h-screen">
            <Header/>
            <hr />
            <div className="flex-1 pt-30 pb-10">
                <Outlet />
            </div>
            <Footer/>
            <Toaster />
        </div>
        <TanStackRouterDevtools />
    </>
)

export const Route = createRootRoute({ component: RootLayout })