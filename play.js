//product of 2 nums.
const sum = (a , b) => a * b;

console.log(sum(5,2));

//student object.
const student = {
    name: 'Arushi',
    age: '24',
    roll_no: '1',
    greet(){
        console.log('Hello, I am ' + this.name);
    }
}

student.greet();
console.log(student);

//task3
const fruits = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];
    
const newFruits = fruits.map(item => item ===' ' ? 'empty string' : item);

console.log(fruits);
console.log(newFruits);

