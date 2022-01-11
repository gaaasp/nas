import { Wrapper } from "components/common";
import { List, Text } from "components/ui";
import { useRequest } from "lib";
import { User } from "types";
import { cn, description, displayDate, displayDateTime } from "utils";

export default function Users() {
	const { data: users } = useRequest<User[]>("users");

	console.log(users);

	return (
		<Wrapper title="Comptes">
			<List data={users} empty="Aucun compte">
				{({ connected, disabled, name, date, ip, service }) => (
					<div className={cn(disabled && "opacity-50")}>
						<Text>{name}</Text>
						<Text small className="text-accent-5">
							{description([
								disabled && "Désactivé",
								!disabled &&
									(connected
										? `Connecté depuis ${displayDateTime(date)}`
										: "Non connecté"),
								ip,
								service,
							])}
						</Text>
					</div>
				)}
			</List>
		</Wrapper>
	);
}
