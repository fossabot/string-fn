import { kebabCase } from './kebabCase'

test('', () => {
  const result = kebabCase('fooBarBaz')

  expect(result).toEqual('foo-bar-baz')
})

test('', () => {
  const result = kebabCase('Foo Bar BAZ')

  expect(result).toEqual('foo-bar-baz')
})

test('', () => {
  const result = kebabCase('__FOO_BAR__')

  expect(result).toEqual('foo-bar')
})

test('', () => {
  const result = kebabCase('Foo Bar BAZ')

  expect(result).toEqual('foo-bar-baz')
})

