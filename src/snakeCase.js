import {
  toLower,
  join,
} from 'rambda'
import { words } from './words'

export function snakeCase(str){
  return toLower(
    join(
      '_',
      words(str)
    )
  )
}
