export type APIUser = {
	name: string;
	expired: "now" | "normal";
};

export type APIConnectedUser = {
	can_be_kicked: boolean;
	descr: string;
	from: string;
	pid: number;
	time: string;
	type: string;
	user_can_be_disabled: boolean;
	who: string;
};

export type User = {
	name: string;
	disabled: boolean;
	ip?: string;
	connected?: boolean;
	type?: string;
	service?: string;
	date?: string;
	canBeDisabled?: boolean;
};
