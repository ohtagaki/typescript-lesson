//Lesson46
//オブジェクト指向プログラミング(OOP)とは
//①現実世界の物に見立ててプログラムする方法
//②どのようにアプリケーションを作るかという方法の1つ
//③人間にとってわかりやすくロジックを分割する方法の1つ

//オブジェクトを作る方法
//①オブジェクトリテラル
//②Classを使用

//Classとは
//①オブジェクトの設計図
//②Classから作られたオブジェクトをインスタンスと呼ぶ
//③似たようなオブジェクトを複数作成するときに便利


//ES5以前はコンストラクタ関数を用いてオブジェクトを生成
//ES6以降はClass構文
//Class…オブジェクトの設計図
class Person {
    name: string;
    //コンストラクタ…オブジェクトを作成する時に実行される関数
    //オブジェクトの初期化
    constructor(initName: string) {
        //this…プロパティの集まりが格納されている
        this.name = initName;
    }

    //Lesson49 メソッドの追加
    //thisパラメータ：第一パラメータにしか取れない偽りのパラメータ
    //Class内のメソッドだけでなく、一般的なメソッドにも使用可能
    //アロー関数を使用した場合は、thisは定義時に決まる

    //Lesso50：型としてClassを利用
    //Class内で使用するthis：インスタンスを表している
    greeting(this: Person) {
        console.log(`Hello! My name is ${this.name}`);
    }
    //Class内でthisを使用すると、当該クラスのインスタンスを示す
}

//nameプロパティとgreetingメソッドを持つオブジェクトという意味
//Classを作る意味
//①オブジェクトの設計図を作る
//②そのクラスが作り出すインスタンスを表す型を同時に作成する
let typePerson: Person;

//インスタンスの生成
const qUil = new Person('Quil');
qUil.greeting();

//this：実行された場所(呼び出だれたタイミング)によって値が変化する
const anotherQUil = {
    name:'anotherQuil',
    //greetingメソッド内のthisはanotherQUilインスタンスを指す
    //間接的に記述した場合、greetingメソッド内にthisが使われているかどうか不明なのでエラーを吐かない
    greeting:qUil.greeting
}
//オブジェクトの中のメソッドの中でthisを使用すると、そのオブジェクトを示す
anotherQUil.greeting();
