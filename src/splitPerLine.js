function workingMan(partialSplitted, perLine){
  let lengthHolder = 0
  let counter = -1
  let didOverflow = false
  const willReturn = []
  const len = partialSplitted.length

  while (lengthHolder < perLine && counter + 1 < len){
    counter++
    const currentInstance = partialSplitted[ counter ]
    const mystery = lengthHolder + currentInstance.length + 1

    if (mystery > perLine){

      didOverflow = true
    } else {

      willReturn.push(currentInstance)
    }

    lengthHolder = mystery
  }

  const okCounter = counter - len + 1 === 0

  const isOver = didOverflow ?
    false :
    okCounter

  const newPartialSplitted = partialSplitted.slice(counter)

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
  console.log({splitted})
  while (counter++ < splitted.length){
    const {
      end,
      newPartialSplitted,
      readyForPush,
    } = workingMan(splitted, perLine)

    willReturn.push(readyForPush)

    if (end){

      counter = splitted.length
    } else {

      splitted = newPartialSplitted
    }
  }
  console.log({ splitChar })
  const parsed = willReturn.map(singleAnswer => singleAnswer.join(splitChar))

  return parsed
}

