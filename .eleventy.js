module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('css');
  eleventyConfig.addPassthroughCopy('assets');
  eleventyConfig.addLayoutAlias('recipes', 'layouts/recipe.liquid');

  eleventyConfig.setTemplateFormats([
    'md',
    'css',
    'jpg'
  ])

  return {
    dir: {
      input: 'src',
      includes: '_includes'
    }
  }
};
