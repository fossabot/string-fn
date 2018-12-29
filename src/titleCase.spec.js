import { titleCase } from './titleCase'

test('', () => {
  const str = 'foo bar BAZ'
  const result = titleCase(str)
  const expectedResult = 'Foo Bar Baz'

  expect(result).toEqual(expectedResult)
})

test('', () => {
  const str = 'fooBar_BAZ'
  const result = titleCase(str)
  const expectedResult = 'Foo Bar Baz'

  expect(result).toEqual(expectedResult)
})
