module.exports = function(eleventyConfig) {

  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_alias: 'excerpt',
    excerpt_separator: "<!-- excerpt -->"
  });

  eleventyConfig.addWatchTarget('./src/scss/');
  eleventyConfig.addPassthroughCopy('./src/css/');

  eleventyConfig.setTemplateFormats([
    'md',
    'css',
    'jpg'
  ])

  return {
    dir: {
      input: 'src'
    }
  }
};
