import * as stringFn from '../src/stringFn'

test('', () => {
  expect(stringFn.distanceGerman('der anlass', 'der Anlaß')).toEqual(0)
  expect(stringFn.distanceGerman('die Männer', 'die manner')).toEqual(0)
})
