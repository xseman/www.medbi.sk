import lume from "lume/mod.ts";

import esbuild from "lume/plugins/esbuild.ts";
import lightningCss from "lume/plugins/lightningcss.ts";
import sitemap from "lume/plugins/sitemap.ts";
import inline from "lume/plugins/inline.ts";

const site = lume({
	location: new URL("http://medbi.sk"),
});

site
	.copy("assets")
	/** needs location config, else localhost is the domain name */
	.use(sitemap())
	.use(inline())
	.use(esbuild({
		extensions: [".js", ".ts"],
	}))
	.use(lightningCss({
		options: { minify: true },
	}));

export default site;
