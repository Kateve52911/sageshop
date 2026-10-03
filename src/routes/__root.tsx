import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { ShoppingBasket } from 'lucide-react'

const RootLayout = () => (
    <>
        <div className="p-2 flex justify-between gap-2">
            <Link to="/" className=" font-serif text-5xl text-ink p-2 " search={{ filter: undefined, page: 1 }}>
                SageShop
            </Link>{' '}
            <div className="flex justify-evenly gap-2 content-center p-4 ">
                <Link to="/" search={{ filter: undefined, page: 1 }} className="[&.active]:font-bold">
                Home
            </Link>{' '}
                <Link to="/cart" className="[&.active]:font-bold">
                    <ShoppingBasket></ShoppingBasket>
                </Link>
            </div>
        </div>
        <hr />
        <Outlet />
        <TanStackRouterDevtools />
    </>
)

export const Route = createRootRoute({ component: RootLayout })