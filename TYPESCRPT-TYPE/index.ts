//boolean型の活用
let hasValue: boolean = true;
let falValue: boolean = false;


//number型の活用
//number型は浮動小数点を取る
//number型は負の数を取ることも可能 
let count: number = 10;
let float: number = 3.14;
let negativeValue: number = -0.56;

//String型の活用
let single: string = `hello`;
let double: string = "hello";
let backQuart: string = `hello`;

//型が合っているかどうか手っ取り早く確認する方法
//①変数にマウスカーソルを合わせる
//VSCodeにTSCが搭載されている
//tsc(TypeScriptコンパイラ)が型判定している


//型注釈と型推論
//: booleanという記述が無くてもboolean型と見なす
let expectedValue  = true;
let expectedCount = 20;
let expectedFloat = 3.14;
let expectedNegative = -13.2;
let expectedSingle = `hello`;
let expectedDouble = "hello";
let expectedBackQuart = `hello`;

//基本的には型推論を活用する
//型推論が出来ない場合に型注釈を活用する
//①変数を初期化出来ない場合
//どんな型でも代入可能になってしまう悪例
let everything;
everything = 23;
everything = "Good Night";
everything = false;

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
const anything:　any[] = ['Apple', 1, true];
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