//lesson14
let hasValue: boolean = true;
let count: number = 15;
let floatCount: number = 1.25;
let negativeCount: number = -20;

let single: string = 'Hello';
let double: string = "Hello";
let back: string = `Hello`;

//lesson15
let expectValue = false;
let hello;

//Lesson17
//配列の使い方
//配列に型を付ける
//予期せぬ型の要素が配列に入るのを防止できる
const fruits:　String[] = ['Apple', 'Banana','Orange'];
const fruit = fruits[0];
//型推論した場合
//複数の型を配列に格納することも可能
const expectedFruits = ['Apple', 'Banana','Orange', 2];
const anythingArray:　any[] = ['Apple', 1, true];


//Lesson18 Tuple型
//Tuple型を使って決まった形の配列を使う
//悪い例
const badBook = ['business', 1500, false, 2323, true];
//Tuple型を活用した場合
//Tuple型では明示的に型注釈しないといけない
const book: [string, number,boolean] = ['business', 1500, false];
book[1] = 700;
//book[1] = true →　コンパイルエラー発生
//TypeScriptは初期値の型チェックは厳しいが変更する場合は緩い
//下記のコードはtscのコンパイルを通過する
book.push(21);
//参照する際には、初期宣言時のチェックを行うためエラー発生
//console.log(book[3]); →　エラー発生

//lesson 19 enum型
enum CoffeeSize {
    SHORT = 'short',
    TALL =   'tall',
    GRANDE = 'grande',
    VENTI = 'venti'
}

const coffee = {
    hot: true,
    size: CoffeeSize.TALL
}
coffee.size = CoffeeSize.SHORT;

enum CoffeeSize2 {
    SHORT = 100,
    TALL,
    GRANDE,
    VENTI
}

//lesson20 any型
let anything: any = true;
anything = 'hello';
anything = ['business', 1500, false, 2323, true];
anything = {};
anything.kaka = "sjdj";

let apple = 'apple';
apple = anything;