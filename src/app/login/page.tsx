"use client";

import {useState} from "react";
import {useDispatch} from "react-redux";
import {loginSuccess} from "../../store/slices/authSlice";
import {useRouter} from "next/navigation";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";

const LoginPage = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const dispatch = useDispatch();
	const router = useRouter();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		// Mock API call
		const response = await fetch("/loginData.json");
		const data = await response.json();

		if (username === data.username && password === data.password) {
			dispatch(loginSuccess(username));
			router.push("/dashboard"); // Navigate to dashboard after login
		} else {
			setError("Invalid credentials");
		}
	};

	return (
		<section className='w-full h-screen flex justify-center items-center'>
			<div className=' card w-96 p-10 bg-white'>
				<h1 className='card-title text-black pb-2'>Login</h1>
				<form onSubmit={handleSubmit}>
					<Input
						type='text'
						value={username}
						className='my-2 text-black'
						placeholder='username'
						onChange={(e) => setUsername(e.target.value)}
						required
					/>
					<Input
						type='password'
						value={password}
						className='my-2 text-black'
						placeholder='password'
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
					{error && <p style={{color: "red"}}>{error}</p>}
					<Button type='submit'>Login</Button>
				</form>
			</div>
		</section>
	);
};

export default LoginPage;
