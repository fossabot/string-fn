import {
  test,
  head,
  last,
} from 'rambda'

import { PUNCTUATIONSX } from './constants'

export default function maskWordHelper (word, replacer, charLimit) {
  if (
    test(PUNCTUATIONSX, word) ||
    word.length <= 2
  ) {
    return word
  }

  if (word.length < charLimit) {
    return `${ head(word) }${ replacer.repeat(word.length - 1) }`
  }

  return `${ head(word) }${ replacer.repeat(word.length - 2) }${ last(word) }`
}
