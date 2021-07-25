import { NextApiRequest, NextApiResponse } from "next";
import { getConnectionLogs } from "utils";

export default async function ConnectionLogs(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const logs = await getConnectionLogs(req);
	res.status(200).json(logs);
}
