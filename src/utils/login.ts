import { responseOk, responseNotFound } from "../constants/responseStatuses";

interface Response {
	isLoggedin: boolean;
	isAdmin?: boolean;
	permissions: { [k: string]: boolean }[];
	responseStatus: 200 | 404 | 401;
}

export const login = async (data: { email: string; password: string }) => {
	const res = await fetch("/users", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			email: data.email,
			password: data.password,
		}),
	});
	const response = await res.json();
	if (response.status === responseOk) {
		return {
			isLoggedin: true,
			isAdmin: response.permissions.length > 0,
			permissions: response.permissions,
			responseStatus: response.status,
		} as Response;
	}
	if (response.status === responseNotFound) {
		return {
			isLoggedin: false,
			responseStatus: response.status,
		} as Response;
	}
	return {
		isLoggedin: false,
		responseStatus: response.status,
	} as Response;
};
