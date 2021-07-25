export type APIShares = {
	offset: number;
	shares: Array<{
		isdir: boolean;
		name: string;
		path: string;
	}>;
	total: number;
};

export type APIFiles = {
	offset: number;
	files: Array<{
		isdir: boolean;
		name: string;
		path: string;
	}>;
	total: number;
};

export type Files = Array<{ name: string; path: string; directory: boolean }>;
