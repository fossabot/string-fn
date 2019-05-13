import {
  toLower,
  join,
} from 'rambda'
import { words } from './words'
import { wordsX } from './wordsX'

export function snakeCase(str, extraLatin = false){
  const method = extraLatin ?
    wordsX :
    words

  return toLower(
    join(
      '_',
      method(str)
    )
  )
}
