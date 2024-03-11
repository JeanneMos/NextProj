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
	required?: boolean;
	changeValue?: (e) => void;
	autocomplete?: string;
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
	required,
	changeValue,
	...rest
}: InputProps) {
	return (
		<div className={`${classes.inputField} ${customClass ? customClass : ""}`}>
			<label htmlFor={id}>{label}</label>
			<input
				id={id}
				value={value}
				placeholder={placeholder}
				type={type}
				name={name}
				className={classes.input}
				required={required}
				onChange={changeValue}
				{...rest}
			/>
			<div aria-live="polite">{error && <span className={classes.error}>{error}</span>}</div>
		</div>
	);
}
