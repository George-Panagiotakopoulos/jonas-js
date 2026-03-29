'use strict'

function fruit (apples, oranges){
    console.log(apples, oranges);
    const juice  = `juice with ${apples} apples and ${oranges}   oranges`
    return juice 
}

const appleJuice = fruit(5,5);
console.log(appleJuice)