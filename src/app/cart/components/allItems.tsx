"use client";

import { addToCart, decreaseQuantity } from "@/context/productManagment";
import { RootState } from "@/context/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function AllItems() {

    const dispatch = useDispatch()

    const allItems = useSelector((state: RootState) => state.productM.items);

    const totalPrice = useSelector((state: RootState) => state.productM.totalAmount)

    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <div className='w-[80vh] flex flex-col items-center gap-5'>
            {allItems.length === 0 ? (
                <p>Cart is empty🛒</p>
            ) : (
                allItems.map((item, i) => (
                    <div
                        key={i}
                        className="flex items-center gap-5 justify-between border-b border-gray-500 "
                    >
                        <div className="flex gap-5 p-4 items-center">
                            <img className="w-[25vh] rounded-lg" src={item.img} alt="img" />
                            <p className="font-bold text-xl text-purple-700">{item.name}</p>
                            <p className="text-sm font-extralight">quantity: {item.quantity}</p>
                            <p className="text-sm font-extralight">price: {item.price}</p>
                        </div>
                        <div className="felx items-center justify-center">
                            <p className="text-green-400">
                                total: {item.price * item.quantity}
                            </p>
                            <div className='flex items-center gap-5'>
                                <button
                                    className='cursor-pointer duration-300 hover:opacity-70 bg-green-700 px-2 py-1  rounded-lg'
                                    aria-label="Increment value"
                                    onClick={() => dispatch(addToCart(item))}
                                >
                                    +
                                </button>

                                <button
                                    className='cursor-pointer duration-300 hover:opacity-70 bg-red-700 px-2 py-1  rounded-lg'
                                    aria-label="Decrement value"
                                    onClick={() => dispatch(decreaseQuantity(item.id))}
                                >
                                    -
                                </button>
                            </div>
                        </div>


                    </div>

                ))
            )}
            <div className="border border-t-0 px-10 py-4">
                <div className="flex justify-between w-full font-medium text-lg">
                    <p>Total Price:</p>
                    <p>{totalPrice.toLocaleString()} $</p>
                </div>
            </div>
        </div>
    );
}
