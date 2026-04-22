
export function cardTypeCheck(stack, card) {
  let count=0
  stack.forEach((number)=>{
    if(number==card){
      count++
    }
  })
  return count
}

export function determineOddEvenCards(stack, type) {
  const rest = type ? 0 : 1
  
  let count = 0
  
  for (const card of stack) {
    if (card % 2 === rest) {
      count += 1
    }
  }
  return count
}
