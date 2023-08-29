import lume from "lume/mod.ts";

import esbuild from "lume/plugins/esbuild.ts";
import sitemap from "lume/plugins/sitemap.ts";
import inline from "lume/plugins/inline.ts";
import minifyHTML from "lume/plugins/minify_html.ts";
import lightningCss from "lume/plugins/lightningcss.ts";
import metas from "lume/plugins/metas.ts";

const site = lume({
	/** required for sitemap() */
	location: new URL("http://medbi.sk"),
});

site
	.copy("assets")
	.copy("404.html")
	.remoteFile(
		"./_includes/water.css",
		"https://esm.sh/water.css@2.1.1/out/water.css",
	)
	.use(sitemap())
	.use(metas())
	.use(inline())
	.use(minifyHTML())
	.use(esbuild({
		extensions: [".js", ".ts"],
		options: { treeShaking: true, minify: true },
	}))
	/** also automaticly copy static files based on css import */
	.use(lightningCss({
		// includes: "./_includes",
		options: { minify: true },
	}));

export default site;
