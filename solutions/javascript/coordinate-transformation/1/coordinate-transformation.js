
export function translate2d(dx, dy) {
  return function translate(dx1,dy1){
    return [dx+dx1,dy+dy1]
  }
}

export function scale2d(sx, sy) {
  return function scale(sx1,sy1){
    return [sx*sx1,sy*sy1]
  }
}

export function composeTransform(f, g) {
  return function composed(x, y) {
    return g(...f(x, y))
  }
}

export function memoizeTransform(f) {
  let previousX, previousY, previousResult
  
  return function memoised(x, y) {
    if (previousX === x && previousY === y) {
      return previousResult
    }
    previousX = x
    previousY = y
    return previousResult = f(x, y)
  }
}