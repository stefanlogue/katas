import { getHighestNumber } from './sort.highest-number'

describe('getHighestNumber', () => {
  it('should return the highest number given an array of one number', () => {
    const given = [100]

    const actual = getHighestNumber(given)

    expect(actual).toBe(100)
  })
  it('should return the highest number given an array of several numbers', () => {
    const given = [1, 2, 3, 5, 50]

    const actual = getHighestNumber(given)

    expect(actual).toBe(50)
  })
})
