import {
  length,
  split,
} from 'rambda'

export function count(str, substr){
  return length(split(substr, str)) - 1
}
