import { NextApiRequest, NextApiResponse } from "next";
import { getSystem } from "lib";

export default async function System(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const system = await getSystem(req);
	res.status(200).json(system);
}
