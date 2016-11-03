# Intl Polyfill on Node.js

This example shows how to apply polyfills to beautiful [Intl](https://github.com/andyearnshaw/Intl.js) package for the purpose of internationalization (i18n).

Intl package of [andyearnshaw](https://github.com/andyearnshaw) provides Javascript Intl object to Node.js (except collators).

Example contains two Node.js applications which are named as `app.js` and `static.js`.

The apps use three Yahoo Intl packages:
* [intl-locales-supported](https://github.com/yahoo/intl-locales-supported)
* [intl-messageformat](https://github.com/yahoo/intl-messageformat)
* [intl-relativeformat](https://github.com/yahoo/intl-relativeformat)

Also apps use a simple-logic translation by using `global` variables.

All of these bring the following beautiful functions with an object to the `Intl` object:
* Intl.NumberFormat
* Intl.DateTimeFormat
* Intl.MessageFormat
* Intl.RelativeFormat
* Intl.Translations
