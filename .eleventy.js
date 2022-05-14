module.exports = function(eleventyConfig) {

  eleventyConfig.addWatchTarget('./src/scss/');
  eleventyConfig.addPassthroughCopy('./src/css/');
  eleventyConfig.addPassthroughCopy('./src/assets/*.jpg');
  eleventyConfig.addPassthroughCopy('./src/assets/icons/*.svg');
  eleventyConfig.addPassthroughCopy('./src/js/script.js');

  eleventyConfig.setTemplateFormats([
    'md',
    'css',
    'jpg',
    'svg'
  ])

  eleventyConfig.addCollection("recipes", function (collection) {
    return collection.getFilteredByGlob('./src/recipes/*.md');
  });

  // config.addCollection('recipes', collection => {
  //     return [...collection.getFilteredByGlob('./src/recipes/*.md')];
  // });

  return {
    dir: {
      input: 'src',
    },
    markdownTemplateEngine: "liquid",
    dataTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid",
  };
};
