import { FormEvent } from "react";
import { useRouter } from "next/router";
import { LoginForm } from "@app//components/login";
import Head from "next/head";

export const getStaticProps = (context) => {
	return {
		props: {},
	};
};

const Title = () => (
	<Head>
		<title>Connexion</title>
	</Head>
);
export default function LoginPage() {
	const router = useRouter();

	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);
		const email = formData.get("email");
		const password = formData.get("password");

		const response = await fetch("/api/auth/login", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ email, password }),
		});

		if (response.ok) {
			router.push("/profile");
		} else {
			// Handle errors
		}
	}

	return (
		<>
			<Title />
			<h1>Connexion</h1>
			<LoginForm onSumbit={handleSubmit} />
		</>
	);
}
