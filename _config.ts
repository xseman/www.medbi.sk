import lume from "lume/mod.ts";
import lightningCss from "lume/plugins/lightningcss.ts";

const site = lume();

site.copy("assets")

site.use(lightningCss({ 
	options: { minify: true },
}));

export default site;
