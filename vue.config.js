module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    },
    'style-resources-loader': {
      patterns: [
        'respresso/colors.scss'
      ],
      preProcessor: 'scss'
    }
  }
}
