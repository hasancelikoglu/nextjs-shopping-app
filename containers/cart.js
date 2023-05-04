"use client";
import CartProduct from "@/components/cart-product";
import CartTotal from "@/components/cart-total";
import { useSelector } from "react-redux";

export default function CartPage() {
	const { cart } = useSelector((state) => state.cart);

	return (
		<div className="flex px-12 gap-x-10">
			<div className="w-full h-auto flex flex-col">
				<h2 className="text-lg mb-3">Sepet ({cart.length})</h2>
				<div>
					{cart.map((product) => (
						<CartProduct key={product.id} product={product} />
					))}
				</div>
			</div>
			<CartTotal />
		</div>
	);
}
