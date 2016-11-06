var express = require('express'),
		router = express.Router();

router.get('/', function(req, res, next){
  console.log("static locale has been determined as ", req.locale)

  demoData = {
		messageEn: Intl.Translations.routes.staticDemo['en-US'].message,
		messageTr: Intl.Translations.routes.staticDemo['tr-TR'].message,
		message: "", // in your language
    locale: req.locale
  }

  res.render('demo', demoData)
})

module.exports = router
