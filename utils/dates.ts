export const displayDate = (date: string) => {
	return new Date(date).toLocaleDateString("fr-FR", {
		weekday: "long",
		day: "numeric",
		month: "short",
		year: "numeric",
	});
};

export const displayTime = (date: string) =>
	new Date(date).toLocaleTimeString("fr-FR", {
		hour: "numeric",
		minute: "numeric",
	});

export const displayDateTime = (date: string) =>
	`${displayDate(date)} à ${displayTime(date)}`;
