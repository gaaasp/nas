import { Wrapper } from "components/common";
import { List, Text } from "components/ui";
import { useRequest } from "lib";
import { useRouter } from "next/router";
import { Files } from "types";
import { description, fileSize } from "utils";

export default function Directory() {
	const { query } = useRouter();
	const { data: files } = useRequest<Files>(
		query.folders &&
			`files?path=${encodeURIComponent(
				`/${(query.folders as string[])?.join("/")}`
			)}`
	);

	const folder = query.folders?.slice(-1)[0] || "Fichiers";

	return (
		<Wrapper
			title={folder === "#recycle" ? "Corbeille" : folder}
			back
			header={
				<div>
					<Text h1>{folder === "#recycle" ? "Corbeille" : folder}</Text>
				</div>
			}
		>
			<List
				data={files}
				empty="Aucun fichier ou dossier"
				emoji={({ directory, name }) =>
					directory ? (name === "#recycle" ? "🗑" : "📁") : "a"
				}
				href={({ path, directory }) =>
					directory &&
					`/files${path
						.split("/")
						.map((path) => encodeURIComponent(path))
						.join("/")}`
				}
			>
				{({ name, created, size, directory, owner }) => (
					<div>
						<Text>{name === "#recycle" ? "Corbeille" : name}</Text>
						<Text small className="text-accent-5">
							{description([
								new Date(created).toLocaleDateString(),
								!directory && fileSize(size),
								owner?.name,
							])}
						</Text>
					</div>
				)}
			</List>
		</Wrapper>
	);
}
