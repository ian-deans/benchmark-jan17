import { identifiers } from './resources'
import converter from './dateConverter.js'

const dateFile = 'spec_7/dates.txt'
const dates = converter.getRawDates( dateFile )

const validFormats = converter.filterFormats( dates, identifiers.HYPHEN )

const invalidFormats = {
  slashes: converter.filterFormats( dates, identifiers.SLASH ),
  hashes: converter.filterFormats( dates, identifiers.HASH ),
  asterisks: converter.filterFormats( dates, identifiers.ASTERISK ),
  spaces: converter.filterFormats( dates, identifiers.SPACEY )
}

const mapInvalidFormatsToValid = invalidFormats => {

  invalidFormats.slashes.map( slashie =>
    validFormats.push( converter.makeDateString(
      converter.unwrapFormat( slashie, identifiers.SLASH ) )))

  invalidFormats.hashes.map( hashie =>
    validFormats.push( converter.makeDateString(
      converter.unwrapFormat( hashie, identifiers.HASH ) )))

  invalidFormats.asterisks.map( astie =>
    validFormats.push( converter.makeDateString(
      converter.unwrapFormat( astie, identifiers.ASTERISK ) )))

  invalidFormats.spaces.map( kevin =>
    validFormats.push( converter.makeDateString(
      converter.unwrapFormat( kevin, identifiers.SPACEY ) )))
}

mapInvalidFormatsToValid( invalidFormats )

console.log( validFormats )
