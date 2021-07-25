import { NextApiRequest } from "next";
import { APIConnectedUser, APIUser, User } from "types";
import { request } from "utils";

export const getUsers = (req: NextApiRequest): Promise<Array<User>> =>
	request<{
		offset: number;
		total: number;
		users: Array<APIUser>;
	}>({
		params: {
			offset: 0,
			limit: 16000,
			api: "SYNO.Core.User",
			method: "list",
			version: 1,
			additional: '["expired"]',
		},
		req,
	})
		.then(async ({ users }) => {
			const connectedUsers = await getConnectedUsers(req);
			users = users.map(({ name, ...rest }) => ({
				name,
				...(connectedUsers.find((user) => user.who === name) || {}),
				...rest,
			}));
			return users;
		})
		.then((users) =>
			users.map(
				({
					name,
					expired,
					can_be_kicked,
					descr,
					from,
					time,
					type,
					user_can_be_disabled,
				}: APIUser & APIConnectedUser) => ({
					name,
					disabled: expired === "now",
					ip: from,
					connected: can_be_kicked,
					type,
					service: descr,
					date: time?.replace(/\//g, ".").replace(/ /g, "T"),
					canBeDisabled: user_can_be_disabled,
				})
			)
		);

export const getConnectedUsers = (req: NextApiRequest) =>
	request<{
		total: number;
		systime: string;
		items: Array<APIConnectedUser>;
	}>({
		method: "GET",
		params: {
			offset: 0,
			limit: 16000,
			api: "SYNO.Core.CurrentConnection",
			method: "list",
			version: 1,
		},
		req,
	}).then(({ items }) => items);
