import {
  map,
  merge,
} from 'rambda'

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

export function takeArguments(url){
  const [ , ...rawArguments ] = url.split('?')
  if (rawArguments.length === 0) return {}

  return mapToObject(x => {
    const [ key, value ] = x.split('=')
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
