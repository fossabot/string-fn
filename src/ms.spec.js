import { ms } from './ms'

test('happy', () => {
  expect(ms('6s')).toEqual(6000)
  expect(ms('6 s')).toEqual(6000)
  expect(ms('1 second')).toEqual(1000)
})

test('minutes', () => {
  expect(ms('1 minute')).toEqual(60000)
  expect(ms('55 minutes')).toEqual(3300000)
})

test('hours', () => {
  expect(ms('14 hours')).toEqual(50400000)
  expect(ms('1 hour')).toEqual(3600000)
})

test('days', () => {
  expect(ms('5 days')).toEqual(432000000)
})
