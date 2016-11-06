var express = require('express'),
		router = express.Router();

router.get('/', function(req, res, next){
	console.log("app locale has been determined as ", req.locale)

  demoData = {
    number: 123.456,
    date: new Date(),
		messageEn: Intl.Translations.routes.appDemo['en-US'].message,
		messageTr: Intl.Translations.routes.appDemo['tr-TR'].message,
		message: "", // in your language
		fiveHundredSecondsAgo: (new Date().valueOf() - 500000),
    locale: req.locale
  }

  res.render('demo', demoData)
})

module.exports = router
