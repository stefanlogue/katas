export const getRange = (num1: number, num2?: number): number[] => {
  let array = []
  let first = (num2 && num1 < num2 && num1) || num2 || 0
  let second = (num2 && num2 > num1 && num2) || num1

  for (let i = first; i <= second; i++) {
    array.push(i)
  }
  return array
}
