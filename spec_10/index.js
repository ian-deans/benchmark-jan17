
const input =
`3
/bin:/usr/bin
/usr/bin:/usr/local/bin/
/usr/local/bin/log:/var/log-2017
/bin/log/lib`
const splitInput = input.split('\n')

const indexToResolve = parseInt( splitInput.shift() )

const pathToBeResolved = splitInput[ indexToResolve ]


console.log( pathToBeResolved )
