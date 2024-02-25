import React from "react";
import { Banner } from "../banner";
import { Footer } from "../footer";
import { Main } from "../main";
import "../../style/base.css";
import classes from "./layout.module.css";

export function Layout({ children }) {
	return (
		<div className={classes.wrapper}>
			<Banner />
			<Main>{children}</Main>
			<Footer />
		</div>
	);
}
