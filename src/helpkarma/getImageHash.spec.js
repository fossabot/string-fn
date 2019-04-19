import { getImageHash } from './getImageHash'

test('happy', () => {
  expect(
    getImageHash('https://cdn.helpkarma.com/storage/cache/8/0/1/0/9/80109242a56bc31ba4ae80bdf77a0d67.jpeg')
  ).toBe('f77a0d67')
})

test('fallback', () => {
  expect(
    getImageHash('https://ilearnsmarter.com/view.jpeg')
  ).toBe('')
})
