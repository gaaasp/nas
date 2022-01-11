import { NextApiRequest, NextApiResponse } from "next";
import { getFiles, getShares } from "lib";

export default async function Files(req: NextApiRequest, res: NextApiResponse) {
	const files = req.query.path
		? await getFiles(decodeURIComponent(req.query.path.toString()), req)
		: await getShares(req);
	res.status(200).json(files);
}
