import { head } from 'rambda'
function workingMan(partialSplitted, perLine){
  let lengthHolder = 0
  let counter = -1
  let didOverflow = false
  const willReturn = []
  const len = partialSplitted.length
  const overTheTop = head(partialSplitted).length >= perLine

  while (lengthHolder < perLine && counter + 1 < len){
    counter++
    const currentInstance = partialSplitted[ counter ]
    const mystery = lengthHolder + currentInstance.length + 1

    if (mystery > perLine){

      didOverflow = true
      if(overTheTop) willReturn.push(currentInstance)
    } else {

      willReturn.push(currentInstance)
    }

    lengthHolder = mystery
  }

  const okCounter = counter - len + 1 === 0

  const isOver = didOverflow ?
    overTheTop :
    okCounter

  const newPartialSplitted = partialSplitted.slice(willReturn.length)

  return {
    end                : isOver,
    readyForPush       : willReturn,
    newPartialSplitted : newPartialSplitted,
  }
}

export function splitPerLine({
  text,
  splitChar = ' ',
  perLine = 30,
}){
  const willReturn = []
  let counter = -1
  let splitted = text.split(splitChar)
  const len = splitted.length

  while (counter++ < len){
    const {
      end,
      newPartialSplitted,
      readyForPush,
    } = workingMan(splitted, perLine)

    willReturn.push(readyForPush)

    if (end){

      counter = len
    } else {

      splitted = newPartialSplitted
    }
  }
  const parsed = willReturn.map(singleAnswer => singleAnswer.join(splitChar))

  return parsed
}

