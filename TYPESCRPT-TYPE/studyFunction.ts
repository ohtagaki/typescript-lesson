//Lesson24
//関数に型を付ける
//①パラメータ…型推論は効かない
//②戻り値…型推論は効く
//パラメータには必ず型注釈をつける(付けないとany型になるため)
//返り値にもなるべく型注釈をつける
function add(num1: number, num2: number): number{
    return num1 + num2
}
function addSampleSecond(num1: number, num2: number){
    return num1 + num2
}
function addSampleThird(num1, num2): number{
    return num1 + num2
}

add(3,5);


//Lesson25・26
//関数の戻り値にvoidを指定する方法
//voidを指定するとコンパイルした際に、undefined型を返す
//undefinedを返り値として利用する場合、returnを明示的に付けないといけない
//基本的にはvoidを使うようにする
function sayHello(): void{
    console.log('Hello');
}
function sayGoodNight(): undefined{
    console.log('GoodNight');
    return;
}
console.log(sayHello());
//undefined型はundefinedとnullを扱える
let tmp: undefined;
let tmpNull = null;



//lesson27
//関数の型注釈
const anotherAdd:(n1: number, n2: number) => number = function add(num1: number, num2: number): number{
    return num1 + num2
};
//関数の型推論
const anotherAddSample = function add(num1: number, num2: number): number{
    return num1 + num2
};
const anotherAddSampleSecond:(n1: number, n2: number) => number = function add(num1, num2){
    return num1 + num2
};
//アロー関数
const doubleNumber: (num: number) => number = num => num * 2;


//Lesson28
//callback関数
function doubleAndHandle(num: number, cb:(num: number) => number): void {
    const doubleNum = cb(num * 2);
    console.log(num * 2);
}
doubleAndHandle(23, doubleNum => {
    return doubleNum
});