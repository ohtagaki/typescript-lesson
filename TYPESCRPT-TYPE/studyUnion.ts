//Union型
//複数の型を受け入れられる型
// | をor演算子として活用する
//格納されている型によってエラーが出たり出なかったりする
let unionType: number | string = 10;
//unionType.toUpperCase(); → number型のためエラー
//文字列に置換するとエラー発生しなくなる
unionType = 'aaaaaa';
unionType.toUpperCase();

//配列の場合
let unionTypes: (number | string)[] = [23, 'genius'];
