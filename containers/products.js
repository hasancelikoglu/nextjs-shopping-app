import ProductCard from "@/components/product-card";

export default function ProductsPage() {
	return (
		<div className="w-full">
			<div className="grid grid-cols-3">
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
			</div>
		</div>
	);
}
