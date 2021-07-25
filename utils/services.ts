import { NextApiRequest } from "next";
import { APIServices, Services } from "types";
import { request } from "utils";

export const getServices = (req: NextApiRequest): Promise<Services> =>
	request<APIServices>({
		params: { api: "SYNO.Core.Service", method: "get", version: 1 },
		req,
	}).then(({ service }) =>
		service.map(({ display_name, enable, service_id }) => ({
			id: service_id,
			name: display_name,
			enabled: enable,
		}))
	);
