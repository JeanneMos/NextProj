/** use server */
import { FormEvent, SyntheticEvent, useState } from "react";
import { useRouter } from "next/router";
import { LoginForm } from "@app//components/login";
import Head from "next/head";
import { login } from "../../utils/login";

const Title = () => (
	<Head>
		<title>Connexion</title>
	</Head>
);
export default function LoginPage() {
	const router = useRouter();
	const [serverResponse, setServerResponse] = useState<200 | 404 | 401>();

	const onLogin = async (
		e: SyntheticEvent,
		data: { email: string; password: string }
	) => {
		e.preventDefault();
		const response = await login(data);
		if (response.isAdmin) {
			router.push("/account");
		} else {
			setServerResponse(response.responseStatus);
		}
	};

	return (
		<>
			<Title />
			<h1>Connexion</h1>
			<LoginForm onSubmit={onLogin} responseServer={serverResponse} />
		</>
	);
}
