//Lesson62
//TypealiasとInterfaceの違い
//interfaceはオブジェクトのみのtypealias
//interfaceはオブジェクトのみを扱うためわかりやすい

//Lesson64 implements

//Lesson65
//構造的部分型：intterfaceが持つプロパティを保持しつつ、新たなフィールドを入れてもエラーが出ない

//lesson66
//readonlyなプロパティnameを持つinterfaceを継承したDeveloperクラスのnameはreadonlyでなくてよい

type Nameable = {
    name?: string;
    //?をつけることであっても無くても良いプロパティとして指定できる
    nickName?: string;
}

const nameable: Nameable = {
    name: 'Quil',
    nickName: 'Qu'
}

//Nameableインタフェースを継承した場合で、nameをHumanインタフェースで指定すると、条件によっては値が上書きされる
//NameableインタフェースのnameにHumanインタフェースのnameプロパティを代入できるときに値が上書きされる
interface Human extends Nameable {
    age: number;
    //greeting: (message: string) => void;
    greeting(message: string): void;
} 

const human = {
    name: 'Mike',
    age: 38,
    greeting(message: string): void {
        console.log(message); 
    }
}

class Developer implements Human {
    constructor(public age: number, public experience: number, public name?: string){
    }
    greeting(message: string){
        console.log(message);
    }
}

//少なくともHuman型のプロパティを備えていることはわかる
//const user: Human = new Developer('Mikel', 35, 5);

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

const tmpDeveloper = {
    name: 'Quill',
    age: 38,
    experience: 3,
    greeting(message: string) {
      console.log(message);
    }
  }
  const user: Human = new Developer(38, 3);
  if (user.name) {
    user.name.toUpperCase()
  }
  console.log(user.name);