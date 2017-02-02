import fs from 'fs'

const formatIdentifiers = {
  HASH: '#',
  SLASH: '/',
  ASTERISK: '*',
  SPACE: ' ',
  HYPHEN: '-'
}

const monthAbrrvs = {
  Jan: '01',
  Feb: '02',
  Mar: '03',
  Apr: '04',
  May: '05',
  Jun: '06',
  Jul: '07',
  Aug: '08',
  Sep: '09',
  Oct: '10',
  Nov: '11',
  Dec: '12'
}

const getWholeYear = twoDigits =>
  parseInt( twoDigits ) > 49 ? '19'+twoDigits : '20'+twoDigits

const filterFormats = identifier =>
  raw_date_array.filter( date => date.indexOf(identifier) > -1 )

const convertSlashies = slashiesArray => {
  return slashiesArray.reduce( ( theConverts, slashie )=>{
    const values = slashie.split( formatIdentifiers.SLASH )
    console.log( `${getWholeYear(values[2])}-${values[0]}-${values[1]}` )
    return theConverts
  }, [] )
}



const raw_dates = fs.readFileSync( 'spec_7/dates.txt', 'utf8' )
const raw_date_array = raw_dates.split('\n')

const standardFormat = filterFormats( formatIdentifiers.HYPHEN )

const slashies = filterFormats( formatIdentifiers.SLASH )
const hashies = filterFormats( formatIdentifiers.HASH )
const asteries = filterFormats( formatIdentifiers.ASTERISK )
const spacies = filterFormats( formatIdentifiers.SPACE )

convertSlashies( slashies )




// console.log( standardFormat )


/*
has:
  #
    MM/YY/DD
  *
    DD/MM/YYYY
  /
    mm/dd/yy
  \s
    month dd, yy || month, dd, yyyy


change to: yyyy-mm-dd
*/
