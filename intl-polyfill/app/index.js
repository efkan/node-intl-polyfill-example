/******************
 * SAMPLE MESSAGES;
 * message: 'You have {numPhotos, plural, =0 {no photos.} =1 {one photo.} other {# photos.}}'
 * message: 'The message has: {0}, {1}, and {2} values.'
 * FORMATING THE MESSAGES;
 * new Intl.MessageFormat(message, 'en-US').format({numPhotos: 1000})
 *    => 'You have 1,000 photos.'
 * new Intl.MessageFormat(message, 'en-US').format(['one','two','three'])
 *    => 'The message has: one, two, and three values.'
/***********************************************/

let en_US = {
  /*************
   *  COMMON
  /*************/
  ok: 'OK',
	yes: 'Yes',
	no: 'No',
	cancel: 'Cancel',
	successful: 'Successful',
  error: 'Error',
  /*************
   *  MESSAGES
  /*************/
  hello: 'hello',
  // write here the translations regarding the main app.js (the root of this application) file.
}

let tr_TR = {
  /*************
   *  COMMON
  /*************/
	ok: 'Tamam',
	yes: 'Evet',
	no: 'Hayır',
	cancel: 'İptal',
	successful: 'Başarılı',
  error: 'Hata',
  /*************
   *  MESSAGES
  /*************/
  hello: 'merhaba',
}

module.exports = {
  'en-US': en_US,
  'tr-TR': tr_TR,
  views: require('./views'),
  routes: require('./routes'),
}
