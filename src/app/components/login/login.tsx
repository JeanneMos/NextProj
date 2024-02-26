import React from "react";
import { Button } from "@app//ui-kit/button";
import { Input } from "@app//ui-kit/input";
import classes from "./login.module.css";

interface LoginFormProps {
	onSubmit: () => void;
}

export function LoginForm({ onSumbit }) {
	return (
		<form onSubmit={onSumbit} className={classes.form}>
			<Input type="email" name="email" label="Email" id="email" required />
			<Input
				label="Mot de passe"
				id="password"
				type="password"
				name="password"
				required
			/>
			<Button customClass={classes.formSubmit} type="submit">
				Connexion
			</Button>
		</form>
	);
}
