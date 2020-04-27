//ES5以前はコンストラクタ関数を用いてオブジェクトを生成
//Class…オブジェクトの設計図
class Person {
    name: string;
    //コンストラクタ…オブジェクトを作成する時に実行される関数
    //オブジェクトの初期化
    constructor(initName: string) {
        //this…プロパティの集まりが格納されている
        this.name = initName;
    }
}

//インスタンスの生成
const QUil = new Person('Quil');
console.log(QUil);