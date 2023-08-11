"use client";
import React from 'react';
import Image from "next/image";
import { useSelector, useDispatch } from 'react-redux';
import PriceFormat from "../components/PriceFormat";
import { LuMinus, LuPlus } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { SiMediamarkt } from "react-icons/si";
import Link from "next/link";
import {
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
} from "../../redux/slice/cartSlice";

const Cart = () => {

    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const getTotalPrice = () => {
        return cart.reduce(
            (accumulator, item) => accumulator + item.quantity * item.price,
            0
        );
    };

    return (

        <div className="max-w-screen-2xl mx-auto px-6 grid grid-cols-5 gap-10 py-4">
            {cart.length === 0 ?
                (
                    <div className="bg-white h-64 col-span-5 flex flex-col items-center justify-center py-5 rounded-lg shadow-lg">
                        <h1 className="text-lg font-medium">Your cart is empty!</h1>
                        <Link href={"/products"}>
                            <button className="w-52 h-10 bg-amazon_blue text-white rounded-lg text-sm font-semibold hover:bg-amazon_yellow hover:text-black">
                                Go To Shopping
                            </button>
                        </Link>
                    </div>
                ) : (
                    <>
                        <div className="bg-white col-span-4 p-4 rounded-lg">
                            <div className="flex items-center justify-between border-b-[1px] border-b-gray-400 pb-1">
                                <p className="text-2xl font-semibold text-amazon_blue">
                                    Shopping Cart
                                </p>
                                <p className="text-lg font-semibold text-amazon_blue">Subtotal </p>
                            </div>
                            <div className="pt-2 flex flex-col gap-2">
                                {cart.map((item) => (
                                    <div className="bg-gray-100 rounded-lg flex items-center gap-4">
                                        <Image
                                            className="object-cover"
                                            width={150}
                                            height={150}
                                            src={item.image}
                                            alt="productImage"
                                        />
                                        <div className="flex items-center px-2 gap-4">
                                            <div className="flex flex-col gap-1 w-[85%]">
                                                <p className="text-lg font-semibold text-amazon_blue">{item.title}</p>
                                                <p className="text-sm text-gray-600">{item.description}</p>
                                                <p className="text-sm text-gray-600">
                                                    Unit Price{" "}
                                                    <span className="font-semibold text-amazon_blue">
                                                        <PriceFormat amount={item.price} />
                                                    </span>
                                                </p>
                                                <div className="flex items-center gap-6">
                                                    <div className="flex items-center mt-1 justify-between border border-gray-300 px-4 py-1 rounded-full w-28 shadow-lg shadow-gray-300">
                                                        <span
                                                            onClick={() =>
                                                                dispatch(incrementQuantity(item._id))
                                                            }
                                                            className="w-6 h-6 flex items-center justify-center rounded-full text-base bg-transparent hover:bg-gray-300 cursor-pointer decoration-purple-300"
                                                        >
                                                            <LuPlus />
                                                        </span>
                                                        <span>{item.quantity}</span>
                                                        <span
                                                            onClick={() =>
                                                                dispatch(decrementQuantity(item._id))
                                                            }
                                                            className="w-6 h-6 flex items-center justify-center rounded-full text-base bg-transparent hover:bg-gray-300 cursor-pointer decoration-purple-300"
                                                        >
                                                            <LuMinus />
                                                        </span>
                                                    </div>
                                                    <div
                                                        onClick={() => dispatch(removeFromCart(item._id))}
                                                        className="flex items-center text-sm font-medium text-gray-400 hover:text-red-600 cursor-pointer duration-300"
                                                    >
                                                        <IoMdClose className="mt-[2px]" /> <p>remove</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-lg font-semibold text-amazon_blue w-[250px] h-[120px] flex justify-center items-center border-l-2 border-l-amazone_light">
                                                <PriceFormat amount={item.price * item.quantity} />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white h-64 col-span-1 p-4 rounded-lg flex items-center justify-center">
                            <div className="flex flex-col gap-4">
                                <div className="flex gap-2">
                                    <span className="bg-green-600 rounded-full p-1 h-6 w-6 text-sm text-white flex items-center justify-center mt-1">
                                        <SiMediamarkt />
                                    </span>
                                    <p className="text-sm">
                                        Your order qualifies for FREE Shipping by Choosing this option at
                                        checkout. See details....
                                    </p>
                                </div>
                                <p className="flex items-center justify-between px-2 font-semibold">
                                    Total:{" "}
                                    <span className="font-bold text-xl">
                                        <PriceFormat amount={getTotalPrice()} />
                                    </span>
                                </p>
                             
                                    {/* <div className="flex flex-col items-center">
                                        <button
                                            onClick={handleCheckout}
                                            className="w-full h-10 text-sm font-semibold bg-amazon_blue text-white rounded-lg hover:bg-amazon_yellow hover:text-black duration-300"
                                        >
                                            Proceed to Buy
                                        </button>
                                    </div> */}
                              
                                    <div className="flex flex-col items-center">
                                        <button className="w-full h-10 text-sm font-semibold bg-amazon_blue bg-opacity-50 text-white rounded-lg cursor-not-allowed">
                                            Proceed to Buy
                                        </button>
                                        <p className="text-xs mt-1 text-red-500 font-semibold animate-bounce">
                                            Please login to continue
                                        </p>
                                    </div>
                            </div>
                        </div>
                    </>
                )

            }
        </div>

    )
}

export default Cart