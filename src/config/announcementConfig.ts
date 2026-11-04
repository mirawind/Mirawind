import type { AnnouncementConfig } from "../types/announcementConfig";

export const announcementConfig: AnnouncementConfig = {
	// 公告标题，留空则走i18n默认标题
	title: "👋 Hello, there!",

	// 公告内容
	content:
		"欢迎来到我的个人博客！我是Mirawind，来自中科大少年班学院，目前大三，专业是数据科学与大数据技术。喜欢人工智能、编程、画画、音乐和运动，梦想能干点有趣好玩的事。Feel free to contact me ~",

	// 是否允许用户关闭公告
	closable: false,

	link: {
		// 启用链接
		enable: true,
		// 链接文本
		text: "了解更多",
		// 链接 URL
		url: "/about/",
		// 内部链接
		external: false,
	},
};
