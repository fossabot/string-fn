import { last } from 'lodash'

export function getImageHash(url){
  if (!url.includes('cdn.helpkarma.com')) return ''
  const hashPlusExtension = last(url.split('\/'))

  const [ hash ] = hashPlusExtension.split('.')

  return hash.substring(hash.length - 8)
}
