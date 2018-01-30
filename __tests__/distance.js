import * as stringFn from '../src/stringFn'

test('', () => {
  expect(stringFn.distance('foobarbaz', 'ffoobarbaz')).toEqual(1)

  expect(stringFn.distance('foobarbaz', 'foo')).toEqual(6)
  expect(stringFn.distance('foo', 'foo')).toEqual(0)
})

test('X', () => {
  expect(stringFn.distance('schönefeld', 'schönefeld')).toEqual(0)
  expect(stringFn.distance('schönefeld', 'schonefeld')).toEqual(1)
  expect(stringFn.distance('schönefeld', 'schönefel')).toEqual(1)
})

test('with Bulgarian language', () => {
  const x = 'Имаме неясни надежди, но ясни страхове.'
  const y = 'Имам неясни надежди, но ясни страхове.'
  expect(stringFn.distance(x, y)).toEqual(1)
})
