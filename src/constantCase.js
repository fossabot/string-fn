import { words } from './words'
import {
  compose,
  toUpper,
  join,
  map,
} from 'rambda'

export const constantCase = compose(
  join('_'),
  map(toUpper),
  words
)

