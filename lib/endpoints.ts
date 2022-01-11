import { request } from "lib";

export const getEndpoints = () =>
	request<{
		[key: string]: {
			maxVersion: number;
			minVersion: number;
			path: string;
		};
	}>({
		path: "webapi/query.cgi",
		params: {
			query: "all",
			api: "SYNO.API.Info",
			method: "query",
			version: 1,
		},
		method: "GET",
	});
