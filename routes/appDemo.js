var express = require('express'),
		router = express.Router();

router.get('/', function(req, res, next){
  // Choosing 'en-US' as default
  var locale = req.acceptsLanguages(appLocales) || 'en-US';
	console.log("app locale has been determined as ", locale)

  demoData = {
    number: 123.456,
    date: new Date(),
		messageEn: Intl.Translations.routes.appDemo['en-US'].message,
		messageTr: Intl.Translations.routes.appDemo['tr-TR'].message,
		message: "", // in your language
		fiveHundredSecondsAgo: (new Date().valueOf() - 500000),
    locale: locale
  }

  res.render('demo', demoData)
})

module.exports = router
