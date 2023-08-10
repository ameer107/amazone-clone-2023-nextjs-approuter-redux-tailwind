import Image from 'next/image';
import logo from '../../../../public/Images/logo.png';
import Cart from "../../../../public/Images/cartIcon.png";
import { BiCaretDown } from 'react-icons/bi';
import { HiOutlineSearch } from 'react-icons/hi';
import { SlLocationPin } from 'react-icons/sl';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const Header = () => {

    // const cartItems = useSelector(state => state.cart);

    // Calculate the total quantity of items in the cart
    // const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <>
            <div className='w-full h-20 bg-amazon_blue text-lighttext sticky top-0 z-50'>
                <div className='w-full h-full mx-auto inline-flex items-center justify-between gap-1 mdl:gap-3 px-4'>
                    {/* Amazone Logo */}
                    <Link href='/' className='px-2 border border-transparent hover:border-white cursor-pointer duration-300 flex items-center justify-center h-[70%]'>
                        <Image className="w-28 object-cover mt-1" src={logo} alt='mainLogo' />
                    </Link>
                    {/* Delivery */}
                    <div className='px-2 border border-transparent hover:border-white cursor-pointer duration-300 items-center justify-center h-[70%] hidden xl:inline-flex gap-1'>
                        <SlLocationPin />
                        <div className='text-xs'>
                            <p>Deliver to</p>
                            <p className='text-white font-bold uppercase'>USA</p>
                        </div>
                    </div>
                    {/* Search Bar */}
                    <div className='flex-1 h-10 hidden md:inline-flex items-center justify-between relative'>
                        <input className='w-full h-full rounded-md px-2 placeholder:text-sm text-base text-black border-[3px] border-transparent outline-none focus-visible:border-amazon_yellow ' type="text" placeholder='Search For Products' />
                        <span className='w-12 h-full bg-amazon_yellow text-black flex items-center justify-center text-2xl absolute right-0 rounded-tr-md rounded-br-md'>
                            <HiOutlineSearch />
                        </span>
                    </div>
                    {/* signIn */}
                    <div className='text-xs text-gray-100 flex flex-col justify-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%]'>
                        <p>Hello, Sign In</p>
                        <p className='text-white font-bold flex items-center'>
                            Account & Lists {" "}
                            <span>
                                <BiCaretDown />
                            </span>
                        </p>
                    </div>
                    {/* favourites */}
                    <div className='text-xs text-gray-100 flex flex-col justify-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%]'>
                        <p>Marked</p>
                        <p className='text-white font-bold flex items-center'>& Favourites</p>
                    </div>
                    {/* Cart Basket */}
                    <Link href='/cart' className='flex items-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] relative'>
                        <Image className='w-auto object-cover h-8' src={Cart} alt='Cart Image' />
                        <p className='text-white font-bold text-xs mt-3'>Cart</p>
                        <p className='font-sm absolute top-1 left-[29px] text-amazon_yellow font-semibold'>0</p>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Header