import store from "@/stores";
import { actions } from "@/stores/cart";
import Image from "next/image";
import { IoTrashOutline } from "react-icons/io5";

export default function CartProduct({ product }) {
	return (
		<div className="h-48 drop-shadow shadow flex relative mb-5">
			<div className="relative w-1/5 h-full">
				<Image
					src={product.productImage}
					fill
					className="object-cover"
					alt={product.title}
				/>
			</div>
			<div className="ml-2 p-5 flex flex-col justify-between">
				<div>
					<h2 className="text-xl">{product.title}</h2>
					<p className="text-sm opacity-60"> {product.subtitle} </p>
				</div>
				<p>
					{product.price} ₺ x {product.quantity}
				</p>
			</div>
			<div className="p-5 absolute right-0 flex flex-col h-full justify-between items-end">
				<button>
					<IoTrashOutline size={20} />
				</button>
				<div className="flex items-center gap-x-2">
					<div className="flex items-center gap-x-2">
						<label htmlFor="quantity">Adet:</label>
						<input
							type="number"
							className="w-10 text-center shadow"
							defaultValue={product.quantity}
							min={1}
							onChange={(e) =>
								store.dispatch(
									actions.setQuantity({
										product,
										quantity: parseInt(e.target.value),
									})
								)
							}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
