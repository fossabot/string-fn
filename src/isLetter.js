import { test } from 'rambda'
import { WORDS_EXTENDED } from './internals/constants'

export function isLetter(char){
  return test(WORDS_EXTENDED, char)
}
