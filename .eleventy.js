module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy("src/");
    eleventyConfig.addWatchTarget("src/style/");

    return {
        dir: {
            input: 'src',
            output: 'public',
        }
    }
}