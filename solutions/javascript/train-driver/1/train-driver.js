
export function getListOfWagons(...ids) {
  return ids;
}

export function fixListOfWagons(ids) {
  const[first,second,...rest]=ids
  return [...rest,first,second]
}

export function correctListOfWagons(ids, missingWagons) {
  const[first,...rest]=ids
  const[...mv]=missingWagons
  return [first,...mv,...rest]
}

export function extendRouteInformation(information, additional) {
  const {...info}=information
  const {...add}=additional
  return {...info,...add}
  
}

export function separateTimeOfArrival(information) {
  const {timeOfArrival, ...rest} = information;
  return [timeOfArrival, rest];
}
