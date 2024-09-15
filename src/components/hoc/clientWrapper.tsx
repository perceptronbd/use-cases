"use client";
import store from "@/store";
import {redirect, usePathname} from "next/navigation";
import {Provider} from "react-redux";

const ClientWrapper: React.FC<{children: React.ReactNode}> = ({children}) => {
	const pathname = usePathname();
	if (pathname === "/") {
		redirect("/login");
	}
	return <Provider store={store}>{children}</Provider>;
};
export default ClientWrapper;
