import { splitEveryWhen } from './splitEveryWhen'
import { pass } from 'rambdax'
import { init } from 'rambda'

const mock = 'Wert 1; Wert 2,...Wert 30 sind Werte, aus denen die Anzahl der Argumente errechnet wird.'

test('mock', () => {
  const input = [ ...mock ]

  const PER_LINE = 30
  const BUFFER = 1
  let holderKeeper
  let indexKeeper

  const predicate = (char, holder, answer, i) => {
    const mysteryLimit = (answer.length + 1) * PER_LINE
    if (char === ' ' && i + BUFFER < mysteryLimit){
      holderKeeper = init(holder)
      indexKeeper = i

      return false
    }
    if (i === mysteryLimit){
      return [
        holderKeeper,
        input.slice(indexKeeper + 1, i),
      ]
    }

    if (char === ' '){

      holderKeeper = undefined

      return true
    }

    return false
  }

  const result = splitEveryWhen(predicate, input)
  const parsed = result.map(singleAnswer => singleAnswer.join(''))
  console.log({ parsed })
})

test('happy', () => {
  const predicate = (char, holder, answer, i) => {
    expect(pass(
      char,
      holder,
      answer,
      i
    )(
      String,
      Array,
      Array,
      Number
    )).toBeTruthy()

    return true
  }
  const input = [ ...'foo bar' ]

  const result = splitEveryWhen(predicate, input)
  expect(
    result[ 1 ]
  ).toEqual([])
})

