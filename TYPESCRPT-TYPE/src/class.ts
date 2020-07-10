class Person {

    readonly id: number = 32;
    constructor(public readonly name: string, private age: number) {
        //初期化
        this.id = 31;
        this.name = 'hiroki';
        this.id = 30;
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
console.log(mike.id);

// const anotherMike = {
//     name: 'anotherMike',
//     greeting: mike.greeting
// }
// anotherMike.greeting();