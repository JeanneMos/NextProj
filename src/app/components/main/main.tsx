import React from "react";
import classes from "./main.module.css";

export function Main({ children }) {
	return (
		<main role="main" className={classes.main}>
			{children}
		</main>
	);
}
