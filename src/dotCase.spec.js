import { dotCase } from './dotCase'

test('happy', () => {
  const result = dotCase('foo bar BAZ')
  const expected = 'foo.bar.baz'

  expect(
    result
  ).toEqual(expected)
})
