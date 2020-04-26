//boolean型の活用
let haveValue: boolean = true;
let falseValue: boolean = false;

//number型の活用
//number型は負の数を取ることも可能
let countNum: number = 23;
//number型は浮動小数点を取る
let floatNum: number = 3.141593;
//number型は負の数を取ることも可能
let minusNum: number = -231;

//string型の活用
let singleQuart: String = 'Good Night';
//""でも可能
let doubleQuart: String = "Good Night";
//``でも可能
let backQuarts: String = `Good Night`;

//型が合っているかどうか手っ取り早く確認する方法
//①変数にマウスカーソルを合わせる
//VSCodeにTSCが搭載されている
//tsc(TypeScriptコンパイラ)が型判定している


//型注釈と型推論
//「: boolean」という記述が無くてもboolean型と見なす
let expectedValue = true;
let expectedCount = 20;
let expectedFloat = 3.14;
let expectedNegative = -13.2;
let expectedSingle = `hello`;
let expectedDouble = "hello";
let expectedBackQuart = `hello`;

//基本的には型推論を活用する
//型注釈は冗長になりやすい
//型推論が出来ない場合に型注釈を活用する
//①変数を初期化出来ない場合
//宣言時に型指定しないと、any型になる
//どんな型でも代入可能になってしまう悪例
let everything;
everything = 23;
everything = "Good Night";
everything = false;
