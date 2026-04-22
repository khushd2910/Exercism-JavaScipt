
export function getCardPosition(stack, card) {
  return stack.indexOf(card)
}

export function doesStackIncludeCard(stack, card) {
  return stack.includes(card)
}

export function isEachCardEven(stack) {
  return stack.every((num)=>num%2==0)
}

export function doesStackIncludeOddCard(stack) {
  return stack.some((num)=>num%2!=0)
}
let data
export function getFirstOddCard(stack) {
  data=stack.findIndex((num)=>num%2!=0)
  return stack[data]
}

export function getFirstEvenCardPosition(stack) {
  return stack.findIndex((num)=>num%2==0)
}
