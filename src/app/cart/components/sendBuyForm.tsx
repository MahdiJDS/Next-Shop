"use client";

import { buyType } from "@/types";
import { sendBuyData } from "@/utils/sendBuy";
import { useFormState, useFormStatus } from "react-dom";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "@/context/productManagment";

interface dataProp {
    data: buyType;
}

export default function CartPage({ data }: dataProp) {
    const [state, formAction] = useFormState(sendBuyData, {
        success: false,
        message: "",
    });

    const dispatch = useDispatch()

    const { pending } = useFormStatus();

    useEffect(() => {
        if (state.message) {
            state.success ? toast.success(state.message) && dispatch(clearCart()) : toast.error(state.message);
        }
    }, [state]);



    return (
        <form action={formAction}>
            <input type="hidden" name="data" value={JSON.stringify(data)} />
            <button
                type="submit"
                disabled={pending}
                className={`px-4 py-2 rounded-md text-white ${pending ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
                    }`}
            >
                {pending ? "Sending..." : "Buy"}
            </button>
        </form>
    );
}
