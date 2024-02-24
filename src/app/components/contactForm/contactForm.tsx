import React from "react";
import { Input } from "../../ui-kit/input";
import { Button } from "@app//ui-kit/button";
import classes from "./contactForm.module.css";

export function ContactForm() {
	return (
		<form noValidate>
			<Input
				id="firstName"
				label="Prénom"
				customClass="input-name"
				data-testid="input-firstname"
				name="firstName"
			/>
			<Input
				id="lastName"
				label="Nom"
				customClass="input-name"
				data-testid="input-lastname"
				name="lastName"
			/>
			<div className={classes.buttonWrapper}>
				<Button
					type="submit"
					label="Envoyer le formulaire"
					customClass={classes.contactButton}
				/>
			</div>
		</form>
	);
}
