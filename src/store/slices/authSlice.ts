import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface AuthState {
	isAuthenticated: boolean;
	username: string;
}

const initialState: AuthState = {
	isAuthenticated: false,
	username: "",
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		loginSuccess: (state, action: PayloadAction<string>) => {
			state.isAuthenticated = true;
			state.username = action.payload;
		},
		logout: (state) => {
			state.isAuthenticated = false;
			state.username = "";
		},
	},
});

export const {loginSuccess, logout} = authSlice.actions;
export default authSlice.reducer;
