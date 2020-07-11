interface Human {
    name: string;
    age: number;
    greeting(message: string): void;
} 

const human: Human ={
    name: 'Mike',
    age: 23,
    greeting(message: string) {
        console.log(message);
    }
}

class Developer implements Human {
    constructor(public name: string, public age: number, public career:number){

    }
    greeting(message: string) {
        console.log(message);
    }
}