import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {CartItem} from "@/interfaces/cartItem";

export const cartApiSlice = createApi({
	reducerPath: "cartApi",
	baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3000"}),
	tagTypes: ["Cart"], // Define tags to use for cache invalidation
	endpoints: (builder) => ({
		getCart: builder.query<CartItem[], void>({
			query: () => "/cartData.json",
			providesTags: ["Cart"],
		}),
		addToCart: builder.mutation({
			query: (newItem: CartItem) => ({
				url: "/cartData.json",
				method: "POST",
				body: newItem,
			}),
			invalidatesTags: ["Cart"],
		}),
	}),
});

export const {useGetCartQuery, useAddToCartMutation} = cartApiSlice;
