import readline from 'readline-sync'

const EXIT = 'exit'

const theTruth = Math.floor( Math.random() * 100 ) + 1

const isValid = input => {
  return parseInt( input ) === true ||
    ( parseInt( input ) < 101 && parseInt( input ) > 0 )
}

const getInput = () => {
  let guess
  do {
    guess = readline.question( 'A number between 1 and 100 please: ' )
    if ( guess === EXIT ) {
      return guess
    }
  } while( !isValid( guess ) )

  return parseInt( guess )
}

const checkForWin = userGuess => {
  if ( userGuess === theTruth ) {
    console.log('You Win!')
  } else {
    let difference = theTruth - userGuess
    if ( difference < 0 ) {
      console.log( 'You guessed too high!' )
    } else {
      console.log( 'Your guess was too low!' )
    }
  }
}

const numberGame = () => {
  let userGuess = getInput()
  if ( userGuess === EXIT ){
    return
  } else {
    checkForWin( userGuess )
  }
}

numberGame()
