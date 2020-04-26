//配列の使い方
//配列に型を付ける
//予期せぬ型の要素が配列に入るのを防止できる
const fruits:　String[] = ['Apple', 'Banana','Orange'];
const fruit = fruits[0];
//型推論した場合
//複数の型を配列に格納することも可能
const expectedFruits = ['Apple', 'Banana','Orange', 2];
const anythingArray:　any[] = ['Apple', 1, true];


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


//enum型
//列挙型 = 特定のまとまったグループのみを受け入れる型
//書き方
//JSファイルにコンパイルするとオブジェクトが作られる
enum CoffeeSize {
    SHORT = 'short',
    TALL  = 'tall',
    GRANDE= 'grande',
    VENTI = 'venti'
}
//初期化を明示的に書かなければ数字が勝手に割り振られる
//なるべく数字を使って、メモリ消費量を減らす
enum CoffeeMenu {
    Tea,
    Moca,
    Espresso
}
const coffee = {
    hot: true,
    //sizeはCoffeeSizeという列挙型
    //'hello'など文字列に変更できてしまわないように列挙型を使う
    size: CoffeeSize.TALL
}
//参照可能
coffee.size = CoffeeSize.VENTI;
//coffee.size = 'venti'; → string型ではないため、エラー発生