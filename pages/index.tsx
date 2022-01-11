import { Wrapper } from "components/common";
import { List, Text } from "components/ui";
import { useRequest } from "lib";
import { Files } from "types";
import { capitalize, description, displayDate } from "utils";

export default function Home() {
	const { data: files } = useRequest<Files>("files");

	return (
		<Wrapper
			title="Fichiers"
			header={
				<div>
					<Text h1>Fichiers</Text>
				</div>
			}
		>
			<List
				data={files}
				empty="Aucun fichier ou dossier"
				emoji={({ directory }) => (directory ? "📁" : "a")}
				href={({ path }) =>
					`/files${path
						.split("/")
						.map((path) => encodeURIComponent(path))
						.join("/")}`
				}
			>
				{({ name, created, owner }) => (
					<div>
						<Text>{name}</Text>
						<Text small className="text-accent-5">
							{description([
								created && capitalize(displayDate(created)),
								owner?.name,
							])}
						</Text>
					</div>
				)}
			</List>
		</Wrapper>
	);
}
