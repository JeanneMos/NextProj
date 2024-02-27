import React, { ButtonHTMLAttributes, ReactComponentElement } from "react";
import classes from "./button.module.css";

interface ButtonProps {
	type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
	customClass?: string;
	disabled?: boolean;
	children: React.ReactNode;
}
export function Button({
	type = "button",
	customClass,
	disabled = false,
	children,
}: ButtonProps) {
	return (
		<button
			disabled={disabled}
			type={type}
			className={`${classes.button} ${customClass}`}
		>
			{children}
		</button>
	);
}
