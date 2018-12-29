import { constantCase } from './constantCase'

test('', () => {
  const result = constantCase('fooBarBAZ')
  const expectedResult = 'FOO_BAR_BAZ'

  expect(result).toEqual(expectedResult)
})
