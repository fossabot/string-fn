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
  let carrierHolder = 0

  const predicate = (char, holder, answer, i, carrier) => {
    if (carrier) carrierHolder += carrier

    const mysteryLimitBase = (answer.length + 1) * perLine
    const mysteryLimit = mysteryLimitBase - carrierHolder

    if (i === text.length - 1){
      const finalLoopResultBase = text.slice(indexKeeper + 1)
      const finalLoopResult = holderKeeper.length === 0 ?
        finalLoopResultBase :
        holderKeeper.join('') + ' ' + finalLoopResultBase

      return [
        [ finalLoopResult ],
        [],
      ]
    }

    if (char === ' ' && i + buffer < mysteryLimit){
      holderKeeper = init(holder)
      indexKeeper = i

      return false
    }

    if (i === mysteryLimit){

      return [
        holderKeeper,
        text.slice(indexKeeper + 1, i),
        i - indexKeeper,
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
