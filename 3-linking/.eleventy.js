import { InputPathToUrlTransformPlugin } from "@11ty/eleventy";

export default function (config) {
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
