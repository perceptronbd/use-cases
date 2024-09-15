// AddToCart.tsx
import React, {useState} from "react";
import {CartItem} from "@/interfaces/cartItem";
import {addToCart} from "@/store/slices/cartSlice";
import {useDispatch} from "react-redux";
import {Button} from "../ui/button";
import {Input} from "../ui/input";

export const AddToCart = () => {
	const [item, setItem] = useState<CartItem>({
		item: "",
		status: "",
		amount: 0,
	});

	const dispatch = useDispatch();

	// Handle form submission to add a new item to the cart
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		dispatch(addToCart(item)); // Add new item to local Redux state
		setItem({item: "", status: "", amount: 0}); // Reset form after submission
	};

	return (
		<div className='w-full border border-white rounded-xl p-4'>
			<form
				onSubmit={handleSubmit}
				className='flex flex-col space-y-4'
			>
				<Input
					type='text'
					name='item'
					value={item.item}
					onChange={(e) => setItem({...item, item: e.target.value})}
					placeholder='Item Name'
					className='border p-2'
				/>
				<Input
					type='text'
					name='status'
					value={item.status}
					onChange={(e) => setItem({...item, status: e.target.value})}
					placeholder='Status'
					className='border p-2'
				/>
				<Input
					type='number'
					name='amount'
					value={item.amount}
					onChange={(e) => setItem({...item, amount: +e.target.value})}
					placeholder='Amount'
					className='border p-2'
				/>
				<Button type='submit'>Add to Cart</Button>
			</form>
		</div>
	);
};
