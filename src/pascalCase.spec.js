import { pascalCase } from './pascalCase'

test('', () => {
  const result = pascalCase('foo bar BAZ')
  const expected = 'FooBarBaz'

  expect(
    result
  ).toEqual(expected)
})

