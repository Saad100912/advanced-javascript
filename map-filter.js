/*
const numbers = [3, 4, 5, 6, 7, 8];
const output = [];
for(let i = 0; i < numbers.length; i++){
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}
console.log(output);
*/


// 1 - write the function separately
/*
const numbers = [3, 4, 5, 6, 7, 8];
function square (element){
    return element * element;
}
const result = numbers.map(square)
console.log(result);
*/


// 2 write the function inside map
/*
const numbers = [3, 4, 5, 6, 7, 8];
const result = numbers.map(function(element, index, array){
    return element * element;
})
console.log(result);
*/


/*
const square = element => element * element;
const result = square(5);
console.log(result);
*/


/*
const square = x => x * x;
const result = square(5);
console.log(result);
*/


/*
const numbers = [3, 4, 5, 6, 7, 8];
const result = numbers.map(x => x * x);
console.log(result);
*/

/*
const numbers = [3, 4, 5, 6, 7, 8];
const bigger = numbers.filter(x => x < 5);
console.log(bigger);
*/


const numbers = [3, 4, 5, 6, 7, 8];
const isThere = numbers.find(x => x > 5);
console.log(isThere);