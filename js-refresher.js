const name = 'abdus';
let age = 27;
const hasHobbies = true;

// console.log(name);
// console.log(age);

// Error cannot assign to a const variable.
// name = 'abdus sattar';
age = 28;

const summarizeUser = (userName, userAge, userHasHobbies) => {
    return (
        'Name is ' + userName +
        ', Age is ' + userAge +
        ' and user has hobbies: ' + userHasHobbies
    );
}
// console.log(summarizeUser(name, age, hasHobbies));

const add = (a, b) => a + b;
// console.log(add(2, 4));

const addOne = a => a + 1;
// console.log(addOne(4));

const addRandom = () => 1 + 3;
// console.log(addRandom());

const person = {
    name: 'abdus',
    age: 25,
    greet() {
        console.log('Hi, I am ' + this.name)
    }
};
// console.log(person);
// person.greet();

const hobbies = ['Sports', 'Cooking'];
for (const index in hobbies) {
    const hobby = hobbies[index];
    // console.log(hobby);
}
// console.log(hobbies.map((hobby) => 'Hobby: ' + hobby));
// console.log(hobbies);

hobbies.push('Programming');
// console.log(hobbies);

// spread operator ... can be used on objects or arrays
// Creating a copy of array
// const copiedHobbies = hobbies.slice();
const copiedHobbies = [...hobbies];
copiedHobbies.push('cycling');
// console.log(hobbies);
// console.log(copiedHobbies);

const copiedPerson = { ...person };
// console.log(copiedPerson);


// Spread Operator
const toArray = (...args) => args;
// console.log(toArray(10, 20, 30, 40, 60));


// Object destructuring objects
const data = {
    name: 'abdus',
    age: 25,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};
const printName = ({ name, age }) => {
    // console.log(name, age);
}
printName(data);

// Object destructuring Arrays
const names = ['abdus', 'sattar', 'mohammed'];
const [fName, mName, lName] = names;
// console.log(fName, mName, lName);

// Async code and promises
const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('sent data');
        }, 1500);
    });
    return promise;
}
setTimeout(() => {
    // console.log('Timer is done!');
    fetchData().then(data => {
        // console.log(data);
        return fetchData();
    }).then(data2 => {
        // console.log(data2);
    });
}, 2000);
// console.log('Hi', 'Hello');


