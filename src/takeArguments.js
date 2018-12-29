import {
  map,
  merge,
} from 'rambda'


function mergeAll(arr) {
  let willReturn = {}
  map(val => {
    willReturn = merge(willReturn, val)
  }, arr)

  return willReturn
}

function mapToObject(fn, list){
  return mergeAll(map(fn,list))
}

export default function takeArguments (url) {
  const [base,...rawArguments] = url.split('?')
  if(rawArguments.length === 0) return {} 

  return mapToObject(x => {
    const [key, value] = x.split('=')
    if(value === undefined || value === 'true'){
      return {[key]: true}
    } 
    if(value === 'false'){
      return {[key]: false}
    } 
    
    if(Number.isNaN(value*1)){
      return {[key]: value}    
    }

    return {[key]: Number(value)}
  },rawArguments)
}
