import ScrabBag from './ScrabBag'

const Bag = new ScrabBag()
const playedTiles = "AERETOXMYCNS_B"

Bag.removeTiles( playedTiles )
console.log( Bag.tileCount() )
