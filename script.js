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

// #23
for (let i = 1; i <= 1000; i++) {
    console.log(i);
};

// #24
for (let i = 100; i >= 0; i--) {
    console.log(i);
};

// #25
fruits = ['apple', 'orange', 'pear', 'kiwi', 'pineapple'];
fruits.forEach(e => console.log(e));
// apple
// orange
// pear
// kiwi
// pineapple

// #26
fruits.forEach((e, i) => console.log(`${i}. ${e}`));
// 0. apple
// 1. orange
// 2. pear
// 3. kiwi
// 4. pineapple

// #27
const suits = ['hearts', 'clubs', 'dimonds', 'spades'];
let cards = [];
for (let i = 2; i < 15; i++) {
    for (let y = 0; y < suits.length; y++) {
        cards.push(`${suits[y]} ${i}`);
    };
};
console.log(cards);
// [
//     'hearts 2',  'clubs 2',  'dimonds 2',  'spades 2',
//     'hearts 3',  'clubs 3',  'dimonds 3',  'spades 3',
//     'hearts 4',  'clubs 4',  'dimonds 4',  'spades 4',
//     'hearts 5',  'clubs 5',  'dimonds 5',  'spades 5',
//     'hearts 6',  'clubs 6',  'dimonds 6',  'spades 6',
//     'hearts 7',  'clubs 7',  'dimonds 7',  'spades 7',
//     'hearts 8',  'clubs 8',  'dimonds 8',  'spades 8',
//     'hearts 9',  'clubs 9',  'dimonds 9',  'spades 9',
//     'hearts 10', 'clubs 10', 'dimonds 10', 'spades 10',
//     'hearts 11', 'clubs 11', 'dimonds 11', 'spades 11',
//     'hearts 12', 'clubs 12', 'dimonds 12', 'spades 12',
//     'hearts 13', 'clubs 13', 'dimonds 13', 'spades 13',
//     'hearts 14', 'clubs 14', 'dimonds 14', 'spades 14'
//   ]

// #28
let book = {
    title: '',
    author: '',
    genres: []
};

// #29
let person = {
    name: 'Sixten Faceplant',
    email: 'sixten.faceplant@zocom.se',
    role: 'ninjah',
    adress: {
        street: 'Karatevägen 3',
        zip: '41477',
        city: 'Kablam City'
    }
};
console.log(person.adress.city); // Kablam City

// #30
let personCopy = {...person};
console.log(personCopy);
// {
//     name: 'Sixten Faceplant',
//     email: 'sixten.faceplant@zocom.se',
//     role: 'ninjah',
//     adress: { street: 'Karatevägen 3', zip: '41477', city: 'Kablam City' }
// }

// #31
let dog = {
    name: 'Ozzy',
    breed: 'bulli',
    bark() {
        return `Woff, jag heter ${this.name}!`;
    }
};
console.log(dog.bark()); // Woff, jag heter Ozzy!

// #32
person = { 
    name: 'sixten',
    email: 'sixten@zocom.se', 
    role: 'ninjah',
    age: 32 
};
for (const [key, value] of Object.entries(person)) {
    console.log(`${key} - ${value}`);
};
// name - sixten
// email - sixten@zocom.se
// role - ninjah
// age - 32

// #33
function add(x, y) {
    return x + y;
};
console.log(add(8, 10));

// #34
let desc = () => {
    return 'Description av anonyma och namnade funktioner: ...';
};
console.log(desc());

// #35
function getYear(date) {
    return date.substring(0, 4); // return date.slice(0, 4); (the same)
};
console.log('2019-10-14'); // 2019-10-14 

// #36
function calculate(a, b, operation) {
    switch (operation) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return 'Somthing went wrong!'; 
    };
};
console.log(calculate(12, 3, '/')); // 4
console.log(calculate(4, 3, '*')); // 12
console.log(calculate(12, 2, ':')); // Somthing went wrong!

// #37
function compareThis(a, b) {
    if (a === b) return true;
    return false;
};
console.log(compareThis(1, 1)); // true
console.log(compareThis(3, 1)); // false

// #38
function between(x) {
    if (x >= 20 && x <= 40) return true;
    return false;
};
console.log(between(30)); // true
console.log(between(50)); // false

// #39
function getMeTheLongestArr(a, b) {
    if (a.length > b.length) return a;
    return b;
};
console.log(getMeTheLongestArr([1,2], ['A','B','C'])); // ['A', 'B', 'C']

// #40
console.log(Math.floor(1337.51)); // 1337

// #41
console.log(Math.ceil(1337.48)); // 1338

// #42
console.log(Math.round(1337.497)); // 1337

// #43
function random(max) {
    return Math.floor(Math.random() * max);
};
console.log(random(10000));

// #44
function randomPassword(n) {
    let pass = '';
    let chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < n; i++) {
        let randChar = chars[(Math.floor(Math.random() * chars.length))];
        pass += randChar;
    }
    return pass;
};
console.log(randomPassword(10)); // e3va93hlfz

// #45
names = ['Sixten', 'Eva', 'Ali', 'Kim', 'Greger', 'Alicia'];
console.log(names[Math.floor(Math.random() * names.length)]);

// #46
let getData = function(url) {}; // anonymuos function with arameter
// function getData() {};

// #47
HelloAgainAgain();

function hello(){  
    console.log('Hello!'); // 3
};

function helloAgain(){
    console.log('Hello Again!'); // 2
    hello();
};

function HelloAgainAgain(){
    console.log('Hello Again Again!'); // 1 
    helloAgain();
};

// #48
let pokemons = ['Pikachu', "Charmander", "Bulbasaur", "Squirtle"];
function printPokemons() {
    for(let i=0; i < pokemons.length; i++) {
        console.log("One awesome pokemon is " + pokemons[i]);
    };
};
printPokemons();

// #49
let newString = '';
function reverseString(str) {
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    };
    return newString;
};
console.log(reverseString('hello'));

// #50
// Fulfilled, rejected, pending, (settled).

// #51
let myObj = {
    fullName: 'Joe Star',
    age: 42,
    email: 'joe@mail.nu'
};
function getMyData(data) {
    return new Promise(function (resolve, reject) {
        if (data) {
          resolve(data);
        } else {
          reject("There is an Error!");
        }
    })};
getMyData(myObj.age)
    .then(data => console.log('Async success!', data))
    .catch(error => console.log('Caught an error!', error));

// #52
async function getMyData2(data) {
    return await new Promise(function (resolve, reject) {
        if (data) {
          resolve(data);
        } else {
          reject("There is an Error!");
        }
    })};
getMyData2(myObj.name)
    .then(data => console.log('Async success!', data))
    .catch(error => console.log('Caught an error!', error));

// #53
const url = `https://api.chucknorris.io/jokes/random`;
fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Joke to you:', data.value);
    })
    .catch(error => {
        console.error('Error:', error);
    });