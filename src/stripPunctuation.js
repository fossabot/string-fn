import { replace } from 'rambda'
import { PUNCTUATIONS } from './internals/constants'

export function stripPunctuation(str){
  return replace(PUNCTUATIONS, '', str)
}
