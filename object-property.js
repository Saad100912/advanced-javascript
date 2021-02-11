const students = [
    {id: 21, name: 'Omar Sunny'},
    {id: 31, name: 'Manna'},
    {id: 41, name: 'Leonardo DiCaprio'},
    {id: 71, name: 'Tom Hanks'}
];

// let studentsName = [];
// for(let i = 0; i < students.length; i++){
//     let name = students[i].name;
//     studentsName.push(name);
// }
// console.log(studentsName);


/*
const names = students.map(s => s.name);
console.log(names);

const ids = students.map(s => s.id);
console.log(ids);
*/


const bigger = students.filter(s => s.id > 40)
console.log(bigger);

const bigger1 = students.find(s => s.id > 40)
console.log(bigger1);