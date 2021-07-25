import { NextApiRequest, NextApiResponse } from "next";
import { getLogs } from "utils";

export default async function Logs(req: NextApiRequest, res: NextApiResponse) {
	const logs = await getLogs(req);
	res.status(200).json(logs);
}
