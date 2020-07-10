class Person {

    constructor(public name: string, private age: number) {
        //初期化
    }

    greeting(this: Person){
        console.log(`Hello! My name is ${this.name}. I am ${this.age} years old.`);
    }

    incrementAge(){
        this.age += 1;
    }
}
let person2: Person;
const mike = new Person('Mike', 24);
console.log(mike);
mike.incrementAge();
mike.greeting();

// const anotherMike = {
//     name: 'anotherMike',
//     greeting: mike.greeting
// }
// anotherMike.greeting();