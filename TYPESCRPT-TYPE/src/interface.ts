interface nameable {
    name: string;
}


interface Human extends nameable {
    name: string;
    age: number;
    greeting(message: string): void;
} 

//type addFunc = (num1: number, num2: number) => number;
//関数の型を定義するインターフェース
interface addFunc {
    (num1: number, num2: number): number;
}
let addFunc: addFunc;
addFunc = (n1: number, n2: number) => {
    return n1 + n2;
}

class Developer implements Human {
    constructor(public name: string, public age: number, public career:number){

    }
    greeting(message: string) {
        console.log(message);
    }
}

let engineer: Human = new Developer('Mike', 35, 5);
