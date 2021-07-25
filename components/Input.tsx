import { FC, InputHTMLAttributes } from "react";
import cn from "classnames";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: FC<InputProps> = ({ className, ...rest }) => {
	return (
		<input
			className={cn(
				"h-8 px-3 bg-accent-1 w-full transition duration-200 rounded-md text-foreground placeholder-accent-4 focus:outline-none",
				className
			)}
			{...rest}
		/>
	);
};
