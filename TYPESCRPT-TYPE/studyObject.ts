//オブジェクトに型を付ける方法
const person:{
    //型注釈を付ける場合、;で区切る
    name: string;
    age: number;
} = {
    name: 'Jack',
    age: 21
}
console.log(person.age);

//object型も存在する
//object型は基本的には使わない
//一般的なオブジェクト全般を意味する = どんなkey(プロパティ)を持っているかという情報が存在しない
//nameやageにアクセスしようとしてもエラーが発生する
const personObject: object = {
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
