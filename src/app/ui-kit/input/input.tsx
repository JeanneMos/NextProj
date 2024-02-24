import React from "react";
import classes from "./input.module.css";

interface InputProps {
	label: string;
	value?: string;
	placeholder?: string;
	id: string;
	error?: string;
	type?: string;
	customClass?: string;
	name: string;
}
export function Input({
	label,
	value,
	placeholder,
	id,
	error,
	type = "text",
	customClass,
	name,
	...rest
}: InputProps) {
	return (
		<div className={`${classes.inputField} ${customClass}`}>
			<label htmlFor={id}>{label}</label>
			<input
				id={id}
				value={value}
				placeholder={placeholder}
				type={type}
				name={name}
				className={classes.input}
				{...rest}
			/>
			<div aria-live="polite">{error && <span>{error}</span>}</div>
		</div>
	);
}
