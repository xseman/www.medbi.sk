import lume from "lume/mod.ts";

import esbuild from "lume/plugins/esbuild.ts";
import sitemap from "lume/plugins/sitemap.ts";
import inline from "lume/plugins/inline.ts";
import minifyHTML from "lume/plugins/minify_html.ts";
import lightningCss from "lume/plugins/lightningcss.ts";

const site = lume({
	location: new URL("http://medbi.sk"),
});

site
	.copy("assets")
	/** needs location config, else localhost is the domain name */
	.use(sitemap())
	.use(inline())
	.use(minifyHTML())
	.use(esbuild({
		extensions: [".js", ".ts"],
		options: { treeShaking: true },
	}))
	/** also automaticly copy static files based on css import */
	.use(lightningCss({
		options: { minify: true },
	}));

export default site;
