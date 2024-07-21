import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import { InputPathToUrlTransformPlugin } from "@11ty/eleventy";

export default function (config) {
  config.addPassthroughCopy({ "src/css/bamboo.min.css": "bamboo.min.css" });
  config.addPlugin(eleventyImageTransformPlugin, {
    extensions: "html",
  });
  config.addPlugin(InputPathToUrlTransformPlugin);
  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "public",
    },
  };
}
