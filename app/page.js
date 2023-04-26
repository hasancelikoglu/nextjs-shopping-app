import HomePage from "@/containers/home";

import store from "@/stores";
import { getProducts } from "@/stores/products";

export default async function Home() {
	await store.dispatch(getProducts());
	return <HomePage />;
}
