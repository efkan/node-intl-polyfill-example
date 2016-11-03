var express = require('express'),
		router = express.Router();

router.get('/', function(req, res, next){
  // Choosing 'en-US' as default
  var locale = req.acceptsLanguages(appLocales) || 'en-US';
  console.log("static locale has been determined as ", locale)

  demoData = {
		messageEn: Intl.Translations.routes.staticDemo['en-US'].message,
		messageTr: Intl.Translations.routes.staticDemo['tr-TR'].message,
		message: "", // in your language
    locale: locale
  }

  res.render('demo', demoData)
})

module.exports = router
