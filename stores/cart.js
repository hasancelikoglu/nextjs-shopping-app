import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cart: [],
	cartTotal: 0,
};

export const { reducer, actions } = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const isAdded = state.cart.find((p) => p.id === action.payload.id);
			const price = parseFloat(
				action.payload.price.replace(".", "").replace(",", ".")
			);
			if (isAdded) {
				isAdded.quantity++;
			} else {
				state.cart = [...state.cart, action.payload];
			}

			state.cartTotal += price;
		},
		setQuantity: (state, action) => {
			const product = state.cart.find(
				(p) => p.id === action.payload.product.id
			);
			const price = parseFloat(
				action.payload.product.price.replace(".", "").replace(",", ".")
			);
			if (product.quantity > action.payload.quantity) {
				state.cartTotal -= price;
			} else {
				state.cartTotal += price;
			}
			product.quantity = action.payload.quantity;
		},
		removeFromCart: (state, action) => {
			const price = parseFloat(
				action.payload.price.replace(".", "").replace(",", ".")
			);
			state.cartTotal -= price * action.payload.quantity;
			state.cart = state.cart.filter((p) => p.id !== action.payload.id);
		},
	},
});
