import React, { ButtonHTMLAttributes } from "react";
import classes from "./button.module.css";

interface ButtonProps {
	type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
	customClass?: string;
	label: string;
	disabled?: boolean;
}
export function Button({
	type = "button",
	customClass,
	label,
	disabled = false,
}: ButtonProps) {
	return (
		<button
			disabled={disabled}
			type={type}
			className={`${classes.button} ${customClass}`}
		>
			{label}
		</button>
	);
}
