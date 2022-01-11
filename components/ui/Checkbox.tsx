import { InputHTMLAttributes } from "react";
import { cn } from "utils";
import { Text } from ".";

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	radio?: boolean;
}

export const Checkbox = ({
	label,
	radio,
	disabled,
	className,
	...props
}: CheckboxProps) => {
	const checkbox = (
		<input
			disabled={disabled}
			aria-label={label}
			type={radio ? "radio" : "checkbox"}
			className={cn(
				"flex h-6 w-6 min-w-6 rounded-full appearance-none bg-accent-1 border border-accent-2 transition duration-200 checked:form-tick checked:bg-blue checked:border-blue",
				disabled
					? "cursor-not-allowed"
					: [
							"cursor-pointer",
							label
								? "group-hover:border-accent-3 group-hover:checked:border-blue-light group-hover:checked:bg-blue-light"
								: "hover:border-accent-3 hover:checked:border-blue-light hover:checked:bg-blue-light",
					  ]
			)}
			{...props}
		/>
	);

	return label ? (
		<label
			className={cn(
				"flex items-center space-x-2 cursor-pointer group",
				disabled ? "cursor-not-allowed" : "cursor-pointer",
				className
			)}
		>
			{checkbox}
			<Text className={disabled && "text-accent-5"}>{label}</Text>
		</label>
	) : (
		checkbox
	);
};
