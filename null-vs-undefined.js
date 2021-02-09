let name;
console.log(name);

function add(num1, num2){
    sum = num1 + num2;
    console.log(sum);
}
const result = add(13, 82);
console.log(result);


function add(num1, num2){
    sum = num1 + num2;
    console.log(sum);
    return;
}
const result = add(13, 82);
console.log(result);


function add(num1, num2){
    console.log(num1, num2);
}
const result = add(13);
console.log(result);


function add(num1, num2 = 10){
    console.log(num1, num2);
}
const result = add(13);
console.log(result);


const person = {name: "Tom cruise", phone: 123456789};
console.log(person.college);


let fun = undefined;
console.log(fun);


let ages = [2, 5, 9];
console.log(ages[11]);