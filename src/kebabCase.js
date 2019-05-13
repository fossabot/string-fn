import { words } from './words'
import {
  toLower,
  join,
} from 'rambda'
import { wordsX } from './wordsX'

export function kebabCase(str, extraLatin = false){
  const method = extraLatin ?
    wordsX :
    words

  return toLower(join(
    '-',
    method(str)
  ))
}
