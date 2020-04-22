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
