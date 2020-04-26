//オブジェクトに型を付ける方法
const person:{
    name: string;
    age: number;
} = {
    name: 'Jack',
    age: 21
}
console.log(person.age);

//object型も存在するが基本的に使用しない
//object型はobject全般的なものを表す
const human: object= {
    name: 'Jack',
    age: 21
}

//さらにネストした場合
const infant = {
    name: {
        first: "Alice",
        last: "Walker"
    },
    age: 5
}

//配列の使い方
//配列に型を付ける
const fruits:　String[] = ['Apple', 'Banana','Orange'];
const anythin:　any[] = ['Apple', 1, true];
const fruit = fruits[0];

//Tuple型を使って決まった型の配列を使う
//悪い例
const badBook = ['business', 1500, false, 2323, true];
//Tuple型を活用した場合
const book: [string, number,boolean] = ['business', 1500, false];
//TypeScriptは初期値の型チェックは厳しいが変更する場合は緩い
//下記のコードはtscのコンパイルを通過する
//book.push(21);


//enum型
enum CoffeeSize {
    SHORT = 'short',
    TALL  = 'tall',
    GRANDE= 'grande',
    VENTI = 'venti'
}
//明示的に書かなければ数字が勝手に割り振られる
enum CoffeeMenu {
    Tea,
    Moca,
    Espresso
}
const coffee = {
    hot: true,
    //sizeはCoffeeSize型
    //'hello'など文字列に変更できてしまわないように列挙型を使う
    size: CoffeeSize.TALL
}
//参照可能
coffee.size = CoffeeSize.VENTI;



//any型
//どんな型でも入る・オブジェクトにも追加可能
let anything: any = true;
anything = 'hello';
anything = ['business', 1500, false, 2323, true];
anything = {};
anything.kaka = "sjdj";
//型付けされた変数にもany型の変数を代入できてしまう
let banana = 'banana';
banana = anything;
//any型に関しては、型チェックを行わない = JavaScriptの世界
//基本的にany型は極力使わない


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