import { NextApiRequest, NextApiResponse } from "next";
import { getUsers } from "lib";

export default async function Users(req: NextApiRequest, res: NextApiResponse) {
	const users = await getUsers(req);
	res.status(200).json(users);
}
