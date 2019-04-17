import { splitEveryWhen } from './internals/splitEveryWhen'
import { init } from 'rambda'

export function splitPerLine({
  text,
  splitChar = ' ',
  perLine = 30,
  buffer = 1,
}){
  let holderKeeper
  let indexKeeper

  const predicate = (char, holder, answer, i) => {
    const mysteryLimit = (answer.length + 1) * perLine
    if (char === ' ' && i + buffer < mysteryLimit){
      holderKeeper = init(holder)
      indexKeeper = i

      return false
    }

    if (i === mysteryLimit){
      return [
        holderKeeper,
        text.slice(indexKeeper + 1, i),
      ]
    }

    if (char === splitChar){
      holderKeeper = undefined

      return true
    }

    return false
  }

  const result = splitEveryWhen(predicate, [ ...text ])
  const parsed = result.map(singleAnswer => singleAnswer.join(''))

  return parsed
}
