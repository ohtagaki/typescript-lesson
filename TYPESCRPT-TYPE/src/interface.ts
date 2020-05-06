//Lesson62
//TypealiasとInterfaceの違い
//interfaceはオブジェクトのみのtypealias
//interfaceはオブジェクトのみを扱うためわかりやすい

//Lesson64 implements

//Lesson65
//構造的部分型：intterfaceが持つプロパティを保持しつつ、新たなフィールドを入れてもエラーが出ない


interface Human {
    name: string;
    age: number;
    //greeting: (message: string) => void;
    greeting (message: string): void;
} 

const human = {
    name: 'Mike',
    age: 38,
    greeting(message: string): void {
        console.log(message); 
    }
}

class Developer implements Human {
    constructor(public name: string, public age: number, public experience: number){

    }
    greeting(message: string){
        console.log('hello');
    }
}

//少なくともHuman型のプロパティを備えていることはわかる
const user: Human = new Developer('Mikel', 35, 5);