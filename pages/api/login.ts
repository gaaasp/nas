import { NextApiRequest, NextApiResponse } from "next";
import { login } from "utils";

export default async function Login(req: NextApiRequest, res: NextApiResponse) {
	const { id, smid } = await login({
		username: "Gaspard",
		password: "Maslis19",
	});
	res.setHeader("Set-Cookie", [`stay_login=1`, `id=${id}`, `smid=${smid}`]);
	res.status(200).send({ id, smid });
}
