export default class ScrabBag {
  constructor() {
    this.tiles = {
      A: { count: 9 },
      B: { count: 2 },
      C: { count: 2 },
      D: { count: 4 },
      E: { count: 12 },
      F: { count: 2 },
      G: { count: 3 },
      H: { count: 2 },
      I: { count: 9 },
      J: { count: 1 },
      K: { count: 1 },
      L: { count: 4 },
      M: { count: 2 },
      N: { count: 6 },
      O: { count: 8 },
      P: { count: 2 },
      Q: { count: 1 },
      R: { count: 6 },
      S: { count: 4 },
      T: { count: 6 },
      U: { count: 4 },
      V: { count: 2 },
      W: { count: 2 },
      X: { count: 1 },
      Y: { count: 2 },
      Z: { count: 1 },
      _: { count: 2 }
    }
  }

  removeTiles( tileString ) {
    tileString.split('').forEach( tile => this.tiles[ tile ].count-- )
  }

  getHighestCount() {
    return Object.keys( this.tiles )
      .reduce( ( theCount, tile ) => {
        if ( this.tiles[ tile ].count > theCount ) {
          return theCount = this.tiles[ tile ].count
        }
        return theCount
      }, 0 )
  }

  stackTiles() {
    const tileStacks = []
    for ( let x = this.getHighestCount(); x >= 0; x-- ) {
      let count = Object.keys( this.tiles ).filter( tileFace =>
        this.tiles[ tileFace ].count === x )
      tileStacks.push( count )
    }
    return tileStacks
  }

  tileCount() {
    const tileCount = []
    this.stackTiles().map( ( tileList, index )=>{
      if ( ! tileList.length < 1 ) {
        tileCount.push(
          `${this.tiles[tileList[0]].count}: ${tileList.map( tile => tile )}`
          )
      return tileCount
      }
    })
    return tileCount
  }

}
