import Link from "next/link";
import useSWR from "swr";

export default function Home() {
	const { data: files } = useSWR("/api/files");

	return (
		<div className="space-y-2">
			<nav className="w-full border-b border-accent-2">
				<div className="px-4 w-full max-w-6xl mx-auto mt-4">
					<p className="text-xl font-medium">192.168.1.28</p>
				</div>
				<ul className="flex items-center h-12 overflow-auto px-2 w-full max-w-6xl mx-auto">
					{[
						{ name: "Files", path: "/", selected: true },
						{ name: "Packages", path: "/packages" },
						{ name: "Users", path: "/users" },
						{ name: "Usage", path: "/usage" },
						{ name: "Logs", path: "/logs" },
						{ name: "Settings", path: "/settings" },
					].map(({ name, path, selected }) => (
						<li className="px-2 relative h-full flex items-center">
							<Link href={path}>
								<a
									className={
										"focus:outline-none " +
										(selected
											? "text-foreground"
											: "text-accent-5 hover:text-accent-6 focus-visible:text-accent-6 active:text-foreground")
									}
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
					))}
				</ul>
			</nav>
			<main className="px-4 w-full max-w-6xl mx-auto">
				{files &&
					files.map(({ name, path, directory }) => (
						<div>
							{name} {path}
						</div>
					))}
			</main>
		</div>
	);
}
