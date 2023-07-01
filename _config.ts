import lume from "lume/mod.ts";
import lightningCss from "lume/plugins/lightningcss.ts";
import esbuild from "lume/plugins/esbuild.ts";

const site = lume();

site
	.copy("assets")
	.use(esbuild({
		extensions: [".js", ".ts"],
	}))
	.use(lightningCss({
		options: { minify: true },
	}));

export default site;
