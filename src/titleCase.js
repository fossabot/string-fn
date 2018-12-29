import {
  join,
  map,
  head,
  toUpper,
  toLower,
  tail,
} from 'rambda'
import { words } from './words'

export function titleCase(str){
  return join(
    ' ',
    map(
      val => `${ toUpper(head(val)) }${ toLower(tail(val)) }`,
      words(str)
    )
  )
}
