export type APILatestLogs = {
	logs: Array<{
		fac: string;
		host: string;
		ldate: string;
		ltime: string;
		msg: string;
		prio: string;
		prog: string;
	}>;
};

export type APILogs = {
	errorCount: number;
	infoCount: number;
	items: Array<{
		descr: string;
		level: string;
		logtype: string;
		orginalLogType: string;
		time: string;
		who: string;
	}>;
	total: number;
	warnCount: number;
};

export type LatestLogs = Array<{
	user: string;
	level: string;
	message: string;
	date: string;
	host: string;
	program: string;
}>;

export type Logs = Array<{
	user: string;
	type: string;
	message: string;
	date: string;
	level: string | "info" | "warn";
}>;
