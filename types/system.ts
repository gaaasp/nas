export type APISystem = {
	dns: string;
	enabled_domain: boolean;
	enabled_samba: boolean;
	gateway: string;
	hostname: string;
	nif: Array<{
		addr: string;
		id: string;
		ipv6: Array<{ addr: string; prefix_len: number; scope: string }>;
		mac: string;
		mask: string;
		type: string;
	}>;
	wins: string;
	workgroup: string;
};

export type System = {
	dns: string;
	gateway: string;
	name: string;
	samba: boolean;
	domain: boolean;
	workgroup: string;
	interface: string;
	mac: string;
	mask: string;
	ips: Array<{
		type: string;
		address: string;
		scope?: string;
		length?: number;
	}>;
};
