// PostCSS config file
const autoprefixer = require(`autoprefixer`);
const postcssNesting = require(`postcss-nesting`)
const postcssNano = require(`cssnano`)
const postcssSelectprLinter = require(`postcss-selector-lint`)

const liternConfig = {
    options: {
        excludedFiles: ['reset'], // Allows filenames to be excluded from linting.
    }
};

module.exports = () => ({
    plugins: [
        postcssNesting(),
        autoprefixer(),
        // postcssNano(['default', {
        //     discardComments: {
        //       removeAll: true,
        //     },
        //   }]),
        postcssSelectprLinter(liternConfig),
    ],
})