import type { FeedSubscription } from "../types/subscriptionConfig";

// 独立订阅列表配置（不展示在友链页面，但文章动态会聚合到朋友圈 /fcircle）
// 支持协议：RSS 2.0 / 1.0、Atom、JSON Feed
export const subscriptionConfig: FeedSubscription[] = [
	{
		title: "阮一峰的网络日志",
		siteurl: "https://www.ruanyifeng.com/blog/",
		feedUrl: "https://www.ruanyifeng.com/blog/atom.xml",
		imgurl: "https://www.ruanyifeng.com/favicon.ico",
		desc: "每周五发布科技爱好者周刊",
		tags: ["周刊", "技术"],
		enabled: true,
	},
	{
		title: "Bojie Li",
		siteurl: "https://01.me/",
		feedUrl: "https://01.me/atom.xml",
		imgurl: "https://01.me/favicon.ico",
		enabled: true,
	},
	{
		title: "时歌的博客",
		siteurl: "https://www.lapis.cafe/",
		feedUrl: "https://www.lapis.cafe/rss.xml",
		imgurl: "https://www.lapis.cafe/apple-icon.png",
		enabled: true,
	},
	{
		title: "Axi's Blog",
		siteurl: "https://axi404.top/",
		feedUrl: "https://axi404.top/rss.xml",
		imgurl: "https://axi404.top/favicon/favicon.ico",
		enabled: true,
	},
	{
		title: "MingBlog",
		siteurl: "https://mingblog.site/",
		feedUrl: "https://mingblog.site/rss.xml",
		imgurl: "https://mingblog.site/apple-touch-icon.png",
		enabled: true,
	},
	{
		title: "Finneas's",
		siteurl: "https://blog.econfinny.com/",
		feedUrl: "https://blog.econfinny.com/atom.xml",
		imgurl: "https://blog.econfinny.com/img/favicon.png",
		enabled: true,
	},
	{
		title: "Zowely",
		siteurl: "https://www.lansganbs.cn/",
		feedUrl: "https://www.lansganbs.cn/rss.xml",
		imgurl: "https://www.lansganbs.cn/favicon/favicon-light-32.png",
		enabled: true,
	},
];

// 获取所有启用的订阅源
export const getEnabledSubscriptions = (): FeedSubscription[] => {
	return subscriptionConfig.filter((sub) => sub.enabled !== false);
};
