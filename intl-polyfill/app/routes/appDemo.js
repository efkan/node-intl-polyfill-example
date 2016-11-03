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
  message: "You opened this page: "
}

let tr_TR = {
  message: "Bu sayfayı açtınız: "
}

// let your_lang = {
//   message: ''
// }

module.exports = {
  'en-US': en_US,
  'tr-TR': tr_TR,
  // ' ': your_lang
}
