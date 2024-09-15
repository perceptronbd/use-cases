import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import {CartItem} from "@/interfaces/cartItem";
import {RootState} from "@/store";
import {useGetCartQuery} from "@/store/api/cart";
import {useSelector} from "react-redux";

export function CartList() {
	const {data: cartData = [], isLoading} = useGetCartQuery();

	const localItems = useSelector((state: RootState) => state.cart.items);

	// Combine the fetched data and local items
	const allItems = [...cartData, ...localItems];

	return isLoading ? (
		<div>Loading...</div>
	) : (
		<Table className='border border-white rounded-xl'>
			<TableCaption>A list of your recent invoices.</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead className='w-[100px]'>Invoice</TableHead>
					<TableHead>Status</TableHead>
					<TableHead className='text-right'>Amount</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{allItems!.map((i: CartItem) => (
					<TableRow key={i.item}>
						<TableCell className='font-medium'>{i.item}</TableCell>
						<TableCell>{i.status}</TableCell>
						<TableCell className='text-right'>{i.amount}</TableCell>
					</TableRow>
				))}
			</TableBody>
			<TableFooter>
				<TableRow>
					<TableCell colSpan={3}>Total</TableCell>
					<TableCell className='text-right'>$2,500.00</TableCell>
				</TableRow>
			</TableFooter>
		</Table>
	);
}
