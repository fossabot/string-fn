import { map, merge, defaultTo } from 'rambda'
import { camelCase } from './camelCase'
function mergeAll(arr){
  let willReturn = {}
  map(val => {
    willReturn = merge(willReturn, val)
  }, arr)

  return willReturn
}

function mapToObject(fn, list){
  return mergeAll(map(fn, list))
}

export function takeArguments(url, seperator){
  const sep = defaultTo('?', seperator)

  const [ , ...rawArguments ] = url.split(sep)
  if (rawArguments.length === 0) return {}

  return mapToObject(x => {
    const [ keyRaw, value ] = x.split('=')
    const key = camelCase(keyRaw)
    if (value === undefined || value === 'true'){
      return { [ key ] : true }
    }
    if (value === 'false'){
      return { [ key ] : false }
    }

    if (Number.isNaN(Number(value))){
      return { [ key ] : value }
    }

    return { [ key ] : Number(value) }
  }, rawArguments)
}
