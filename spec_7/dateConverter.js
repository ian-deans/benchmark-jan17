import { identifiers, months } from './resources'
import fs from 'fs'

const converter = {

  getRawDates: filePath => {
    const raw_dates = fs.readFileSync( filePath, 'utf8' )
    return raw_dates.split('\n')
  },

  trimCommas: word => word.replace( /,/g, '' ),

  getWholeYear: twoDigits =>
    parseInt( twoDigits ) > 49 ? '19'+twoDigits : '20'+twoDigits,

  filterFormats: (date_array, identifier) =>
    date_array.filter( date => date.indexOf(identifier) > -1 ),

  makeDateString: valuesObj =>
    `${valuesObj.year}-${valuesObj.month}-${valuesObj.day}`,

  getValidFormats: dates => {
    return converter.filterFormats( dates, identifiers.HYPHEN )
  },

  convertFormat: ( date, identifier ) => {
    const values = date.split( identifier )

    switch ( identifier ) {
      case identifiers.SLASH:
        return {
          year: converter.getWholeYear( values[2] ),
          month: values[0],
          day: values[1]
        }

      case identifiers.HASH:
        return {
          year: converter.getWholeYear( values[1] ),
          month: values[0],
          day: values[2]
        }

      case identifiers.ASTERISK:
        return {
          year: values[2],
          month: values[1],
          day: values[0]
        }

      case identifiers.SPACEY:
        return {
          year: values[2].length > 2
            ? values[2]
            : converter.getWholeYear( values[2] ),
          month: months[values[0]],
          day: values[1]
        }
    }
  }
}

export default converter
