import { NextApiRequest, NextApiResponse } from "next";
import { getServices } from "utils";

export default async function Services(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const services = await getServices(req);
	res.status(200).json(services);
}
