
const disemvowel = phrase => {
  return phrase.replace( /[aeiou\s]/g, "" )
}

console.log(
  disemvowel( 'where does he get all those wonderful toys' )
  )
