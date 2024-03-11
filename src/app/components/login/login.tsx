import React, { SyntheticEvent, useState } from "react";
import { Button } from "@app//ui-kit/button";
import { Input } from "@app//ui-kit/input";
import classes from "./login.module.css";

interface LoginFormProps {
	onSubmit: (e: SyntheticEvent, input: { [k: string]: string }) => void;
	responseServer?: 200 | 404 | 401;
}

export function LoginForm({ onSubmit, responseServer }: LoginFormProps) {
	const [input, inputChange] = useState({});

	const changeValue = (e) => {
		const newInput = { ...input, [e.target.name]: e.target.value };
		inputChange(newInput);
	};
	const submitForm = (e) => {
		onSubmit(e, input);
	};
	return (
		<form onSubmit={submitForm} className={classes.form}>
			{responseServer && responseServer === 404 && (
				<p className={classes.error}>Merci de vérifier vos identifiants</p>
			)}
			<Input
				type="email"
				name="email"
				label="Email"
				id="email"
				required
				changeValue={changeValue}
				autocomplete="email"
			/>
			<Input
				label="Mot de passe"
				id="password"
				type="password"
				name="password"
				required
				changeValue={changeValue}
				autocomplete="current-password"
			/>
			<Button customClass={classes.formSubmit} type="submit">
				Connexion
			</Button>
		</form>
	);
}
