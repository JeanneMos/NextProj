import bcrypt from "bcrypt";
var salt = 11;

export const bcripted = (pwd: string): string => {
	return bcrypt.hashSync(pwd, salt);
};

export const comparedBcripted = async (pwd: string, hash: string) => {
	const isCorrect = await bcrypt.compare(pwd, hash).then((res) => {
		return res;
	});
	return isCorrect;
};
