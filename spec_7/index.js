import { identifiers } from './resources'
import converter from './dateConverter.js'

const dateFile = 'spec_7/dates.txt'
const dates = converter.getRawDates( dateFile )
const validFormats = converter.getValidFormats( dates )

const invalidFormats = {
  slashies: converter.filterFormats( dates, identifiers.SLASH ),
  hashies: converter.filterFormats( dates, identifiers.HASH ),
  asteries: converter.filterFormats( dates, identifiers.ASTERISK ),
  spacies: converter.filterFormats( dates, identifiers.SPACEY )
}

const convertTheInvalid = obj => {

  invalidFormats.slashies.map( slashie =>
    validFormats.push( converter.makeDateString(
      converter.convertFormat( slashie, identifiers.SLASH ) )))

  invalidFormats.hashies.map( hashie =>
    validFormats.push( converter.makeDateString(
      converter.convertFormat( hashie, identifiers.HASH ) )))

  invalidFormats.asteries.map( asterie =>
    validFormats.push( converter.makeDateString(
      converter.convertFormat( asterie, identifiers.ASTERISK ) )))

  invalidFormats.spacies.map( kevin =>
    validFormats.push( converter.makeDateString(
      converter.convertFormat( kevin, identifiers.SPACEY ) )))
}

convertTheInvalid( invalidFormats )

console.log( validFormats )
