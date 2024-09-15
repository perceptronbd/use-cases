"use client";
import {AddToCart} from "@/components/cart/addToCart";
import {CartList} from "@/components/cart/cartList";
import withAuth from "@/components/hoc/withAuth";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";

const DashboardPage = () => {
	return (
		<section className='w-full h-screen flex justify-center pt-10'>
			<Tabs
				defaultValue='account'
				className='w-[1000px]'
			>
				<TabsList className='grid w-full grid-cols-2'>
					<TabsTrigger value='account'>Cart List</TabsTrigger>
					<TabsTrigger value='password'>Add to Cart</TabsTrigger>
				</TabsList>
				<TabsContent value='account'>
					<CartList />
				</TabsContent>
				<TabsContent value='password'>
					<AddToCart />
				</TabsContent>
			</Tabs>
		</section>
	);
};

export default withAuth(DashboardPage);
