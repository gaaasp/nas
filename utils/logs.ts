import { NextApiRequest } from "next";
import { APILatestLogs, APILogs, LatestLogs, Logs } from "types";
import { request } from "utils";

export const getLogs = (req: NextApiRequest): Promise<LatestLogs> =>
	request<APILatestLogs>({
		params: {
			start: 0,
			limit: 100,
			widget: true,
			dir: '"desc"',
			offset: 0,
			api: "SYNO.Core.SyslogClient.Status",
			method: "latestlog_get",
			version: 1,
		},
		req,
	}).then(({ logs }) =>
		logs.map(({ fac, host, ldate, ltime, msg, prio, prog }) => ({
			user: fac,
			level: prio,
			message: msg,
			date: `${ldate}T${ltime}`,
			host,
			program: prog,
		}))
	);

export const getSystemLogs = (req: NextApiRequest): Promise<Logs> =>
	request<APILogs>({
		params: {
			target: '"LOCAL"',
			data_from: 0,
			data_to: 0,
			keyword: '""',
			level: '""',
			logtype: '"system"',
			offset: 0,
			limit: 100,
			api: "SYNO.Core.SyslogClient.Log",
			method: "list",
			version: 1,
		},
		req,
	}).then(({ items }) =>
		items.map(({ descr, level, orginalLogType, time, who }) => ({
			user: who,
			type: orginalLogType,
			message: descr,
			date: time.replace(/ /g, "T").replace(/\//g, "."),
			level,
		}))
	);

export const getConnectionLogs = (req: NextApiRequest): Promise<Logs> =>
	request<APILogs>({
		params: {
			target: '"LOCAL"',
			data_from: 0,
			data_to: 0,
			keyword: '""',
			level: '""',
			logtype: '"connection"',
			offset: 0,
			limit: 100,
			api: "SYNO.Core.SyslogClient.Log",
			method: "list",
			version: 1,
		},
		req,
	}).then(({ items }) =>
		items.map(({ descr, level, orginalLogType, time, who }) => ({
			user: who,
			type: orginalLogType,
			message: descr,
			date: time.replace(/ /g, "T").replace(/\//g, "."),
			level,
		}))
	);
