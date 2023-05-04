"use client";

import store from "@/stores";
import { Provider } from "react-redux";

export default function StoreProvider({ children }) {
	return <Provider store={store}>{children}</Provider>;
}
