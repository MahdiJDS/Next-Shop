import { jsonType } from "@/types";
import { products } from "@/utils/GetAPI";
import React from "react";

interface IDtype {
  title: string;
}

export default function ProductID({ title }: IDtype) {
  const filter: jsonType[] = products.filter(
    (product: jsonType) => product.title == title
  );

  return (
    <div className="items-center justify-center w-[60%] flex">
      {filter.map((item) => (
         <div 
         key={item.id}
         className="flex flex-col items-center md:flex-row gap-3 border-2 rounded-lg p-3 border-slate-400 text-center bg-slate-900 hover:-translate-y-1 duration-300 cursor-pointer">
            <img
                src={item.img}
                alt="product image"
                className="mx-auto w-[300px] h-[200px] bg-cover rounded-lg"
            />
            {item.title}
            {item.description}
        </div>
      ))}
    </div>
  );
}
