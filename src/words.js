import { match } from 'rambda'
import { WORDS } from './internals/constants'

export function words(str){
  return match(WORDS, str)
}
