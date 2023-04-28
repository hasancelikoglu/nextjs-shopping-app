import CartTotal from "@/components/cart-total";

export default function CartPage() {
	return (
		<div className="flex px-10">
			<div className="w-full h-auto">ürünler</div>
			<CartTotal />
		</div>
	);
}
