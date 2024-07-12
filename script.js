// #1
let dataTypes = ['string', 'number', 'bigint', 'boolean', 'null',  'undefined', 'object', 'simbol'];

// #2
let a = 1;
let b = '1';
if(a == b); // true

// #3
let name1 = 'Greta Thunberg'; 
var name2 = 'Greta Thunberg'; // Global variable which is visible everywhere

// #4
let x = [{}, {}, {}]
console.log(typeof x);

// #5
// [] // A 
// () // B
// {} // C - the code block

// #6
// el.on('click', () => {
//     alert('Ariba!'); // block
// });

// #7
var greeting = 'Good bye world!';
{
    let greeting = 'Hello World';
}
console.log(greeting); // Good bye world!

// #8
// "Hello World" // A - correct
// 'Hello World' // B - correct
// `Hello World` // C - correct

// #9
let sentence = "If you're having code problems I feel bad for you son. I got 99 problems, but a glitch ain't one."
console.log(sentence.length);

// #10
let name = 'Johny';
console.log(`Hej ${name} din gamle knasboll!`);

// #11
let fruits = ['orange', 'banana', 'apple', 'mango', 'plummon'];

// #12
fruits.unshift('peach');
fruits.push('apricot');
console.log(fruits); // ['peach', 'orange', 'banana', 'apple', 'mango', 'plummon', 'apricot']

// #13
fruits.shift();
fruits.pop();
console.log(fruits); // ['orange', 'banana', 'apple', 'mango', 'plummon']

// #14
fruits = ['apple', 'orange', 'pear', 'kiwi'];
fruits.splice(2, 0, 'banana', 'peach');
console.log(fruits); // ['apple', 'orange', 'banana', 'peach', 'pear', 'kiwi']

// #15
fruits = ['apple', 'orange', 'pear', 'kiwi'];
fruits.splice(0, 1, 'pineapple');
console.log(fruits); // ['pineapple', 'orange', 'pear', 'kiwi']

// #16
let num = [1,5,78,7,122,3,4,65,40,2,8];
let modif = num.sort((a, b) => b - a);
console.log(modif); // [122, 78, 65, 40, 8, 7, 5, 4, 3, 2, 1]

// #17
a = [1,2,3];
b = [4,5,6];
console.log(a.concat(b));  // [1, 2, 3, 4, 5, 6]

// #18
a = ['My', 'has', 'many', 'open'];
b = ['brain', 'to', 'tabs', '!'];
let c = 0;
let d = 0;
for (let i = 0; i < a.length; i++) {
    d = ++i;
    a.splice(d, 0, b[c++]);
    d++;
}
console.log(a); // ['My', 'brain', 'has', 'to', 'many', 'tabs', 'open', '!']

// #19
a = [1,2,7,8,9,10];
b = [3,4,5,6];
a.splice(2, 0, ...b)
console.log(a); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// #20
let names = ['sixten', 'Eva', 'Ali', 'Kim', 'Greger', 'Alicia'];
names = names.map(e => e.toUpperCase());
console.log(names); // ['SIXTEN', 'EVA', 'ALI', 'KIM', 'GREGER', 'ALICIA']

// #21
names = [
    { name: 'sixten', age: 32 },
    { name: 'Eva',    age: 19 }, 
    { name: 'Ali',    age: 67 },
    { name: 'Kim',    age: 13 },
    { name: 'Greger', age: 30 },
    { name: 'Alicia', age: 82 }
];
names = names.filter(e => e.age >= 30);
console.log(names);

// #22
names = ['sixten', 'Eva', 'Ali', 'Kim', 'Greger', 'Alicia'];
console.log(names.includes('Ewa')); // false