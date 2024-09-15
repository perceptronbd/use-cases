import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import {cartApiSlice} from "./api/cart";
import cartSlice from "./slices/cartSlice";

const store = configureStore({
	reducer: {
		auth: authReducer,
		cart: cartSlice,
		[cartApiSlice.reducerPath]: cartApiSlice.reducer,
	},

	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(cartApiSlice.middleware);
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
