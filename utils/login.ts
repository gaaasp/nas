import { request } from "./requests";

export const login = ({ username, password }) =>
	request<{ sid: string }>({
		path: "webapi/auth.cgi",
		params: {
			method: "login",
			account: username,
			passwd: password,
			session: "Core",
			format: "cookie",
			version: 3,
			api: "SYNO.API.Auth",
		},
		method: "GET",
	}).then(({ _cookie }) => _cookie);
