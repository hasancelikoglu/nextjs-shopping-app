import { configureStore } from "@reduxjs/toolkit";

import { reducer as productsReducer } from "./products";
import { reducer as cartReducer } from "./cart";

const store = configureStore({
	reducer: {
		products: productsReducer,
		cart: cartReducer,
	},
});

export default store;
