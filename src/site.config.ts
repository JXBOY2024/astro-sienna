import type { SiteConfig } from "@/types";
import type { AstroExpressiveCodeOptions } from "astro-expressive-code";

export const siteConfig: SiteConfig = {
	author: "Kevin Lu",
	date: {
		locale: "en-US",
		options: {
			day: "numeric",
			month: "short",
			year: "numeric",
		},
	},
	description:
		"真正改变世界的并不是某一个具体的工具，而是不断进化的认知与持续行动的能力。</br>这里记录自己关于人工智能、量化交易、阅读思考与创业实践的探索历程。</br>我将这里视为自己的数字实验室与知识花园：记录问题，验证假设，沉淀经验，分享发现。</br>希望多年以后回望，这些文字不仅见证了技术浪潮的变迁，也记录了一名终身学习者持续成长的轨迹。</br></br><b>Build. Learn. Think. Repeat.</b></br><b>构建、学习、思考，然后再次出发</b>",
	lang: "zh_CN",
	ogLocale: "zh_CN",
	sortPostsByUpdatedDate: false,
	title: "Aivora Works",
	hideThemeCredit: false,
	profile: {
		name: "Kevin Lu",
		email: "john@example.com",
		github: "https://github.com/JXBOY2024",
		linkedin: "https://www.linkedin.com/in/example/",
		jobTitle: "Software Engineer",
		employer: "Example Inc.",
		employerUrl: "https://example.com",
		alumni: "Example University",
		avatar: "/avatar.png",
    x: "https://x.com/pandenlu",
    facebook: "https://facebook.com/KevinLu2020",
	},
	// Uncomment & fill in to enable Giscus comments on every post.
	// comments: {
	// 	repo: "your-handle/your-repo",
	// 	repoId: "...",
	// 	category: "General",
	// 	categoryId: "...",
	// },
	// Uncomment to enable analytics. Both providers load via Partytown.
	// analytics: {
	// 	googleAnalyticsId: "G-XXXXXXX",
	// 	goatcounterUrl: "https://your-handle.goatcounter.com/count",
	// },
};

export const menuLinks: { path: string; title: string }[] = [
	{
		path: "/",
		title: "Home",
	},
	{
		path: "/posts/",
		title: "Posts",
	},
	{
		path: "/showcase/",
		title: "Showcase",
	},
	{
		path: "/about/",
		title: "About",
	},
];

export const expressiveCodeOptions: AstroExpressiveCodeOptions = {
	styleOverrides: {
		borderRadius: "4px",
		codeBackground: ({ theme }) => (theme.type === "light" ? "#f0e9d6" : "#1a1715"),
		codeFontFamily:
			'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;',
		codeFontSize: "0.875rem",
		codeLineHeight: "1.7142857rem",
		codePaddingInline: "1rem",
		frames: {
			editorActiveTabBackground: ({ theme }) => (theme.type === "light" ? "#f0e9d6" : "#1a1715"),
			editorTabBarBackground: ({ theme }) => (theme.type === "light" ? "#ebe3cd" : "#15120e"),
			frameBoxShadowCssValue: "none",
			terminalBackground: ({ theme }) => (theme.type === "light" ? "#f0e9d6" : "#1a1715"),
			terminalTitlebarBackground: ({ theme }) => (theme.type === "light" ? "#ebe3cd" : "#15120e"),
		},
		uiLineHeight: "inherit",
	},
	themeCssSelector(theme, { styleVariants }) {
		if (styleVariants.length >= 2) {
			const baseTheme = styleVariants[0]?.theme;
			const altTheme = styleVariants.find((v) => v.theme.type !== baseTheme?.type)?.theme;
			if (theme === baseTheme || theme === altTheme) return `[data-theme='${theme.type}']`;
		}
		return `[data-theme="${theme.name}"]`;
	},
	themes: ["min-dark", "min-light"],
	useThemedScrollbars: false,
};
