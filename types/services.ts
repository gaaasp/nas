export type APIServices = {
	service: Array<{
		display_name: string;
		enable: boolean;
		service_id: string;
	}>;
};

export type Services = Array<{
	id: string;
	name: string;
	enabled: boolean;
}>;
