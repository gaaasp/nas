import { NextApiRequest, NextApiResponse } from "next";
import { getSystemLogs } from "utils";

export default async function SystemLogs(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const logs = await getSystemLogs(req);
	res.status(200).json(logs);
}
