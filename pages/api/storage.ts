import { NextApiRequest, NextApiResponse } from "next";
import { getStorage } from "utils";

export default async function Storage(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const storage = await getStorage(req);
	res.status(200).json(storage);
}
