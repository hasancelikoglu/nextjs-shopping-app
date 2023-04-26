import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
	products: [],
};

export const getProducts = createAsyncThunk(
	"products/getProducts",
	async () => {
		const response = await fetch("http://localhost:3001/products", {
			cache: "no-store",
		});
		const data = await response.json();

		return data;
	}
);

export const { reducer, actions } = createSlice({
	name: "products",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getProducts.fulfilled, (state, action) => {
			state.products = action.payload;
		});
	},
});
