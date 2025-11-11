import Link from "next/link"
import { CiShop } from "react-icons/ci";
import CartLink from './cartLink'

const nav = [
    {
        title: 'Home',
        path: '/'
    },

    {
        title: 'Store',
        path: '/store'
    },

]


export default function Navbar() {
    return (
        <header className=" px-10 py-6 border-b-1 border-slate-500 ">
            <div className="flex justify-between items-center ">
               <div className="flex items-center gap-1">
                <CiShop  className="text-2xl"/>
                <h1 className="text-xl ">Next-Shop</h1>
               </div>
                <div className="flex items-center gap-5">
                    {nav.map((n) => (
                        <Link
                        key={n.path}
                        className="hover:-translate-y-0.5 duration-300 hover:opacity-75"
                         href={n.path}>{n.title}</Link>
                    ))}
                    <CartLink />
                </div>
            </div>
        </header>
    )
}
