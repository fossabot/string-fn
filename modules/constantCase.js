import words from './words'
import {
  compose,
  toUpper,
  join,
  map,
} from 'rambda'

export default function constantCase (x) {
  return compose(
    join('_'),
    map(toUpper),
    words
  )(x)
}

