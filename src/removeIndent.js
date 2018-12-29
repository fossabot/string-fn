import {
  join,
  map,
  split,
} from 'rambda'

export function removeIndent(str){
  return join(
    '\n',
    map(
      val => val.trimLeft(),
      split('\n', str)
    )
  )
}
