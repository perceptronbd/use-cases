import {CartItem} from "@/interfaces/cartItem";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		items: [] as CartItem[], // For locally added items
	},
	reducers: {
		addToCart: (state, action: PayloadAction<CartItem>) => {
			state.items.push(action.payload); // Add new item to the local state
		},
	},
});

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;
