var express = require('express')
var router = express.Router()
var session = require('express-session') // to generate session object
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser') // to get body inputs variables

/*###############################################################################################################################
  - INTL POLYFILLING and IMPLEMENTATION (Internationalisation API) -
  NOTE: In Node.js [Intl](https://github.com/nodejs/node/wiki/Intl) support is not enabled by default.
  Also Intl ICU files should be prepared and added in different ways according to the OS platform.
  Beacuse of that, Intl module is used. It provides a run-time and cross-platform solution.
 *********************************************************/

var areIntlLocalesSupported = require('intl-locales-supported')

/* DEFINING GLOBAL VARIABLES */

global.appLocales = ["en-US", "tr-TR", /*, YOUR_LANG */];

if (global.Intl) {
    // Determine if the built-in `Intl` has the locale data we need.
    if (!areIntlLocalesSupported(appLocales)) {
        // `Intl` exists, but it doesn't have the data we need, so load the
        // polyfill and replace the constructors with need with the polyfill's.
        var IntlPolyfill = require('intl');
        Intl.NumberFormat   = IntlPolyfill.NumberFormat;
        Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;
    }
} else {
    // No `Intl`, so use and load the polyfill.
    global.Intl = require('intl');
}

/**
 * MessageFormat provides to show conditional message with a given parameter
 * https://github.com/yahoo/intl-messageformat#how-it-works
 * It takes three parameters:
 * @param Message {String | AST} String message (or pre-parsed AST) that serves as formatting pattern.
 * @param Locales {String | String[]} A string with a BCP 47 language tag, or an array of such strings
 * @param Formats {Object} Optional object with user defined options for format styles.
 * @return {String}
 * @public
 * MessageFormat(message, locales, [formats])
 ********************/
global.Intl.MessageFormat = require('intl-messageformat');
global.Intl.RelativeFormat = require('intl-relativeformat');
// HERE IS APP.JS - ADDING ONLY APP TRANSLATIONS
global.Intl.Translations = require('./intl-polyfill').app
// ADDING COMMON TRANSLATIONS - IF YOU SHARE SOME COMMON FILES WITH OTHER APPS
global.Intl.Translations.common = require('./intl-polyfill').common
/*###############################################################################################################################*/


// CREATING AND SETTING THE EXPRESS APP
var app = express()

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views/app');

app.use(bodyParser.json({limit: '5mb'})) // to provide JSON-encoded body
app.use(bodyParser.urlencoded({ extended: true, limit: '5mb' })) // to provide URL-encoded body

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

// ADDING LOCALE INFO TO THE REQUEST OBJECT
app.use(function (req,res,next) {
  // Choosing 'en-US' as default
  req.locale = req.acceptsLanguages(appLocales) || 'en-US'
  next()
})

// ADDING ROUTES
app.use(require('./routes/appDemo'))

// STARTING TO LISTEN
app.listen(3000, function() {
	console.log('app is listening HTTP port 3000')
})
