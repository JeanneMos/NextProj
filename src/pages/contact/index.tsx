import React from "react";
import { ContactForm } from "../../app/components/contactForm";
import Head from "next/head";

export default function Contact(props) {
	return (
		<div>
			<Head>
				<title>Contact</title>
			</Head>
			<h1>Contact</h1>
			<ContactForm />
		</div>
	);
}
