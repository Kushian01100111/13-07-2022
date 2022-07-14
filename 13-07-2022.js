//Your job is to write a function which increments a string, to create a new string.

//If the string already ends with a number, the number should be incremented by 1.
//If the string does not end with a number. the number 1 should be appended to the new string.
//Examples:

//f//oo -> foo1

//foobar23 -> foobar24

//foo0042 -> foo0043

//foo9 -> foo10

//foo099 -> foo100

//Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString (strng) {
    let index = 0 ;
    for(let i = 0; i < strng.length; i++){
        if(isNaN(Number(strng.charAt(i))) !== true && Number(strng.charAt(i)) !== 0 || Number(strng.charAt(i)) === 0 && i === strng.length - 1 || Number(strng.charAt(i)) === 0 && Number(strng.charAt(i + 1)) === 9 ){
            index = i
            break
        }
    }
    let numbers = Number(strng.slice(index, strng.length)) + 1

    if(Number(strng) < 9){
      return `${Number(strng) + 1}`
    }else if(index === 0){
        return strng + `1`
    }else{
        return strng.slice(0,index) + `${numbers}`
    } 
  }
  incrementString("1")