import React from "react";
import classes from "./footer.module.css";
import Link from "next/link";

export function Footer() {
	return (
		<footer role="contentinfo" className={classes.footer}>
			<Link href="/login" className={classes.footerLink}>
				Connexion
			</Link>
		</footer>
	);
}
