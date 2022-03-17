module.exports = function(eleventyConfig) {

  eleventyConfig.addWatchTarget('./src/scss/');
  eleventyConfig.addPassthroughCopy('./src/css/');
  eleventyConfig.addPassthroughCopy('./src/assets/*.jpg');
  eleventyConfig.addPassthroughCopy('./src/assets/icons/*.svg');

  eleventyConfig.setTemplateFormats([
    'md',
    'css',
    'jpg',
    'svg'
  ])

  return {
    dir: {
      input: 'src',
    },
    markdownTemplateEngine: "liquid",
    dataTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid",
  };
};
