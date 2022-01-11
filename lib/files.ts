import { NextApiRequest } from "next";
import { APIFiles, APIShares, Files } from "types";
import { request } from "lib";

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
			additional: JSON.stringify(["size", "owner", "time", "perm", "type"]),
		},
		req,
	}).then(({ shares }) =>
		shares.map(({ name, path, isdir, additional }) => ({
			name,
			path,
			directory: isdir,
			created: new Date(additional.time.crtime * 1000).toISOString(),
			modified: new Date(additional.time.mtime * 1000).toISOString(),
			owner: {
				id: additional.owner.uid,
				name: additional.owner.user,
			},
			permissions: {
				read: additional.perm.acl.read,
				write: additional.perm.acl.write,
			},
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
			additional: JSON.stringify(["size", "owner", "time", "perm", "type"]),
		},
		req,
	}).then(({ files }) =>
		files.map(({ name, path, isdir, additional }) => ({
			name,
			path,
			directory: isdir,
			created: new Date(additional.time.crtime * 1000).toISOString(),
			modified: new Date(additional.time.mtime * 1000).toISOString(),
			size: additional.size,
			owner: {
				id: additional.owner.uid,
				name: additional.owner.user,
			},
			permissions: {
				read: additional.perm.acl.read,
				write: additional.perm.acl.write,
			},
		}))
	);
