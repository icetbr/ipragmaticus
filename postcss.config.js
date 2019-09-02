class PurgeFromCss {
  static extract(content) {
    return ['legend'];
  }
}

module.exports = {
  // plugins: [postcss([require('postcss-uncss')])]
  plugins: {
    'postcss-uncss': {
      html: ['./themes/pragmaticus/layouts/**/*.html'],
    }
    // '@fullhuman/postcss-purgecss': {
    //   content: ['./themes/pragmaticus/layouts/**/*.html'],
    //   extractors: [
    //     {
    //       extractor: PurgeFromCss,
    //       extensions: ['css'],
    //     },
    //   ]
    // },
  }
};