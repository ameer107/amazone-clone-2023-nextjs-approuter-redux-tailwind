"use client";
import Image from "next/image";
import { HiShoppingCart } from "react-icons/hi"
import { FaHeart } from "react-icons/fa"
import PriceFormat from "../components/PriceFormat";
import { addToCart } from '../../redux/slice/cartSlice'
import { useDispatch } from 'react-redux';
import { useState, useEffect } from "react";


const Products = () => {


    const [productData, setProductData] = useState([]);

    useEffect(() => {
        const fetchProductData = async () => {
            try {
                const response = await fetch("https://fakestoreapiserver.reactbd.com/tech");
                const productList = await response.json();
                setProductData(productList);
            } catch (error) {
                console.error("Error fetching product data:", error);
            }
        };

        fetchProductData();
    }, []);

    const dispatch = useDispatch();

    return (
        <>
            <div className="w-full px-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-5 mb-5">
                {
                    productData.map((items) => {
                        return (
                            <div key={items._id} className="bg-white w-full text-black p-4 border border-gray-300 rounded-lg group overflow-hidden">
                                <div className="w-full h-[260px] relative">
                                    <Image
                                        className="w-full h-full object-cover scale-90 hover:scale-100 transition-transform duration-300"
                                        width={300} height={300} src={items.image} alt="productImage" />
                                    <div className="w-12 h-24 absolute bottom-10 right-0 border-[1px] border-gray-300 rounded-md bg-white flex flex-col translate-x-20 group-hover:translate-x-0 transition-transform duration-300">
                                        <span
                                            onClick={() => dispatch(addToCart(items))}

                                            className="w-full h-full border-b-[1px] border-gray-400 rounded-t-md flex items-center justify-center text-xl bg-transparent hover:bg-amazon_yellow cursor-pointer duration-300">
                                            <HiShoppingCart />
                                        </span>
                                        <span
                                            className="w-full h-full border-b-[1px] border-gray-400 rounded-b-md flex items-center justify-center text-xl bg-transparent hover:bg-amazon_yellow cursor-pointer duration-300">
                                            <FaHeart />
                                        </span>
                                    </div>
                                    {
                                        items.isNew && (
                                            <p className="absolute top-0 right-0 text-amazon_blue font-medium text-xs tracking-wide animate-bounce">
                                                !Save <PriceFormat amount={items.oldPrice - items.price} />
                                            </p>
                                        )
                                    }
                                </div>
                                <hr />
                                <div className="px-3 py-4 flex flex-col gap-1">
                                    <p className="text-xs text-gray-500 tracking-wide">
                                        {items.category}
                                    </p>
                                    <p className="text-base font-medium">
                                        {items.title}
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <span className="text-sm line-through">
                                            <PriceFormat amount={items.oldPrice} />
                                        </span>
                                        <span className="font-semibold text-amazon_blue">
                                            <PriceFormat amount={items.price} />
                                        </span>
                                    </p>
                                    <p className="text-xs text-gray-600">
                                        {items.description.substring(0, 120)}
                                    </p>
                                    <button
                                        onClick={() => dispatch(addToCart(items))}

                                        className="h-10 font-medium bg-amazon_blue text-white rounded-md hover:bg-amazon_yellow hover:text-black mt-2 duration-300">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Products