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
abstract class Person {
    //public name: string;
    //private age: number;
    static species = 'Homo sapiens';
    static isAdult(age: number){
        if(age >= 18){
            return true;
        }else{
            return false;
        }
    }

    //lesson49
    //コンストラクタ…オブジェクトを作成する時に実行される関数
    //オブジェクトの初期化

    //Lesson52 初期化を省略する方法
    //①フィールドの宣言を消す
    //②コンストラクタの引数にアクセス修飾子込みでプロパティを設定する
    constructor(public readonly name: string, protected age: number) {
        //this…プロパティの集まりが格納されている
    }

    //Lesson51
    //数値を自由に変更できてしまう →　変更しないようにprivate修飾子
    //privateを付けたプロパティは、Classの外側からアクセスできない(読み込みもできない)
    //publicを付けたプロパティは、Classの内側でも外側でもアクセス可能
    //デフォルトでは、publicとなっている
    //JavaScriptでは、今のところアクセス修飾子という概念はない
    //実装されうるJSでのprivate・publicの実装方法は異なる
    incrementAge(){
        this.age += 1;
    }

    //Lesson49 メソッドの追加
    //thisパラメータ：第一パラメータにしか取れない偽りのパラメータ
    //Class内のメソッドだけでなく、一般的なメソッドにも使用可能
    //アロー関数を使用した場合は、thisは定義時に決まる

    //Lesso50：型としてClassを利用
    //Class内で使用するthis：インスタンスを表している
    greeting(this: Person) {
        console.log(`Hello! My name is ${this.name}. I am ${this.age} years old.`);
        this.explainJob();
    }
    //Class内でthisを使用すると、当該クラスのインスタンスを示す

    //lesson58
    abstract explainJob(): void;
}

//nameプロパティとgreetingメソッドを持つオブジェクトという意味
//Classを作る意味
//①オブジェクトの設計図を作る
//②そのクラスが作り出すインスタンスを表す型を同時に作成する
let typePerson: Person;

//インスタンスの生成
//const qUil = new Person('Quil', 34);
//qUil.incrementAge();
//qUil.greeting();

//this：実行された場所(呼び出だれたタイミング)によって値が変化する
//const anotherQUil = {
    //greetingメソッド内のthisはanotherQUilインスタンスを指す
    //間接的に記述した場合、greetingメソッド内にthisが使われているかどうか不明なのでエラーを吐かない
    //greeting:qUil.greeting
//}
//オブジェクトの中のメソッドの中でthisを使用すると、そのオブジェクトを示す
//anotherQUil.greeting();


//Lesson53 ReadOnly修飾子
//フィールドやパラメータに付けることが可能
//Class内・外で読み込むだけの処理が可能
//値を変更させる処理ができない
//一度決まるとほぼ変わらないもの(名前やID番号など)に対して有効
//フィールドの初期化の際にも付けることができる(コンストラクタ関数内では書き込み処理も可能)
//コンストラクタ関数内の処理は初期化処理であるためreadonlyが付いているフィールドの値の変更も可能
//private・publicの後に付けないとエラーが出る
//privateとの違いに注意

//Lesson54 extendsを利用した他クラスの継承
//継承という機能はES6からある
//例：教師は人間の部分集合
class Teacher extends Person{
    private static instance: Teacher;
    get subject(): string {
        if(!this._subject){
            throw new Error('There is no subject.');
        }
        return this._subject;
    }

    //getの関数名と一緒にした場合、setterメソッドの引数はgetの返り値と一緒の型になる
    set subject(value){
        if(!value){
            throw new Error('There is no subject.');
        }
        this._subject = value;
    }

    private constructor(name: string, age: number, private _subject: string){
        //super関数：親クラスの(コンストラクタ)関数
        super(name, age);
    };

    static getInstance(){
        if(Teacher.instance){
            return Teacher.instance;
        }
        Teacher.instance = new Teacher('Mike', 35, 'Music');
        return Teacher.instance;
    }

    greeting() {
        console.log(`Hello! My name is ${this.name}. I am ${this.age} years old. I teach ${this.subject}.`);
    }

    explainJob(){
        console.log(`I am a teacher and I teach ${this.subject}.`)
    }

}
//const teacher = new Teacher('Mike' , 25, 'Math');
//console.log(teacher.subject);
//teacher.subject = 'Music';
//teacher.greeting();

//Lesson55 protected修飾子
//privateを付けたフィールドは、派生先のクラスでもprivateなフィールドであり続ける
//派生先のクラスでフィールドとして利用するための修飾子としてprotectedがある

//Lesson56 getter・setter
//getter・setterはES5以降のバージョンで使用可能
//

//lesson57 static(ES6でも利用可能) 
//staticで指定したフィールド・クラスはインスタンスを生成しているわけではないため、thisでは呼び出せない
//this：クラスという設計図から生成されたオブジェクト(=インスタンス)を指し示している
console.log(Person.species);
console.log(Person.isAdult(25));

//Lesson58 abstract
//抽象メソッドや抽象フィールドと設定する場合は、クラスを抽象クラスにしないといけない
//抽象クラスはインスタンスを生成できない
//抽象クラス：継承のために利用されるクラス
//const qUil = new Teacher('Quil', 26, "Math");

//Lesson59 シングルトンパターン
//シングルトン：クラスから1つしかインスタンスを生成できないデザインパターン
//private修飾子コンストラクタ関数につけることで、クラスの外からnewでインスタンスを生成できないできなくする