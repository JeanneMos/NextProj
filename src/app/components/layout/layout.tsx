import React from "react";
import { Banner } from "../banner";
import { Footer } from "../footer";
import "../../style/base.css";

export function Layout({ children }) {
	return (
		<>
			<Banner />
			<main role="main">{children}</main>
			<Footer />
		</>
	);
}
