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
  // write here the translations regarding the main static.js (the root of this application) file.
}

let tr_TR = {

}


module.exports = {
  'en-US': en_US,
  'tr-TR': tr_TR,
  routes: require('./routes'),
}
