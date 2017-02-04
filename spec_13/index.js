import BrailleReader from './BrailleReader'

const zeBraille =
`O. O. O. O. O. .O O. O. O. OO
OO .O O. O. .O OO .O OO O. .O
.. .. O. O. O. .O O. O. O. ..`

const br = new BrailleReader( zeBraille )

console.log( br.translate() )
