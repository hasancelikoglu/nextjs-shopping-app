"use client";

import { useDispatch } from "react-redux";
import { actions } from "@/stores/cart";

export default function AddToCart({ product }) {
	const dispatch = useDispatch();

	const addToCartHandle = () => {
		dispatch(actions.addToCart({ ...product, quantity: 1 }));
	};

	return (
		<button
			onClick={addToCartHandle}
			className="text-white bg-black p-2 w-full mt-3"
		>
			Sepete ekle
		</button>
	);
}
