import {
  join,
  map,
  toLower,
} from 'rambda'
import { words } from './words'
import { wordsX } from './wordsX'

export function dotCase(str, extraLatin = false){
  const method = extraLatin ?
    wordsX :
    words

  return join(
    '.',
    map(
      toLower,
      method(str)
    )
  )
}
