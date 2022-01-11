import { Wrapper } from "components/common";
import { Button, List, Text } from "components/ui";
import { useRequest } from "lib";
import { Packages as PackagesType } from "types";
import { description } from "utils";

export default function Packages() {
	const { data: packages } = useRequest<PackagesType>("packages");

	const updatablePackages = packages?.filter(
		({ installed, updatable }) => installed && updatable
	);

	const installedPackages = packages?.filter(({ installed }) => installed);

	const notInstalledPackages = packages?.filter(({ installed }) => !installed);

	return (
		<Wrapper title="Paquets" className="space-y-4">
			<div className="space-y-2">
				<Text h3>Mises à jour</Text>
				<List data={updatablePackages} empty="Aucun paquet à mettre à jour">
					{({ name, avatar, maintainer, version }) => (
						<div className="flex flex-1 space-x-2 items-center">
							<img src={avatar} className="w-12 h-12" />
							<div className="flex-1">
								<Text>{name}</Text>
								<Text small className="text-accent-5">
									{description([
										maintainer,
										`${version.installed} → ${version.latest}`,
									])}
								</Text>
							</div>
							<Button>Mettre à jour</Button>
						</div>
					)}
				</List>
			</div>
			<div className="space-y-2">
				<Text h3>Installés</Text>
				<List
					href={({ id }) => `/packages/${id}`}
					data={installedPackages}
					empty="Aucun paquet installé"
				>
					{({ name, avatar, maintainer }) => (
						<div className="flex flex-1 space-x-2 items-center">
							<img src={avatar} className="w-12 h-12" />
							<div className="flex-1">
								<Text>{name}</Text>
								<Text small className="text-accent-5">
									{description([maintainer])}
								</Text>
							</div>
						</div>
					)}
				</List>
			</div>
			<div className="space-y-2">
				<Text h3>Découvrir</Text>
				<List
					href={({ id }) => `/packages/${id}`}
					data={notInstalledPackages}
					empty="Aucun paquet à découvrir"
				>
					{({ name, avatar, maintainer }) => (
						<div className="flex flex-1 space-x-2 items-center">
							<img src={avatar} className="w-12 h-12" />
							<div className="flex-1">
								<Text>{name}</Text>
								<Text small className="text-accent-5">
									{description([maintainer])}
								</Text>
							</div>
						</div>
					)}
				</List>
			</div>
		</Wrapper>
	);
}
