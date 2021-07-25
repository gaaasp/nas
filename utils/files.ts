import { NextApiRequest } from "next";
import { APIFiles, APIShares, Files } from "types";
import { request } from "utils";

export const getShares = (req: NextApiRequest): Promise<Files> =>
	request<APIShares>({
		params: {
			filetype: '"dir"',
			sort_by: '"name"',
			check_dir: "true",
			enum_cluster: "true",
			node: '"fm_root"',
			method: "list_share",
			version: 2,
			api: "SYNO.FileStation.List",
		},
		req,
	}).then(({ shares }) =>
		shares.map(({ name, path, isdir }) => ({
			name,
			path,
			directory: isdir,
		}))
	);

export const getFiles = (path: string, req: NextApiRequest): Promise<Files> =>
	request<APIFiles>({
		params: {
			offset: 0,
			limit: 1000,
			sort_by: '"name"',
			sort_direction: '"ASC"',
			action: '"list"',
			check_dir: "true",
			filetype: '"all"',
			folder_path: `"${path}"`,
			api: "SYNO.FileStation.List",
			method: "list",
			version: 2,
		},
		req,
	}).then(({ files }) =>
		files.map(({ name, path, isdir }) => ({
			name,
			path,
			directory: isdir,
		}))
	);
