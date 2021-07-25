import Document, {
	DocumentContext,
	Head,
	Html,
	Main,
	NextScript,
} from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);

		return initialProps;
	}

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
