import { NextApiRequest, NextApiResponse } from "next";
import { getConnectionLogs } from "lib";

export default async function ConnectionLogs(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const logs = await getConnectionLogs(req);
	res.status(200).json(logs);
}
