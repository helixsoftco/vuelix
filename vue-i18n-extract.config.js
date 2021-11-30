module.exports = {
  /* 
    Required (Glob files pattern)
    Do not include the entire src directory because vue-i18n-extract doesn't have a way to exclude directories
   */
  vueFiles: './src/{pages,layouts,components}/**/*.vue',
  languageFiles: './locales/*.json',
  output: false,
  /* With this option activated, the new found translations are added to the lang files, otherwise just a report is displayed in the console */
  add: true,
  /* If this is true, the unused translations will be removed, however, we found that this feature activated doesn't work well when the add feature is also activated, therefore, they haave opposite values */
  remove: false,
  ci: false,
  /*
  The separator is set to "_", because we are using the original language as the translations keys, 
  therefore a code like $t("Hello. World!") would be translated into:
    {
      "Hello": {
        " World!": ""
      }
    }

    // Instead we want:
    {
      "Hello. World!": ""
    }
  */
  separator: '_',
}
