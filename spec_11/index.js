
const findFactorial = number => {
  let sequenceSum = 1

  for ( let factorial = 1; factorial <= number; factorial++ ) {
    sequenceSum *= factorial
    if ( sequenceSum === number ) {

      return `${number} = ${factorial}!`
    }
  }
  return `${n} NONE`
}

console.log( findFactorial( 720 ) )
