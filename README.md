# INTL POLYFILL and IMPLEMENTATION     (Internationalization API) on NODE.JS
 
  In Node.js [Intl](https://github.com/nodejs/node/wiki/Intl) support is not enabled by default yet.
  Also Intl ICU files should be prepared and added in different ways according to the OS platform.
  Beacuse of that, in this example AndyEarnshaw's Intl module has been implemented. It provides a run-time and cross-platform solution.
  
## Setup

If Node.js has been installed on your OS, just download this repository, open a console in the downloaded folder and run the command of 
`npm install` to install related node modules.

Then run the command of `node app`, open your browser and visit _http://localhost:3000_.

To run `static` example open another console and run the command of `node static`. Then open your browser and visit _http://localhost:4000_.


This example shows how to apply polyfills to beautiful [Intl](https://github.com/andyearnshaw/Intl.js) package for the purpose of internationalization (i18n).

Intl package of [andyearnshaw](https://github.com/andyearnshaw) provides Javascript Intl object to Node.js (except collators).

Example contains two Node.js applications, `app.js` for to show complex example and `static.js` for to show a simple translation.

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



### app.js example screenshot

![launch](https://raw.githubusercontent.com/efkan/node-intl-polyfill-example/master/3000.png)


### static.js example screenshot (simple translation)

![launch](https://raw.githubusercontent.com/efkan/node-intl-polyfill-example/master/4000.png)
