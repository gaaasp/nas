import { NextApiRequest } from "next";
import { APIStorage, Storage } from "types";
import { request } from "lib";

export const getStorage = (req: NextApiRequest): Promise<Storage> =>
	request<APIStorage>({
		params: {
			api: "SYNO.Storage.CGI.Storage",
			method: "load_info",
			version: 1,
		},
		req,
	}).then(({ disks, storagePools, volumes }) => ({
		disks: disks.map(
			({
				name,
				model,
				diskType,
				vendor,
				serial,
				status,
				temp,
				firm,
				isSsd,
				is4Kn,
				container,
				size_total,
				id,
				firmware_status,
			}) => ({
				id,
				name,
				model,
				vendor,
				status,
				serial,
				temperature: temp,
				firmware: {
					version: firm,
					status: firmware_status,
				},
				location: container.str,
				"4k": is4Kn,
				connector: diskType,
				medium: isSsd ? "SSD" : "HDD",
				size: parseFloat(size_total) / 1,
			})
		),
		volumes: volumes.map(
			({ desc, fs_type, id, size, status, raidType, pool_path }) => ({
				id,
				name: id[0].toLocaleUpperCase() + id.slice(1).replace(/_/g, " "),
				status,
				raidType,
				description: desc,
				type: fs_type,
				size: {
					total: parseFloat(size.total),
					used: parseFloat(size.used),
				},
				storagePool: pool_path,
			})
		),
		storagePools: storagePools.map(
			({ pool_path, disks, status, desc, size, id }) => ({
				id: pool_path,
				name: id.replace(/_/g, " ").replace("reuse", "Storage pool"),
				disks,
				status,
				description: desc,
				size: {
					total: parseFloat(size.total),
					used: parseFloat(size.used),
				},
			})
		),
	}));
