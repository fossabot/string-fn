import { splitPerLine } from './splitPerLine'

const mock = 'Wert 1; Wert 2,...Wert 30 sind Werte, aus denen die Anzahl der Argumente errechnet wird.'

const log = (label, list) => list.forEach(x => console.log(label, x.length))

test('happy', () => {
  const perLine = 38
  const result = splitPerLine({
    text   : mock,
    perLine,
    buffer : 5,
  })
  const expected = [ 'Wert 1; Wert 2,...Wert 30 sind Werte,', 'aus denen die Anzahl der Argumente', 'wird.' ]

  log(perLine, expected)

  expect(result).toEqual(expected)
})

test('default buffer', () => {
  const perLine = 32
  const result = splitPerLine({
    text : mock,
    perLine,
  })
  const expected = [ 'Wert 1; Wert 2,...Wert 30 sind', 'Werte, aus denen die Anzahl', 'wird.' ]
  log(perLine, expected)

  expect(result).toEqual(expected)
})

test('high perLine', () => {
  const perLine = 44
  const result = splitPerLine({
    text : mock,
    perLine,
  })
  const expected = [ 'Wert 1; Wert 2,...Wert 30 sind Werte, aus',
    'denen die Anzahl der Argumente errechnet',
    'wird.' ]
  log(perLine, expected)
  expect(result).toEqual(expected)
})

