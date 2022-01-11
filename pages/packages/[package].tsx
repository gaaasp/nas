import { Wrapper } from "components/common";
import { Button, Description, Text } from "components/ui";
import { useRequest } from "lib";
import { useRouter } from "next/router";
import { Packages } from "types";
import { description } from "utils";

export default function Package() {
	const { query } = useRouter();
	const { data: packages } = useRequest<Packages>("packages");

	const p = packages?.find(({ id }) => id === query.package);

	return (
		<Wrapper
			title={p?.name || "Paquet"}
			back
			header={
				<div className="space-y-2 sm:space-y-0 sm:flex sm:space-x-4 sm:items-center sm:justify-between">
					<div className="space-y-0.5">
						<div className="space-y-1 sm:space-y-0 sm:flex sm:items-end sm:space-x-2">
							{p?.avatar && <img src={p?.avatar} className="w-12 h-12" />}
							<Text h1>{p?.name || "Paquet"}</Text>
						</div>
						<Text className="text-accent-5">
							{description([
								p?.maintainer,
								p?.price?.toLocaleString("fr-FR", {
									currency: "EUR",
									style: "currency",
								}),
								p?.downloads &&
									`${p?.downloads?.toLocaleString("fr-FR")} téléchargements`,
								p?.version?.installed || p?.version?.latest,
							])}
						</Text>
					</div>
					{p && (
						<div className="space-y-2 sm:space-y-0 sm:flex sm:space-x-4">
							{p.installed && p.updatable && (
								<Button width="w-full sm:w-max" secondary>
									Mettre à jour
								</Button>
							)}
							{!p.installed && (
								<Button width="w-full sm:w-max">Installer</Button>
							)}
							{p.installed && (
								<Button width="w-full sm:w-max" color="red">
									Désinstaller
								</Button>
							)}
						</div>
					)}
				</div>
			}
			className="space-y-4"
		>
			{p && (
				<>
					<Description title="Description">{p?.description}</Description>
					{p?.changelog && (
						<Description title="Nouveautés">
							<div dangerouslySetInnerHTML={{ __html: p?.changelog }} />
						</Description>
					)}
					{!!p?.featuredImages?.length && (
						<Description
							title="Images"
							titleClassName="mb-1"
							className="w-full"
						>
							<div className="flex space-x-4 snap-x snap-mandatory w-full overflow-auto">
								{p.featuredImages.map((src) => (
									<img src={src} className="h-128 snap-center rounded" />
								))}
							</div>
						</Description>
					)}
				</>
			)}
		</Wrapper>
	);
}
