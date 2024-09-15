"use client";
import {useSelector} from "react-redux";
import {useRouter} from "next/navigation";
import {useEffect} from "react";
import {RootState} from "@/store";

const withAuth = (WrappedComponent: React.ComponentType) => {
	const AuthenticatedComponent = () => {
		const isAuthenticated = useSelector(
			(state: RootState) => state.auth.isAuthenticated
		);
		const router = useRouter();

		useEffect(() => {
			if (!isAuthenticated) {
				router.push("/login");
			}
		}, [isAuthenticated, router]);

		return isAuthenticated ? <WrappedComponent /> : null;
	};

	return AuthenticatedComponent;
};

export default withAuth;
