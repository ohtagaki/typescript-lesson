//Lesson62
//TypealiasとInterfaceの違い
//interfaceはオブジェクトのみのtypealias
//interfaceはオブジェクトのみを扱うためわかりやすい

//Lesson64 implements

//Lesson65
//構造的部分型：intterfaceが持つプロパティを保持しつつ、新たなフィールドを入れてもエラーが出ない

//lesson66
//readonlyなプロパティnameを持つinterfaceを継承したDeveloperクラスのnameはreadonlyでなくてよい

interface Nameable{
    name: string;
}

//Nameableインタフェースを継承した場合で、nameをHumanインタフェースで指定すると、条件によっては値が上書きされる
//NameableインタフェースのnameにHumanインタフェースのnameプロパティを代入できるときに値が上書きされる
interface Human extends Nameable {
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

//Lesson68インタフェースでも関数の型を表現できる
//基本的にはtypeを用いて関数の型を表現する
interface addFunc {
    //メソッド名を書かない
    (num1: number, num2: number): number;
}
let addFunc: addFunc;
addFunc = (n1: number, n2: number) => {
    return n1 + n2;
}

//type addFunc = (num1: number, num2: number) => number;
//let addFunc: addFunc;
//addFunc = (n1: number, n2: number) => {
    //return n1 + n2;
//}