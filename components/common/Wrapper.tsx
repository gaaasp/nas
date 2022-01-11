import { Back } from "components/ui";
import { HTMLAttributes } from "react";
import { cn } from "utils";
import { SEO } from ".";

export interface WrapperProps extends HTMLAttributes<HTMLElement> {
	title: string;
	header?: JSX.Element;
	back?: boolean;
}

export const Wrapper = ({
	children,
	className,
	title,
	back,
	header,
	...props
}: WrapperProps) => (
	<>
		<SEO title={title} />
		<article className="w-full flex-1 flex flex-col">
			{(back || header) && (
				<header className="w-full bg-background border-b border-accent-2">
					<div className="w-full max-w-6xl mx-auto p-4">
						{back && <Back />}
						{header}
					</div>
				</header>
			)}
			<main
				className={cn("w-full max-w-6xl mx-auto p-4 flex-1", className)}
				{...props}
			>
				{children}
			</main>
		</article>
	</>
);
