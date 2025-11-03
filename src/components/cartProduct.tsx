import Link from "next/link"

interface cartProps {
    img: string
    title: string
}

export default function cartProduct({ img, title }: cartProps) {
    return (
        <Link href={`/store/${title}`} className="flex flex-col gap-3 border-2 rounded-lg p-3 border-slate-400 text-center bg-slate-900 hover:-translate-y-2 hover:opacity-75 duration-300 cursor-pointer">
            <img
                src={img}
                alt="product image"
                className="mx-auto w-[200px] h-[200px] bg-cover rounded-lg"
            />
            {title}
        </Link>
    )
}
