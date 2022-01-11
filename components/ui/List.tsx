import { Skeleton, SkeletonGroup } from "components/skeleton";
import { cn } from "utils";
import { Card, Empty, Link, Text } from ".";

export interface ListProps<Item> {
	data: Item[];
	children: (item: Item) => JSX.Element;
	empty: string;
	emoji?: (item: Item) => string | JSX.Element;
	placeholder?: JSX.Element;
	href?: (item: Item) => string;
}

export const List = <Item,>({
	data,
	children,
	emoji,
	empty,
	placeholder = (
		<SkeletonGroup className="space-y-2">
			<Skeleton className="h-6 w-32" />
			<Skeleton className="h-4 w-56" />
		</SkeletonGroup>
	),
	href,
}: ListProps<Item>) =>
	data && !data.length ? (
		<Empty message={empty} />
	) : (
		<Card>
			{(data || [undefined, undefined, undefined, undefined, undefined]).map(
				(item, i) => {
					const itemHref = item && href && href(item);

					const Component = itemHref ? Link : "div";

					return (
						<Component
							href={itemHref || undefined}
							className={cn("flex pr-3 py-2 w-full", {
								"border-t border-accent-2": i !== 0,
								"pl-3": !item || !emoji,
								"hover:bg-accent-1 active:bg-accent-2": itemHref,
							})}
							key={(item || {})["id"] || i}
						>
							{item && emoji && (
								<div className="w-11 min-w-11 max-w-11 flex justify-center">
									<Text>{emoji(item) || "📖"}</Text>
								</div>
							)}
							{item ? children(item) : placeholder}
						</Component>
					);
				}
			)}
		</Card>
	);
