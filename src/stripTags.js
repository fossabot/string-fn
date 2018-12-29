import { HTML_TAGS } from './internals/constants'
import { replace } from 'rambda'

export function stripTags(str){
  return replace(
    /\s+/g,
    ' ',
    replace(
      HTML_TAGS,
      ' ',
      str
    )
  ).trim()
}
