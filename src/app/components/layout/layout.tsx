import React from "react";
import { Banner } from "../banner";
import { Footer } from "../footer";
import "../../style/base.css";
import { Main } from "../main";

export function Layout({ children }) {
	return (
		<>
			<Banner />
			<Main>{children}</Main>
			<Footer />
		</>
	);
}
