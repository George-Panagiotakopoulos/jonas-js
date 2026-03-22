let country = "Greece"
const continent = "Europe"
let population = 10000
population ++;

const isIsland = false;
const language = "Greek";
/*
console.log(isIsland, population, country , language)

let description = `${country} is in ${continent}, and its ${population}million people speak ${language}}`
console.log(description)

if (population > 330000){
    console.log(`${country} population is above average`)

}else {
    console.log(`${country} population is below average`)
}

let numNeigbours = Number(prompt("How many neigbour countries does your country have ?"));

if (numNeigbours === 1){
    console.log("Only 1 boarder")
}else if (numNeigbours > 1){
    console.log("More than 1 boarder")
}else {
    console.log("No borders")
}
*/

if (language === "english " && population < 50000 && !isIsland){
    console.log("Yes")
}else {
    console.log("No")
}