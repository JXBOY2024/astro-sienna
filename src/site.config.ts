import type { SiteConfig } from "@/types";
import type { AstroExpressiveCodeOptions } from "astro-expressive-code";

export const siteConfig: SiteConfig = {
	author: "Your Name",
	date: {
		locale: "en-US",
		options: {
			day: "numeric",
			month: "short",
			year: "numeric",
		},
	},
	description:
		"技术终将迭代，工具终将更新，而真正能够沉淀下来的，往往是思考的过程。</br>这个 Blog 诞生于持续学习与实践的过程中，主要记录我在人工智能、量化交易、软件开发以及阅读思考中的所见、所学与所悟。这里没有刻意包装的成功故事，更多的是对问题的拆解、对方法的验证，以及对未知领域的探索。</br></br>在 AI 领域，我关注大模型、Agent、自动化工作流、AI 产品设计与创业实践，尝试理解技术演进背后的逻辑，并探索其在现实世界中的应用价值。</br>在量化交易方面，我记录市场观察、概率思维、策略研究、数据分析以及博弈论相关的学习过程，希望从纷繁复杂的信息中寻找更加理性的决策框架。</br>阅读则是另一种形式的研究。从历史、经济学、心理学，到商业、科技与哲学，每一本书都像一次跨越时空的对话。这里会留下那些值得反复回味的观点，以及它们对现实世界的映射与启发。</br>除此之外，我也会分享个人开发项目、技术实验和创业想法。从一个灵感的诞生，到原型设计、产品验证，再到实际落地，希望完整记录从「想法」到「实践」的全过程。</br>这个站点更像是一座持续建设中的数字花园（Digital Garden），而非传统意义上的博客。每一篇文章都是一个思考节点，它们彼此连接、不断生长，并随着认知的更新而持续演化。</br>如果你同样对 AI、量化交易、技术创新、商业思考或终身学习感兴趣，希望这里的内容能够为你带来一些启发，也欢迎与你一起交流和成长。</br>保持好奇，持续学习，尊重概率，相信长期积累的力量。",
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
    X: "https://x.com/pandenlu",
    FaceBook: "https://facebook.com/Kevinlu2020",
		jobTitle: "Software Engineer",
		employer: "Example Inc.",
		employerUrl: "https://example.com",
		alumni: "Example University",
		avatar: "/avatar.png",
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
