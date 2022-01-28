module.exports = function(eleventyConfig) {

  /* Markdown-It 'markdownify' filter
    source: BradCoffield/kidlitconnection@e42a6de)
  */
    const md = require("markdown-it")({
      html: true,
      linkify: true,
      typographer: true,
    });
  
    eleventyConfig.addFilter("markdownify", (markdownString) =>
      md.render(markdownString)
    );

  eleventyConfig.addWatchTarget('./src/scss/');
  eleventyConfig.addPassthroughCopy('./src/css/');
  eleventyConfig.addPassthroughCopy('./src/assets/');

  eleventyConfig.setTemplateFormats([
    'md',
    'css',
    'jpg'
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
