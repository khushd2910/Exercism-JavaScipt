
export function getFirstCard(deck) {
  const [data,rest]=deck
  return data
}

export function getSecondCard(deck) {
  const [first,second,rest]=deck
  return second
}

export function swapTwoCards(deck) {
  const [first,second,rest]=deck
  return [second,first]
}

export function shiftThreeCardsAround(deck) {
  const [first,second,rest]=deck
  return [second,rest,first]
}

export function pickNamedPile(piles) {
  const {chosen} = piles;
  return chosen;
}

export function swapNamedPile(piles) {
  const {chosen: disregarded, disregarded: chosen} = piles;
  return { chosen, disregarded };
}
