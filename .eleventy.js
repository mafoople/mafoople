module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy("src/style/");
    eleventyConfig.addWatchTarget("src/style/");

    return {
        dir: {
            input: 'src',
            output: 'public',
        }
    }
}