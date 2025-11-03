import { jsonType } from "@/types"
import CartProduct from "@/components/cartProduct"
interface prompsType {
    lists: jsonType[]
}

export default function productsList({ lists }: prompsType) {
    return (
        <div className="flex flex-col justify-center items-center gap-7">
            <h1 className="text-3xl font-extrabold text-cyan-600">product List</h1>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {lists.map((list) => (
                    <li key={list.id}>
                        <CartProduct img={list.img} title={list.title} />
                    </li>
                ))}
            </ul>
        </div>

    )
}
