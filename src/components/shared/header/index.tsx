import Link from 'next/link';
import { Search, User, Bell, ShoppingCart, Menu } from 'lucide-react';

export default function Header() {

    return (

        <header className="h-16 border-b border-border flex items-center justify-between lg:justify-around
        px-5 lg:px-0">

            <Logo/>
            
            <div className='hidden md:flex lg:flex space-x-6 h-full'>

                <NavLink href="/">Home</NavLink>
                <NavLink href="/">Shop</NavLink>
                <NavLink href="/">Deals</NavLink>
                <NavLink href="/">About</NavLink>
                <NavLink href="/">Contact</NavLink>

            </div>
            
            <SearchBar/>

            <div className='hidden md:flex lg:flex space-x-6'>

                <User size={20} className='cursor-pointer'/>
                <Bell size={20} className='cursor-pointer'/>
                <ShoppingCart size={20} className='cursor-pointer'/>

            </div>

            <Menu size={20} className='block md:hidden lg:hidden'/>

        </header>

    )

}

function Logo() {

    return (

        <Link className="flex md:hidden lg:flex items-center space-x-3.5" href="/">

            <Cross/>

            <h1 className="uppercase text-lg border-b border-text-primary/25 py-0.5">T e n e b r a</h1>

            <Cross/>

        </Link>

    )

}

function Cross() {

    return (

        <h1 className="text-2xl">†</h1>

    )

}

interface NavLinkProps {

    href: string
    children: string

}

function NavLink(props: NavLinkProps) {

    return (

        <Link href={props.href} className='h-full flex items-center border-b-2 border-background hover:border-primary'>
            
            {props.children}
            
        </Link>

    )

}

function SearchBar() {

    return (

        <form className='hidden md:flex lg:flex items-center bg-foreground py-1.5 px-2.5 space-x-1.5 rounded border 
        border-border hover:bg-border md:w-2/6 lg:w-1/4'>

            <input type="text" placeholder='Search' className='bg-transparent outline-none placeholder:text-text-secondary w-full'/>
            <Search size={18} className='text-text-secondary hover:text-primary cursor-pointer'/>

        </form>

    )

}