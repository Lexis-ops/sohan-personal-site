module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "admin": "admin" });

  eleventyConfig.addCollection("essays", (collectionApi) => {
    return collectionApi.getFilteredByGlob("src/essays/*.md").sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("documents", (collectionApi) => {
    return collectionApi.getFilteredByGlob("src/documents/*.md").sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("testimonials", (collectionApi) => {
    return collectionApi.getFilteredByGlob("src/testimonials/*.md").sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addFilter("dateShort", (dateObj) => {
    if (!dateObj) return "";
    const d = new Date(dateObj);
    return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
  });

  eleventyConfig.addFilter("limit", (arr, n) => (arr || []).slice(0, n));

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
  };
};
