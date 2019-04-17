import { splitPerLine } from './splitPerLine'

const mock = 'Wert 1; Wert 2,...Wert 30 sind Werte, aus denen die Anzahl der Argumente errechnet wird.'

const log = list => list.forEach(x => console.log(x.length))

test('happy', () => {
  const result = splitPerLine({
    text    : mock,
    perLine : 38,
    buffer  : 5,
  })
  const expected = [ 'Wert 1; Wert 2,...Wert 30 sind Werte,',

    'aus denen die Anzahl der Argumente',

    'errechnet wird.' ]
  log(expected);
  
  expect(result).toEqual(expected)
})

test('default buffer', () => {
  const result = splitPerLine({
    text    : mock,
    perLine : 32,
  })
  const expected = [ 'Wert 1; Wert 2,...Wert 30 sind',
  'Werte, aus denen die Anzahl der',
  'Argumente errechnet wird.' ]
  log(expected);
  
  expect(result).toEqual(expected)
})

test.only('high perLine', () => {
  const result = splitPerLine({
    text    : mock,
    perLine : 44,
  })
  const expected = ["Wert 1; Wert 2,...Wert 30 sind Werte, aus", "denen die Anzahl der Argumente errechnet wird."]
  log(expected);
  
  expect(result).toEqual(expected)
})

