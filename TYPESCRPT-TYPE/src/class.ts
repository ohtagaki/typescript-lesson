class Person {

    readonly id: number = 32;
    constructor(readonly name: string, protected age: number) {
        //初期化
        this.id = 31;
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

//継承
class Teacher extends Person{
    constructor(name: string, age: number, public subject: string){
        super(name, age);
    }

    greeting(){
        console.log(`Hello! My name is ${this.name}. I am ${this.age} years old. I teach ${this.subject}.`);
    }
}
const mathTeacher = new Teacher('Mori', 23, 'math');
mathTeacher.greeting();