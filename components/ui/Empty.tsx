import { Card, CardProps, Text } from ".";

export interface EmptyProps extends CardProps {
	message: string | JSX.Element;
}

export const Empty = ({ message, ...props }: EmptyProps) => (
	<Card
		className="flex items-center justify-center h-48 text-accent-5 text-center"
		{...props}
	>
		{typeof message === "string" ? <Text>{message}</Text> : message}
	</Card>
);
