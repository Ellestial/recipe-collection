module.exports = function(eleventyConfig) {

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
