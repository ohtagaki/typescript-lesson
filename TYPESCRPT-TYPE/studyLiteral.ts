//Literal型
//決まった値のみを受け入れる
//constを用いると型推論でリテラル型を採用する
const apple =  'apple';
const specificNum = 35;
const negative = false;

//union型の文字列リテラル型を使用
//union型とリテラル型を組み合わせることでenum型的利用ができる
//clothSizeは、'small'・'medium'・'large'しか受け付けない
let clothSize: 'small' | 'medium' | 'large' = 'medium';
const cloth: {
    color: string,
    size: 'small' | 'medium' | 'large'
} = {
    color: 'white',
    size: 'large'
}
//JSへのコンパイル時にenum型はオブジェクトを生成する
//Union型とリテラル型を組み合わせた場合は、オブジェクトを生成しないため参照できない
//enum型の方がわかりやすいが、少ない個数だと冗長になりやすい

//ailas型
//ClothSizeを新しい型として扱うことができる
//JSに変換すると消えてしまう
type ClothSize = 'small' | 'medium' | 'large';
let largeSize: ClothSize = 'large';
let clothSizeSample: ClothSize = 'medium';
const clothSample: {
    color: string,
    size: ClothSize
} = {
    color: 'white',
    size: clothSizeSample
}