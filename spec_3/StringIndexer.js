export default class StringIndexer {

  static trimSymbols( word ) {
    return word.replace( /[.;:\-,=/\\?<>"'+!@#$%^&*(()]/, "" )
  }

  static getWord( phrase, index ) {
    let words = phrase.split(' ')
    if ( index < 1 || index > words.length ) {
      return ''
    } else {
      return StringIndexer.trimSymbols( words[ index - 1 ] )
    }
  }
}
