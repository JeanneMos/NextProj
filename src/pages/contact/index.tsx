import React from "react";
import { ContactForm } from "../../app/components/contactForm";
import Head from "next/head";
import classes from "./contact.module.css";

const Title = () => (
	<Head>
		<title>Contact</title>
	</Head>
);

export default function Contact(props) {
	return (
		<>
			<Title />
			<div className={classes.contact}>
				<h1>Contact</h1>
				<ContactForm />
			</div>
		</>
	);
}
