import { existsSync } from "node:fs";

/**
 * 构建产物根目录（构建后脚本在这里改写 HTML / 字体 / 资源，必须是最终会被部署的那一份）。
 *
 * - Cloudflare（CF_WORKERS 环境变量启用 @astrojs/cloudflare）：Astro 把静态站点输出到 dist/client。
 * - Vercel（默认，@astrojs/vercel）：Astro 先输出到 dist/client，适配器在 build:done 时再复制到
 *   .vercel/output/static，Vercel 部署的是后者。若仍改 dist/client，所有改动都不会上线。
 *   适配器每次构建前会清空 .vercel/output，不会残留旧产物。
 * - 无 adapter 的纯静态构建：输出到 dist。
 */
export function resolveSiteRoot(): string {
	if (process.env.CF_WORKERS) return "dist/client";
	if (existsSync(".vercel/output/static")) return ".vercel/output/static";
	return existsSync("dist/client") ? "dist/client" : "dist";
}
