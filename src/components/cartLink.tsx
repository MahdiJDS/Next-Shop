"use client";

import type { RootState } from '@/context/store'
import Link from "next/link";
import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";

export default function cartLink() {


    const totalItems = useSelector((state: RootState) =>
        state.productM.items.reduce((total, item) => total + item.quantity, 0)
    );

    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;



    return (
        <div className='relative'>
            <Link
                href='/cart'
                className=" hover:-translate-y-0.5 duration-300 hover:opacity-75 px-4 py-2 bg-cyan-500 rounded-lg"
            >cart</Link>
            <span className='absolute -top-3 p-0.5 -right-2 text-sm bg-red-800 rounded-full'>{totalItems}</span>
        </div>
    )
}
