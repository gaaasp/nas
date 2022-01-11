import { Wrapper } from "components/common";
import {
	Card,
	Description,
	Empty,
	List,
	LoadingDots,
	Text,
} from "components/ui";
import { useRequest } from "lib";
import { Services, Storage, System } from "types";
import { description, fileSize } from "utils";

export default function Settings() {
	const { data: services } = useRequest<Services>("services");
	const { data: system } = useRequest<System>("system");
	const { data: storage } = useRequest<Storage>("storage");

	console.log(services);

	return (
		<Wrapper title="Paramètres" className="space-y-4">
			<div className="space-y-2">
				<Text h3>Système</Text>
				{system ? (
					<Card className="py-2 px-3 space-y-2">
						<Text h3 as="h4">
							{system.name}
						</Text>
						<Description title="Samba">
							{system.samba ? "Activé" : "Désactivé"}
						</Description>
						<Description title="DNS">{system.dns}</Description>
						<Description title="Passerelle par défaut">
							{system.gateway}
						</Description>
						<Description title="Interface">{system.interface}</Description>
						<Description title="Adresse MAC">{system.mac}</Description>
						<Description title="Masque">{system.mask}</Description>
						{system.ips.map(({ address, type, scope }, i) => (
							<Description
								title={type === "v4" ? "IPV4" : `IPV6 ${scope}`}
								key={i}
							>
								{address}
							</Description>
						))}
					</Card>
				) : (
					<Empty message={<LoadingDots />} />
				)}
			</div>
			<div className="space-y-2">
				<Text h3>Disques</Text>
				<List data={storage?.disks} empty="Aucun disque reconnu">
					{({ name, temperature, vendor, model, size, medium }) => (
						<div>
							<Text>{name}</Text>
							<Text small className="text-accent-5">
								{description([
									vendor,
									medium,
									model,
									temperature && `${temperature?.toLocaleString("fr-FR")}°C`,
									size && fileSize(size),
								])}
							</Text>
						</div>
					)}
				</List>
			</div>
			<div className="space-y-2">
				<Text h3>Volumes</Text>
				<List data={storage?.volumes} empty="Aucun volume reconnu">
					{({ name, size, description: desc, type, status }) => (
						<div>
							<Text>{name}</Text>
							<Text small className="text-accent-5">
								{description([
									status === "normal" ? "Sain" : "⚠️ Problème",
									desc,
									size && `${fileSize(size.used)} / ${fileSize(size.total)}`,
									type,
								])}
							</Text>
						</div>
					)}
				</List>
			</div>
			<div className="space-y-2">
				<Text h3>Services</Text>
				<List data={services} empty="Aucun service">
					{({ name, enabled }) => (
						<div>
							<Text>{name}</Text>
							<Text small className="text-accent-5">
								{description([enabled ? "Activé" : "Désactivé"])}
							</Text>
						</div>
					)}
				</List>
			</div>
		</Wrapper>
	);
}
