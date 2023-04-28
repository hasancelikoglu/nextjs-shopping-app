export default function CartTotal() {
	return (
		<div className="w-[500px] shadow-xl p-5 flex flex-col justify-between gap-y-10">
			<div>
				<h3 className="mb-3">Seçili ürün (1)</h3>
				<p className="text-2xl font-normal">Tutar: 1.979,90</p>
			</div>
			<button className="bg-black text-white p-2 rounded">
				Alışverişi tamamla
			</button>
		</div>
	);
}
