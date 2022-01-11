import Head from "next/head";
import { HTMLAttributes } from "react";

export interface SEOProps extends HTMLAttributes<HTMLHeadElement> {
	title: string;
}

export const SEO = ({ title, ...props }: SEOProps) => (
	<Head>
		<title>{title ? `${title} | NAS` : "NAS"}</title>
		<meta property="og:type" content="website" />
		<meta property="og:title" content={title || "Accueil"} />
		<meta property="og:site_name" content="NAS" />
		<meta property="twitter:card" content="summary" />
		<meta property="twitter:title" content={title || "Accueil"} />
		<meta name="apple-mobile-web-app-title" content="NAS" />
		<meta name="application-name" content="NAS" />
	</Head>
);
