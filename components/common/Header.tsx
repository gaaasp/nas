import { Link, Logo, Tab, Tabs } from "components/ui";
import { HTMLAttributes } from "react";
import { cn } from "utils";

export interface HeaderProps extends HTMLAttributes<HTMLHeadingElement> {
	tabs: Tab[];
}

export const Header = ({ tabs, ...props }: HeaderProps) => (
	<header
		className={cn(
			"w-full sticky top-0 z-10 bg-background",
			(!tabs || tabs.length) && "border-b border-accent-2"
		)}
		{...props}
	>
		<div className="w-full max-w-6xl mx-auto px-4 flex items-center justify-between py-2">
			<Link href="/">
				<Logo />
			</Link>
		</div>
		<Tabs tabs={tabs} />
	</header>
);
