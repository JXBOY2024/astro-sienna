export interface ShowcaseItem {
	name: string;
	href: string;
	stack: string;
	badge?: string;
	desc: string;
}

export const showcase: ShowcaseItem[] = [
	{
		name: "Real-time Weather and Forecast for Cities",
		href: "https://blog.aivoraworks.com/",
		stack: "Python · Algorithms · Monitor",
		badge: "WebApp",
		desc: "Real-time weather and forecasts for cities worldwide, providing accurate current conditions, hourly updates, and extended outlooks to help you plan your day with confidence.",
	},
	{
		name: "Football Match Odds Monitoring",
		href: "https://blog.aivoraworks.com/",
		stack: "Python · Monitor",
		badge: "WebApp",
		desc: "Real-time football match odds tracking and monitoring across leagues, providing live updates, price movements, and insights to help you follow betting market dynamics.",
	},
];
