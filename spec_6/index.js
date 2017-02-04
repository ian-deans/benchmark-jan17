const testSON = {
    "name": "William Shakespeare",
    "dead" : true,
    "works" : [
        {
            "name" : "Romeo and Juliet",
            "published" : 1591,
            "isAwesome" : true,
        },
        {
            "name" : "Richard III",
            "published" : 1592,
            "isAwesome" : false
        }
    ],
    "favoriteSites" : [
        "tumblr",
        "4chan"
    ]
}


const findKey = ( object, targetValue ) => {
  for ( let key in object ) {
    let currentValue = object[ key ]
    if ( key === targetValue ) {
      return [ key ]
    }
    if ( currentValue === targetValue ) {
      return [ currentValue, key ]
    }
    if ( typeof currentValue === 'object' ) {
      let path = findKey( currentValue, targetValue )
      if ( path ) {
        return path.concat( key )
      }
    }
  }
  return false
}

const makeKeyPath = keys => keys.reverse().join( ' -> ' )


console.log(
  makeKeyPath( findKey( testSON, 'tumblr' ) )
)
