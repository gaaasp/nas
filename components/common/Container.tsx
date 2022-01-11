import { Tab } from "components/ui";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { cn, parseCookie } from "utils";
import { Header } from ".";

export interface ContainerProps extends AppProps {}

export const Container = ({ Component, pageProps }: ContainerProps) => {
	const { pathname, replace } = useRouter();
	const cookie = parseCookie(
		typeof window === "undefined" ? undefined : document.cookie
	);

	useEffect(() => {
		if (cookie && !cookie.stay_login && pathname !== "/login") {
			replace("/login");
		}
	}, [pathname, cookie]);

	const tabs: Tab[] = (!cookie || cookie.stay_login) && [
		{ name: "Fichiers", path: "/", alts: ["/files/[...folders]"] },
		{ name: "Paquets", path: "/packages", alts: ["/packages/[package]"] },
		{ name: "Comptes", path: "/users" },
		{ name: "Journaux", path: "/logs" },
		{ name: "Paramètres", path: "/settings" },
	];

	return (
		<div
			className={cn(
				"w-full h-max min-h-full flex flex-col",
				(!tabs || tabs.length) && "bg-accent-1 print:bg-background"
			)}
		>
			<Header tabs={tabs} />
			<Component {...pageProps} />
		</div>
	);
};
