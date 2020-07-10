abstract class Person {
    static species = 'Homo sapiens';
    static isAdult(age: number) {
        if(age >= 18) return true;
        return false;
    }

    readonly id: number = 32;
    constructor(readonly name: string, protected age: number) {
        //初期化
        this.id = 31;
        this.id = 30;
    }

    greeting(this: Person){
        console.log(`Hello! My name is ${this.name}. I am ${this.age} years old.`);
        this.explainJob();
    }
    abstract explainJob(): void;

    incrementAge(){
        this.age += 1;
    }

}
let person2: Person;
// const mike = new Person('Mike', 24);
// console.log(mike);
// mike.incrementAge();
// mike.greeting();
// console.log(mike.id);

// const anotherMike = {
//     name: 'anotherMike',
//     greeting: mike.greeting
// }
// anotherMike.greeting();

//継承
class Teacher extends Person{
    private static instance: Teacher;
    explainJob(){
        console.log(`I am a teacher and I teach ${this.subject}.`)
    }

    get subject(): string {
        if(!this._subject){
            throw new Error('This is no subject.');
        }
        return this._subject;
    }

    set subject(value: string) {
        if(!value){
            throw new Error('This is no subject.');
        }
        this._subject = value;
    }

    private constructor(name: string, age: number, private _subject: string){
        super(name, age);
    }

    static getInstance(){
        if(Teacher.instance){
            return Teacher.instance;
        }
        Teacher.instance = new Teacher('Mori', 23, 'math');
        return Teacher.instance;
    }

}
const mathTeacher = Teacher.getInstance();
console.log(mathTeacher.subject);
mathTeacher.subject = 'Mathmathics';
mathTeacher.greeting();

console.log(Person.species);
console.log(Person.isAdult(20));
console.log(Teacher.species);
console.log(Teacher.isAdult(35));

mathTeacher.greeting();