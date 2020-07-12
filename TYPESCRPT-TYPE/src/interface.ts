interface Nameable {
    name?: string;
    nickName? :string;
}


interface Human extends Nameable {
    name?: string;
    age: number;
    greeting(message: string): void;
} 

const nameable: Nameable = {
    name: 'Jonson',
    nickName: '????'
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
    name?: string;
    constructor(public age: number, public career:number, public initName?: string){
        this.name = initName;
    }
    greeting(message: string) {
        console.log(message);
    }
}

let engineer: Human = new Developer(35, 5, 'Mike');
