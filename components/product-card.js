import Image from "next/image";

export default function ProductCard({ product }) {
	return (
		<div className="m-3 cursor-pointer hover:scale-105 transition-all">
			<div className="relative h-[350px]">
				<Image src={product.productImage} fill className="object-cover" />
			</div>
			<div className="mt-3">
				<p className="text-xs opacity-60">Stok: 32</p>
			</div>
			<div className="mt-3 flex justify-between">
				<div>
					<h2>{product.title}</h2>
					<p className="opacity-60 font-light text-sm">{product.subtitle}</p>
				</div>
				<div>{product.price} ₺</div>
			</div>
			<button className="text-white bg-black p-2 w-full mt-3">
				Sepete ekle
			</button>
		</div>
	);
}
