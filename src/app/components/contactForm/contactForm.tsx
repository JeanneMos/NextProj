import React from "react";

export function ContactForm() {
	return (
		<form noValidate>
			<input type="text" placeholder="nom" className="input-name" />
			<input type="text" placeholder="prénom" className="input-firstName" />
		</form>
	);
}
