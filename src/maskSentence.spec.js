import { maskSentence } from './maskSentence'

test('english with apostrophe', () => {
  const sentence = 'You didn\'t, do much'
  const expectedVisible = [ 'Y_u', 'd____t', ',', 'do', 'm__h' ]
  const expectedHidden = [ 'You', 'didn\'t', ',', 'do', 'much' ]

  const { hidden, visible } = maskSentence({ sentence })

  expect(hidden).toEqual(expectedHidden)
  expect(visible).toEqual(expectedVisible)
})

test('bulgarian when first word is focus word', () => {
  const sentence = 'Някога е имало по-добри времена'
  const expectedVisible = [ 'Н____а', 'е', 'имало', 'по-добри', 'времена' ]
  const expectedHidden = [ 'Някога', 'е', 'имало', 'по-добри', 'времена' ]

  const { hidden, visible } = maskSentence({
    sentence,
    words : [ 'Някога' ],
  })

  expect(hidden).toEqual(expectedHidden)
  expect(visible).toEqual(expectedVisible)
})

test('bulgarian with dash(-)', () => {
  const sentence = 'Някога е имало по-добри времена'
  const expectedVisible = [ 'Н____а', 'е', 'и___о', 'п______и', 'в_____а' ]
  const expectedHidden = [ 'Някога', 'е', 'имало', 'по-добри', 'времена' ]

  const { hidden, visible } = maskSentence({ sentence })

  expect(hidden).toEqual(expectedHidden)
  expect(visible).toEqual(expectedVisible)
})

test('', () => {
  const sentence = 'it was, for what i need, good.'
  const expectedHidden = [ 'it', 'was', ',', 'for', 'what', 'i', 'need', ',', 'good', '.' ]

  const expectedVisible = [ 'it', 'w_s', ',', 'f_r', 'w__t', 'i', 'n__d', ',', 'g__d', '.' ]

  const { hidden, visible } = maskSentence({ sentence })

  expect(hidden).toEqual(expectedHidden)
  expect(visible).toEqual(expectedVisible)
})

test.only('easy mode, no random', () => {
  const sentence = 'Unnecessary complexity killed the cat.'
  const expectedHidden = [
    'Unnecessary',
    'complexity',
    'killed',
    'the',
    'cat',
    '.',
  ]
  const expectedVisible = [
    'U_______ry',
    'c_____ty',
    'k__ed',
    'the',
    'cat',
    '.',
  ]
  const { hidden, visible } = maskSentence({
    sentence,
    easyMode : true,
  })
  console.log({ visible })
  // Expect(hidden).toEqual(expectedHidden)
  // Expect(visible).toEqual(expectedVisible)
})

