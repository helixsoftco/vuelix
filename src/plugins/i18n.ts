import { createI18n } from 'vue-i18n'

export const DEFAULT_LANGUAGE = 'en'
export const BROWSER_LANGUAGE = navigator?.language?.split('-')[0]

function getMessages() {
  // eslint-disable-next-line
  const messages: any = {}
  // See: https://vitejs.dev/guide/features.html#glob-import
  const localeFiles = import.meta.globEager('../../locales/*.json')
  for (const path in localeFiles) {
    // E.g: ../../locales/de.json
    const pathParts = path.split('/')
    // E.g: de.json -> de
    const locale = pathParts[pathParts.length - 1].slice(0, -5)
    if (locale === DEFAULT_LANGUAGE) {
      // For the default language the keys are the same as the value
      // eslint-disable-next-line
      const defaultLangMessages: any = {}
      for (const key in localeFiles[path].default) {
        defaultLangMessages[key] = key
      }
      messages[locale] = defaultLangMessages
    } else {
      // E.g: "de" => { "Hello": "Hallo" }
      messages[locale] = localeFiles[path].default
    }
  }
  console.log(messages)
  return messages
}

const messages = getMessages()
const i18n = createI18n({
  locale: Object.keys(messages).includes(BROWSER_LANGUAGE) ? BROWSER_LANGUAGE : DEFAULT_LANGUAGE,
  fallbackLocale: DEFAULT_LANGUAGE,
  legacy: true, // Enables $t(), $tc(), etc in templates
  messages,
})

export default i18n
