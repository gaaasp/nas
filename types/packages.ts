export type APIPackages = {
	blupgrade: boolean;
	data: Array<{
		blupgrade: boolean;
		breakpkgs: {
			[key: string]: string | { "="?: string; "<"?: string };
		} | null;
		category: Array<string>;
		changelog: string;
		concflictpkgs: null;
		deppkgs: { [key: string]: { ">=": string } } | null;
		desc: string;
		dname: string;
		download_count: number;
		id: string;
		is_security_version: boolean;
		link: string;
		maintainer: string;
		maintainer_url: string;
		md5: string;
		package: string;
		price: null;
		qinst: boolean;
		qstart: boolean;
		qupgrade: boolean;
		recent_download_count: number;
		replaceforcepkgs: null;
		replacepkgs: null;
		size: number;
		snapshot: Array<string>;
		source: string;
		start: boolean;
		thirdparty: boolean;
		thumbnail: Array<string>;
		thumbnail_retina: Array<string>;
		type: number;
		version: string;
	}>;
	total: number;
};

export type APIInstalledPackages = {
	packages: Array<{
		id: string;
		name: string;
		version: string;
		additional: {
			description: string;
			maintainer: string;
			startable: boolean;
		};
	}>;
	total: number;
};

export type Packages = Array<{
	id: string;
	name: string;
	description: string;
	installed: boolean;
	downloads: number;
	maintainer: string;
	price: number | null;
	avatar: string;
	changelog: string;
	categories: Array<string>;
	updatable: boolean;
	featuredImages: Array<string>;
	version: {
		latest: string;
		installed?: string;
	};
	startable?: boolean;
}>;
