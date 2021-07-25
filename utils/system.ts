import { NextApiRequest } from "next";
import { APISystem, System } from "types";
import { request } from "utils";

export const getSystem = (req: NextApiRequest): Promise<System> =>
	request<APISystem>({
		method: "GET",
		params: {
			type: '"network"',
			api: "SYNO.Core.System",
			method: "info",
			version: 1,
		},
		req,
	})
		.then(({ _raw, _cookie, ...rest }) => rest)
		.then(
			({
				dns,
				enabled_domain,
				enabled_samba,
				gateway,
				hostname,
				nif,
				workgroup,
			}) => ({
				dns,
				gateway,
				name: hostname,
				samba: enabled_samba,
				domain: enabled_domain,
				workgroup,
				interface: nif[0].id,
				mac: nif[0].mac,
				mask: nif[0].mask,
				ips: [
					{
						type: "v4",
						address: nif[0].addr,
					},
					...nif[0].ipv6.map(({ addr, scope, prefix_len }) => ({
						type: "v6",
						address: addr,
						scope,
						length: prefix_len,
					})),
				],
			})
		);
