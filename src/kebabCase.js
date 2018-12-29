import { words } from './words'
import {
  toLower,
  join,
} from 'rambda'

export function kebabCase(str){
  return toLower(join(
    '-',
    words(str)
  ))
}
