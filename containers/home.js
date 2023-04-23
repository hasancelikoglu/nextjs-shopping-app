import ProductCard from "@/components/product-card";
import Sidebar from "@/components/sidebar";
import ProductsPage from "./products";

export default function HomePage() {
	return (
		<div className="flex">
			<Sidebar />
			<ProductsPage />
		</div>
	);
}
