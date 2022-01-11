export const parseCookie = (cookie: string) =>
	cookie
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
		}, {} as { [key: string]: string });
