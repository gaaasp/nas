import { NextApiRequest } from "next";
import { APIInstalledPackages, APIPackages, Packages } from "types";
import { request } from "utils";

export const getInstalledPackages = (req: NextApiRequest) =>
	request<APIInstalledPackages>({
		params: {
			offset: 0,
			limit: 16000,
			api: "SYNO.Core.Package",
			method: "list",
			version: 1,
			additional: '["startable"]',
		},
		req,
	}).then(({ packages }) => packages);

export const getPackages = (req: NextApiRequest): Promise<Packages> =>
	request<APIPackages>({
		params: {
			blforcereload: false,
			blloadothers: false,
			offset: 0,
			limit: 16000,
			api: "SYNO.Core.Package.Server",
			method: "list",
			version: 1,
		},
		req,
	})
		.then(async ({ data }) => {
			const installedPackages = await getInstalledPackages(req);
			return data.map((pkg) => ({
				installed: installedPackages.find(({ id }) => id === pkg.id),
				...pkg,
			}));
		})
		.then((packages) =>
			packages.map(
				({
					blupgrade,
					category,
					changelog,
					desc,
					dname,
					installed,
					download_count,
					id,
					maintainer,
					price,
					snapshot,
					thumbnail_retina,
					thumbnail,
					version,
				}) => ({
					id,
					name: dname,
					description: desc,
					installed: !!installed,
					downloads: download_count,
					maintainer,
					price,
					avatar: thumbnail_retina
						? thumbnail_retina[0]
						: thumbnail
						? thumbnail[1] || thumbnail[0]
						: "",
					changelog,
					categories: category,
					updatable: blupgrade,
					featuredImages: snapshot,
					version: {
						latest: version,
						installed: installed?.version,
					},
					startable: installed?.additional.startable,
				})
			)
		);
