import lume from "lume/mod.ts";

import esbuild from "lume/plugins/esbuild.ts";
import inline from "lume/plugins/inline.ts";
import lightningCss from "lume/plugins/lightningcss.ts";
import metas from "lume/plugins/metas.ts";
import minifyHTML from "lume/plugins/minify_html.ts";
import nunjucks from "lume/plugins/nunjucks.ts";
import sitemap from "lume/plugins/sitemap.ts";

const site = lume({
	/** required for sitemap() */
	location: new URL("http://medbi.sk"),
});

site.copy("assets")
	.copy("404.html")
	.remoteFile(
		"./_includes/tacit.css",
		"https://esm.sh/tacit-css@1.7.1/dist/tacit-css-1.7.1.css",
	)
	.use(nunjucks())
	.use(sitemap())
	.use(metas())
	.use(inline())
	.use(minifyHTML())
	.use(
		esbuild({
			extensions: [".js", ".ts"],
			options: { treeShaking: true, minify: true },
		}),
	)
	/** also automaticly copy static files based on css import */
	.use(
		lightningCss({
			// includes: "./_includes",
			options: { minify: true },
		}),
	);

export default site;
