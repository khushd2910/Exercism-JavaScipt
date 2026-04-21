
export function twoSum(array1, array2) {
  let num1=0;
  let num2=0;
  for(let i=0;i<array1.length;i++){
    num1+=String(array1[i])
  }
  for(let i=0;i<array2.length;i++){
    num2+=String(array2[i])
  }

  return Number(num1)+Number(num2)
}

export function luckyNumber(value) {
  let temp=value
  let rem=0
  let num=0
  while(value>0){
    rem=value%10
    num=rem+num*10
    value=Math.floor(value/10)
  }
  if(temp==num){
    return true
  }else{
    return false
  }
}

export function errorMessage(input) {
  if (!input) {
    return 'Required field'
  }
  return Number(input) ? '' : 'Must be a number besides 0'
}
