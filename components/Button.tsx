import { FC, ButtonHTMLAttributes } from "react";
import cn from "classnames";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FC<ButtonProps> = ({ className, ...rest }) => {
	return (
		<button
			className={cn(
				"h-8 bg-blue-500 text-white rounded-md border-blue-500 transition duration-100 focus:outline-none hover:bg-transparent hover:border hover:text-blue-500 focus-visible:text-blue-500 focus-visible:bg-transparent focus-visible:border",
				className
			)}
			{...rest}
		/>
	);
};
