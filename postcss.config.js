class PurgeFromCss {
  static extract(content) {
    return ['legend'];
  }
}

module.exports = {
  plugins: {
    '@fullhuman/postcss-purgecss': {
      content: ['./themes/pragmaticus/layouts/**/*.html'],
      extractors: [
        {
          extractor: PurgeFromCss,
          extensions: ['css'],
        },
      ]
    },
  }
};