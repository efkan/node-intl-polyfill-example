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
  num_photos: 'You have {numPhotos, plural, ' +
      '=0 {no photos.}' +
      '=1 {one photo.}' +
      'other {# photos.}}',
  hello_world: 'Hello world!',
  fiveHSAgoMessage: 'The date of five hundred seconds ago =>',
}

let tr_TR = {
  num_photos: '{ numPhotos, plural, ' +
      '=0 {hiç fotoğrafın yok}' +
      '=1 {bir fotoğrafın var.}' +
      'other {# adet fotoğrafın var.} }',
  hello_world: 'Merhaba dünya!',
  fiveHSAgoMessage: 'Beşyüz saniye öncesinin tarihi =>',
}

// let your_lang = {
//   num_photos: '{ numPhotos, plural, ' +
//       '=0 {...}' +
//       '=1 {...}' +
//       'other {# ....} }',
//   hello_world: '....!',
//   fiveHSAgoMessage: '...... =>',
// }

module.exports = {
  'en-US': en_US,
  'tr-TR': tr_TR,
  // '': your_lang
}
