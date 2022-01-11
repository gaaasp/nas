import { NextApiRequest, NextApiResponse } from "next";
import { getPackages } from "lib";

export default async function Packages(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const packages = await getPackages(req);
	res.status(200).json(packages);
}
