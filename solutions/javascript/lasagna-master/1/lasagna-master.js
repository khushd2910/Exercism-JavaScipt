export function cookingStatus(remTime) {
  switch(remTime){
    case 0:
      return 'Lasagna is done.'
      break
    case undefined:
      return 'You forgot to set the timer.'
      break
    default:
      return 'Not done, please wait.'
      
  }
} 

export function preparationTime (layers,time=2) {
  return layers.length*time
}

export function quantities (layers) {
  let quanNoodle=0
  let quanSauce=0
  
  for(let i=0;i<layers.length;i++){
    let val=layers[i]
    if (val=='noodles'){
      quanNoodle+=50
    }else if(val=='sauce'){
      quanSauce+=0.2
    }
  }

  return {'noodles':quanNoodle,sauce:quanSauce}
  
}

export function addSecretIngredient (fList,Mlist) {
  Mlist.push(fList[fList.length-1])
}

export function scaleRecipe (recipe,NoPeople) {
  let scale={}
  for(let key in recipe){
    scale[key]=recipe[key]*(NoPeople/2)
  }
  return scale
}