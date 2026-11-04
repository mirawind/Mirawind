import type { FriendLink, FriendsPageConfig } from "../types/friendsConfig";

// 可以在src/content/spec/friends.md中编写友链页面下方的自定义内容

// 友链页面配置
export const friendsPageConfig: FriendsPageConfig = {
	// 页面标题，如果留空则使用 i18n 中的翻译
	title: "",

	// 页面描述文本，如果留空则使用 i18n 中的翻译
	description: "",

	// 是否显示底部自定义内容（friends.mdx 中的内容）
	showCustomContent: true,

	// 是否显示评论区，需要先在commentConfig.ts启用评论系统
	showComment: true,

	// 是否开启随机排序配置，如果开启，就会忽略权重，构建时进行一次随机排序
	randomizeSort: true,
};

// 友链配置
export const friendsConfig: FriendLink[] = [
	{
		title: "Bauklotze's World",
		imgurl: "https://bauklotze.top/avatar/avatar.png",
		desc: "墙壁的那边, 有大海",
		siteurl: "https://www.bauklotze.top/",
		tags: [],
		weight: 1,
		enabled: true,
	},
	{
		title: "Joker Chen",
		imgurl: "https://stardust-math.github.io/assets/images/favicon.png",
		desc: "Ich muß fort, ich muß reisen, ich muß in die Freiheit.",
		siteurl: "https://stardust-math.github.io",
		tags: [],
		weight: 1,
		enabled: true,
	},
	{
		title: "Leisuer",
		imgurl: "https://avatars.githubusercontent.com/u/75885780?v=4",
		desc: "猛志逸四海，骞翮思远翥",
		siteurl: "https://blowingwind.top/",
		tags: [],
		weight: 1,
		enabled: true,
	},
	{
		title: "Liushenwuzhu-Alpaca",
		imgurl: "https://liushenwuzhu-alpaca.github.io/avatar.jpg",
		desc: "记录计算机专业学习、项目实践与日常思考",
		siteurl: "https://liushenwuzhu-alpaca.github.io",
		tags: [],
		weight: 1,
		enabled: true,
	},
	{
		title: "LyerNest | 空明流",
		imgurl: "https://avatars.githubusercontent.com/u/62243836?v=4",
		desc: "lylighte 的个人博客",
		siteurl: "https://lylighte.cc/",
		tags: [],
		weight: 1,
		enabled: true,
	},
	{
		title: "mmdustc",
		imgurl: "https://avatars.githubusercontent.com/u/134723501?v=4",
		desc: "I am not only an AI researcher, but also a geek for the world.",
		siteurl: "https://mmdustc.top",
		tags: [],
		weight: 1,
		enabled: true,
	},
	{
		title: "Spr_Aachen's Blog",
		imgurl: "https://blog.spr-aachen.com/assets/images/avatar.png",
		desc: "Spr_Aachen's Personal Blog",
		siteurl: "https://blog.spr-aachen.com",
		tags: [],
		weight: 1,
		enabled: true,
	},
	{
		title: "一纸月光",
		imgurl: "https://avatars.githubusercontent.com/u/195516213",
		desc: "一纸月光，一隅天地",
		siteurl: "https://www.tangyuan0821.cn/",
		tags: [],
		weight: 1,
		enabled: true,
	},
	{
		title: "Twilight Docs",
		imgurl: "https://docs.twilight.spr-aachen.com/twilight.png",
		desc: "Twilight User Manual",
		siteurl: "https://docs.twilight.spr-aachen.com",
		tags: [],
		weight: 1,
		enabled: true,
	},
	{
		title: "Kisaragi's World",
		imgurl: "https://avatars.githubusercontent.com/u/78963949?v=4",
		desc: "This is the only immortality you and I may share.",
		siteurl: "https://kisaragi-irona.top/",
		tags: [],
		weight: 1,
		enabled: true,
	},
	{
		title: "jaceywei 的主页",
		imgurl: "https://jaceywei.github.io/images/avatar.jpg",
		desc: "",
		siteurl: "https://jaceywei.github.io/",
		tags: [],
		weight: 1,
		enabled: true,
	},
	{
		title: "xinchengo 的博客",
		imgurl: "https://avatars.githubusercontent.com/u/11454169",
		desc: "xinchengo 的个人博客",
		siteurl: "https://xinchengo.github.io/blog-zh/",
		tags: [],
		weight: 1,
		enabled: true,
	},
];

// 获取启用的友链并进行排序
export const getEnabledFriends = (): FriendLink[] => {
	const friends = friendsConfig.filter((friend) => friend.enabled);

	if (friendsPageConfig.randomizeSort) {
		return friends.sort(() => Math.random() - 0.5);
	}

	return friends.sort((a, b) => b.weight - a.weight);
};
