import { useSelector } from "react-redux";

export default function CartTotal() {
	const { cartTotal } = useSelector((state) => state.cart);
	return (
		<div className="w-[400px] h-52 shadow-xl p-5 flex flex-col justify-between gap-y-10">
			<div>
				<p className="text-xl font-normal">Tutar: {cartTotal.toFixed(2)} ₺</p>
			</div>
			<button className="bg-black text-white p-2 rounded">
				Alışverişi tamamla
			</button>
		</div>
	);
}
