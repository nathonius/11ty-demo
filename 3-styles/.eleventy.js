export default function (config) {
  config.addPassthroughCopy({ "src/css/bamboo.min.css": "bamboo.min.css" });
  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "public",
    },
  };
}
