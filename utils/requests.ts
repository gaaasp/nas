import { NextApiRequest } from "next";

const host = "192.168.1.28";
const port = 5000;

export const request = async <T>({
	path = "webapi/entry.cgi",
	params,
	method = "POST",
	headers,
	req,
	...config
}: {
	path?: string;
	params?: { [key: string]: any };
	req?: NextApiRequest;
} & RequestInit): Promise<
	T & {
		_raw: { data?: T; [key: string]: any };
		_cookie: { [key: string]: any };
	}
> =>
	fetch(
		`http://${host}:${port}/${path}${
			method === "POST" || !params
				? ""
				: `?${Object.entries(params)
						.map(
							([key, value]) =>
								`${encodeURIComponent(
									key
								)}=${encodeURIComponent(value.toString())}`
						)
						.join("&")}`
		}`,
		{
			headers: {
				accept: "*/*",
				"accept-language": "en-US,en;q=0.9,fr;q=0.8",
				"sec-gpc": "1",
				"x-requested-with": "XMLHttpRequest",
				cookie: req?.headers.cookie,
				...(headers || {}),
			},
			referrer: `http://${host}:${port}/`,
			referrerPolicy: "strict-origin-when-cross-origin",
			body:
				method === "POST" && params
					? Object.entries(params)
							.map(
								([key, value]) =>
									`${encodeURIComponent(
										key
									)}=${encodeURIComponent(value.toString())}`
							)
							.join("&")
					: null,
			method,
			mode: "cors",
			...config,
		}
	).then(async (res) => {
		const json = await res.json();
		const cookie = res.headers
			.get("set-cookie")
			?.split(/[,;]+/)
			.filter(
				(text) =>
					text.indexOf("=") >= 0 &&
					!text.startsWith("expires=") &&
					!text.startsWith("path=")
			)
			.reduce((obj, text) => {
				let arr = text.trim().split("=");
				obj[arr[0]] = arr[1];
				return obj;
			}, {});
		return {
			...(json.data || {}),
			_raw: json,
			_cookie: cookie,
		};
	});
