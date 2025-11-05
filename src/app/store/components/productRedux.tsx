"use client";

import type { RootState } from '@/context/store'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, CartItem, decreaseQuantity } from '@/context/productManagment'
import { CiShop } from "react-icons/ci";
import { useState } from 'react';
import { useEffect } from 'react';


interface props {
  items: CartItem
}

export default function productRedux({ items }: props) {
  const productInCart = useSelector((state: RootState) =>
    state.productM?.items?.find((i) => i.id === items.id)
  )

  const quantity = productInCart ? productInCart.quantity : 0
  const dispatch = useDispatch()
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className=' border-2 border-slate-600 p-5 rounded-lg'>
      <h2>Buy item</h2>
      <div className='flex items-center gap-5'>
        <button
          className='cursor-pointer hover:-translate-y-1.5 duration-300 hover:opacity-70 bg-green-700 px-4 py-2  rounded-lg'
          aria-label="Increment value"
          onClick={() => dispatch(addToCart(items))}
        >
          +
        </button>
        <div className="flex items-center gap-1">
          <CiShop className="text-2xl" />
          <span>{quantity}</span>
        </div>
        <button
          className='cursor-pointer hover:-translate-y-1.5 duration-300 hover:opacity-70 bg-red-700 px-4 py-2  rounded-lg'
          aria-label="Decrement value"
          onClick={() => dispatch(decreaseQuantity(items.id))}
        >
          -
        </button>
      </div>
    </div>
  )
}