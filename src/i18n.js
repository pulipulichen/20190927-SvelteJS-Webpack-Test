import { locale, dictionary, getClientLocale } from 'svelte-i18n'

// This is a store, so we can subscribe to its changes
locale.subscribe(() => {
  console.log('locale change')
})

// svelte-i18n exports a method to help getting the current client locale
locale.set(
  getClientLocale({
    // the fallback locale, if didn't find any
    fallback: 'en-US',
    // set to 'true' to check the 'window.navigator.language'
    navigator: true,
    // set the key name to look for a locale on 'window.location.search'
    // 'example.com?locale=en-US'
    search: 'lang',
    // set the key name to look for a locale on 'window.location.hash'
    // 'example.com#locale=en-US'
    hash: 'locale',
  }),
)


// Define a locale dictionary
dictionary.set({
  'zh-TW': {
    cats: '我有{n, number}隻貓',
  },
  'en-US': {
    cats: 'I have {n, number} {n,plural,one{cat}other{cats}}',
  },
})