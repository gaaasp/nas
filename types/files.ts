export type APIShares = {
	offset: number;
	shares: Array<{
		isdir: boolean;
		name: string;
		path: string;
		additional: APIAdditional;
	}>;
	total: number;
};

type APIAdditional = {
	size?: number;
	owner?: { gid: number; group: string; uid: number; user: string };
	perm?: {
		acl: {
			append: boolean;
			del: boolean;
			exec: boolean;
			read: boolean;
			write: boolean;
		};
		is_acl_mode: boolean;
		posix: number;
	};
	time?: {
		atime: number;
		crtime: number;
		ctime: number;
		mtime: number;
	};
	type?: string;
};

export type APIFiles = {
	offset: number;
	files: Array<{
		isdir: boolean;
		name: string;
		path: string;
		additional: APIAdditional;
	}>;
	total: number;
};

export type Files = Array<{
	name: string;
	path: string;
	directory: boolean;
	created: string;
	modified: string;
	size?: number;
	owner: { id: number; name: string };
	permissions: { read: boolean; write: boolean };
}>;
