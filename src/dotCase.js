import {
  join,
  map,
  toLower,
} from 'rambda'
import { words } from './words'

export function dotCase(str){
  return join(
    '.',
    map(
      toLower,
      words(str)
    )
  )
}
