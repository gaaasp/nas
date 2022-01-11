import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link
						href="https://fonts.googleapis.com/css2?family=Inter"
						rel="stylesheet"
					/>
				</Head>
				<body className="bg-background text-foreground">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
