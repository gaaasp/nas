import { NextApiRequest, NextApiResponse } from "next";
import { login } from "utils";

export default async function Login(req: NextApiRequest, res: NextApiResponse) {
	const { id, smid } = await login(JSON.parse(req.body));
	res.setHeader("Set-Cookie", [
		`stay_login=1;expires=Sun, 01-Aug-2121 22:04:36 GMT;path=/;HttpOnly`,
		`id=${id};expires=Sun, 01-Aug-2121 22:04:36 GMT;path=/;HttpOnly`,
		`smid=${smid};expires=Sun, 01-Aug-2121 22:04:36 GMT;path=/;HttpOnly`,
	]);
	res.status(200).send({ id, smid });
}
