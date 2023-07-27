import { getRange } from './range'

describe('getRange', () => {
  it('should return the correct range when two numbers are passed', () => {
    const first = 1
    const second = 3

    const result = getRange(first, second)

    expect(result).toStrictEqual([1, 2, 3])
  })
  it('should return the correct range when only one number is passed', () => {
    const num = 6

    const result = getRange(num)

    expect(result).toStrictEqual([0, 1, 2, 3, 4, 5, 6])
  })
  it('should handle the first given number being bigger than the second', () => {
    const first = 3
    const second = 1

    const result = getRange(first, second)

    expect(result).toStrictEqual([1, 2, 3])
  })
})
