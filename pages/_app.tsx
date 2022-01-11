import "assets/main.css";

import { Container } from "components/common";
import { AppProps } from "next/app";

export default function App(props: AppProps) {
	return <Container {...props} />;
}
