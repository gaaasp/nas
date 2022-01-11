import { Wrapper } from "components/common";
import { List, Text } from "components/ui";
import { useRequest } from "lib";
import { LatestLogs, Logs as LogsType } from "types";
import { capitalize, description, displayDateTime } from "utils";

export default function Logs() {
	const { data: logs } = useRequest<LatestLogs>("logs");
	const { data: connectionLogs } = useRequest<LogsType>("logs/connection");
	const { data: systemLogs } = useRequest<LogsType>("logs/system");

	return (
		<Wrapper title="Journaux" className="space-y-4">
			<div className="space-y-2">
				<Text h3>Derniers journaux</Text>
				<List
					data={logs}
					empty="Aucun journal"
					emoji={({ level }) => (level === "info" ? "ℹ️" : "⚠️")}
				>
					{({ message, date }) => (
						<div>
							<Text>{message}</Text>
							<Text small className="text-accent-5">
								{description([date && capitalize(displayDateTime(date))])}
							</Text>
						</div>
					)}
				</List>
			</div>
			<div className="space-y-2">
				<Text h3>Journaux de connexion</Text>
				<List
					data={connectionLogs}
					empty="Aucun journal de connexion"
					emoji={({ level }) => (level === "info" ? "ℹ️" : "⚠️")}
				>
					{({ message, date }) => (
						<div>
							<Text>{message}</Text>
							<Text small className="text-accent-5">
								{description([date && capitalize(displayDateTime(date))])}
							</Text>
						</div>
					)}
				</List>
			</div>
			<div className="space-y-2">
				<Text h3>Journaux de système</Text>
				<List
					data={systemLogs}
					empty="Aucun journal de système"
					emoji={({ level }) => (level === "info" ? "ℹ️" : "⚠️")}
				>
					{({ message, date }) => (
						<div>
							<Text>{message}</Text>
							<Text small className="text-accent-5">
								{description([date && capitalize(displayDateTime(date))])}
							</Text>
						</div>
					)}
				</List>
			</div>
		</Wrapper>
	);
}
