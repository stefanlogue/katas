export const getHighestNumber = (numbers: number[]): number => {
  const length = numbers.length
  if (length > 1) {
    return numbers.sort()[length - 1]
  }
  return numbers[0]
}
