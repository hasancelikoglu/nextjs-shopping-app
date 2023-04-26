import ProductCard from "@/components/product-card";
import store from "@/stores";

export default async function ProductsPage() {
	const products = store.getState().products.products;

	return (
		<div className="w-full">
			<div className="grid grid-cols-3">
				{products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</div>
	);
}
