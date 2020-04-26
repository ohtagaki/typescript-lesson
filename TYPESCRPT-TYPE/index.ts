//Union型
//複数の型を入れられる
//格納されている型によってエラーが出たり出なかったりする
let unionType: number | string = 10;
//number型のためエラー
//unionType.toUpperCase();
unionType = 'aaaaaa';
unionType.toUpperCase();
//配列の場合
let unionTypes: (number | string)[] = [10, 'genius'];


//Literal型
//constを用いると型推論で文字列リテラル型を採用する
const apple =  'apple';
//union型の文字列リテラル型を使用
let clothSize: 'small' | 'medium' | 'large' = 'medium';
const cloth: {
    color: string,
    size: 'small' | 'medium' | 'large'
} = {
    color: 'white',
    size: 'large'
}
//JSへのコンパイル時にenum型はオブジェクトを生成する
//union型とリテラル型を組み合わせることでenum型的利用ができる

//ailas型
type ClothSize = 'small' | 'medium' | 'large';
let largeSize: ClothSize = 'large';

//関数に型を付ける
//パラメータには必ず型注釈をつける(付けないとany型になるため)
//返り値にもなるべく型注釈をつける
function add(num1: number, num2: number): number{
    return num1 + num2
}
add(3,5);

//関数の戻り値にvoidを指定する方法
//voidを指定するとコンパイルした際に、undefined型を返す
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

//lesson27
const anotherAdd:(n1: number, n2: number) => number = function add(num1: number, num2: number): number{
    return num1 + num2
};
//アロー関数
const doubleNumber: (num: number) => number = num => num * 2;

//callback関数
function doubleAndHandle(num: number, cb:(num: number) => number): void {
    const doubleNum = cb(num * 2);
    console.log(num * 2);
}
doubleAndHandle(23, doubleNum => {
    return doubleNum
});


//unknown型
let unknownInput: unknown;
let anyInput: any;

//error型
function error(message: string) {
    throw new Error(message);
  }
  console.log(error('This is an error'));