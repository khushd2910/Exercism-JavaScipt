
export function randomShipRegistryNumber() {
  var num=1000+Math.random()*10000
  return "NCC-"+num
}

export function randomStardate() {
  return 41000+Math.random()*(1000)
}

export function randomPlanetClass() {
  var num=Math.random()
  if(num<0.1){
    return 'D'
  }
  else if(num<0.2){
    return 'H'
  }else if(num<0.3){
    return 'J'
  }else if(num<0.4){
    return 'K'
  }else if(num<0.5){
    return 'L'
  }else if(num<0.6){
    return 'M'
  }else if(num<0.7){
    return 'N'
  }else if(num<0.8){
    return 'R'
  }else if(num<0.9){
    return 'T'
  }else{
    return 'Y'
  }
}
