import { HTMLAttributes } from "react";
import { cn } from "utils";

export interface CardProps extends HTMLAttributes<HTMLElement> {}

export const Card = ({ className, ...props }: CardProps) => (
	<div
		className={cn(
			"border border-accent-2 rounded-md overflow-hidden",
			"bg-background",
			className
		)}
		{...props}
	/>
);
