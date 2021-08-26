import { FC, AllHTMLAttributes } from "react";
import cn from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";

export interface NavProps extends AllHTMLAttributes<HTMLElement> {}

export const Nav: FC<NavProps> = ({ className, ...rest }) => {
	const { pathname } = useRouter();

	return (
		<nav
			className={cn("w-full border-b border-accent-2", className)}
			{...rest}
		>
			<div className="px-4 w-full max-w-6xl mx-auto mt-4">
				<p className="text-xl font-medium">192.168.1.28</p>
			</div>
			<ul className="flex items-center h-12 overflow-auto px-2 w-full max-w-6xl mx-auto">
				{[
					{ name: "Files", path: "/" },
					{ name: "Packages", path: "/packages" },
					{ name: "Users", path: "/users" },
					{ name: "Usage", path: "/usage" },
					{ name: "Logs", path: "/logs" },
					{ name: "Settings", path: "/settings" },
				].map(({ name, path }) => {
					const selected = pathname === path;
					return (
						<li className="px-2 relative h-full flex items-center">
							<Link href={path}>
								<a
									className={cn(
										"focus-visible:outline-none",
										{
											"text-foreground": selected,
											"text-accent-5 hover:text-accent-6 focus-visible:text-accent-6 active:text-foreground":
												!selected,
										}
									)}
								>
									{name}
								</a>
							</Link>
							{selected && (
								<div className="absolute w-full px-2 h-0.5 bottom-0 left-0">
									<div className="w-full h-full bg-foreground" />
								</div>
							)}
						</li>
					);
				})}
			</ul>
		</nav>
	);
};
