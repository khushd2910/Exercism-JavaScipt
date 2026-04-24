
export function buildSign(occasion, name) {
  return `Happy ${occasion} ${name}!`
}

export function buildBirthdaySign(age) {
  return `Happy Birthday! What a ${age<50?"young fellow you are.":"mature fellow you are."}`
}

export function graduationFor(name, year) {
  return `Congratulations ${name}!\nClass of ${year}`
}

export function costOf(sign, currency) {
  let price=20+sign.length*2
  return `Your sign costs ${price}.00 ${currency}.`
}
