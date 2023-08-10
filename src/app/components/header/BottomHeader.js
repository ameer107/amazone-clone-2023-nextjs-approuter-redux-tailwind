import { LuMenu } from 'react-icons/lu'
import Link from 'next/link'

const BottomHeader = () => {
    return (
        <div className='w-full h-10 flex items-center px-2 bg-amazone_light text-white'>
            <p className='h-8 flex gap-1 items-center px-2 border border-transparent hover:border-white duration-300 cursor-pointer'>
                <LuMenu className="text-xl" />All
            </p>
            <Link href="/products" className='hidden md:inline-flex h-8 items-center px-2 border border-transparent hover:border-white duration-300 cursor-pointer ml-1'>
               All Products
            </Link>
            <p className='hidden md:inline-flex h-8 items-center px-2 border border-transparent hover:border-white duration-300 cursor-pointer ml-1'>
                Customer Services
            </p><p className='hidden md:inline-flex h-8 items-center px-2 border border-transparent hover:border-white duration-300 cursor-pointer ml-1'>
                Registery
            </p><p className='hidden md:inline-flex h-8 items-center px-2 border border-transparent hover:border-white duration-300 cursor-pointer ml-1'>
                Gift Cards
            </p><p className='hidden md:inline-flex h-8 items-center px-2 border border-transparent hover:border-white duration-300 cursor-pointer ml-1'>
                Sell
            </p><p className='hidden md:inline-flex h-8 items-center px-2 text-amazon_yellow hover:text-red-800 border border-transparent hover:border-red-600 duration-300 cursor-pointer ml-1'>
                Sign Out
            </p>
        </div>
    )
}

export default BottomHeader