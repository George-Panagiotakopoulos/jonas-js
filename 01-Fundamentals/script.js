// Coding Challenge #1
/*Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. 2. 3. Store Mark's and John's mass and height in variables
Calculate both their BMIs using the formula (you can even implement both
versions)
Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK 😀 */

let markMass = 78;
let markHeight = 1.95;
let johnMass = 92;
let johnHeight = 1.76;

markBmi = markMass / markHeight ** 2;
johnBmi = johnMass / johnHeight ** 2 ;
markHigherBMI = markBmi < johnBmi;
//console.log (`Marks BMI is ${MarkBmi.toFixed(2)},and Johns is ${JohnBmi.toFixed(2)},is Johns BMI higher?
//${markHigherBMI}`);
//CODING CHALLENGE #2
if (markBmi > johnBmi){
    console.log(`Marks Bmi${markBmi.toFixed(2)} is Higher than John's ${johnBmi.toFixed(2)}`)
}else {
    console.log(`John's BMI ${johnBmi.toFixed(2)} is higher than Marks ${markBmi.toFixed(2)}`)
}

