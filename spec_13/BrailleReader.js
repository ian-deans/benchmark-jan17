import alphabet from './alphabet'

export default class BrailleReader {
  constructor( brailleString ) {
    this.braille = brailleString,
    this.alphabet = alphabet,
    this.alphabetKey = Object.keys( this.alphabet )
  }

  getLetters() {
    const threeLines = this.braille.split('\n')
    const topLine = threeLines[0].split(' ')
    const midLine = threeLines[1].split(' ')
    const bottomLine = threeLines[2].split(' ')
    return topLine.reduce( (acc, element, x)=>{
      acc.push( [ topLine[x], midLine[x], bottomLine[x] ] )
      return acc
    }, [] )
  }

  lettersAreEqual( letter, letterArray ){
    return this.alphabet[ letter ].join() === letterArray.join()
  }

  translate() {
    return this.getLetters()
      .map( letterArray => {
          return this.alphabetKey.filter( letter => {
            return this.lettersAreEqual( letter, letterArray )
          })
        })
      .join().replace(/[,]/g, '')
  }

}
