import { replace } from 'rambda'

export function trim(str){
  return replace(/\s+/g, ' ', str).trim()
}
