import Image from "next/image";

export default function ProductCard() {
	return (
		<div className="m-3 cursor-pointer hover:scale-105 transition-all">
			<div className="relative h-[350px]">
				<Image src="/image.webp" fill className="object-cover" />
			</div>
			<div className="mt-3">
				<p className="text-xs opacity-60">Stok: 32</p>
			</div>
			<div className="mt-3 flex justify-between">
				<div>
					<h2>Nike ACG</h2>
					<p className="opacity-60 font-light text-sm">
						Kısa Kollu Erkek Tişörtü
					</p>
				</div>
				<div>1.099,90 ₺</div>
			</div>
			<button className="text-white bg-black p-2 w-full mt-3">
				Sepete ekle
			</button>
		</div>
	);
}
