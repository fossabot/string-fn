import { takeArguments } from './takeArguments'

const BASE = 'https://ilearnsmarter.com/write-sentence'

test('can pass separator', () => {
  const result = takeArguments(
    `${BASE}#alarm=5.5#foo=bar`,
    '#'
  )
  const expectedResult = {
    alarm: 5.5,
    foo: 'bar'
  }

  expect(result).toEqual(expectedResult)
})

test('', () => {
  const result = takeArguments(BASE)
  const expectedResult = {}

  expect(result).toEqual(expectedResult)
})

test('default case with 1 argument', () => {
  const url = `${ BASE }?auto`
  const result = takeArguments(url)
  const expectedResult = { auto : true }

  expect(result).toEqual(expectedResult)
})

test('default case with 2 arguments', () => {
  const url = `${ BASE }?auto?foo`
  const result = takeArguments(url)
  const expectedResult = {
    auto : true,
    foo  : true,
  }

  expect(result).toEqual(expectedResult)
})

test('complete example', () => {
  const url = `${ BASE }?auto?bar=false?foo?baz=1.5?s=more?k=2`
  const result = takeArguments(url)
  const expectedResult = {
    auto : true,
    foo  : true,
    bar  : false,
    baz  : 1.5,
    s    : 'more',
    k    : 2,
  }

  expect(result).toEqual(expectedResult)
})
