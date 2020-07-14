interface Engineer {
    name: string;
    role: string;
}

type Blogger = {
    name: string;
    follower: number;
}
//インターセクション型
//type EngineerBlogger = Engineer & Blogger;
interface EngineerBlogger extends Engineer, Blogger {};

const mike: EngineerBlogger = {
    name: 'Mike',
    role: 'front-end',
    follower: 1000
}

//never型になる
type tmp = string & number;

//重なっている型になる(mixTypeはnumber型)
type numberBoolean = number | boolean;
type stringNumber = string | number;
type mixType = numberBoolean & stringNumber;

//lesson73
function toUpperCase(x : string): string;
function toUpperCase(x : number): number;
function toUpperCase(x : string | number) {
    if(typeof x === 'string') {
        return x.toUpperCase();
    }else{
        return x;
    }
}
const upperHello = toUpperCase;
upperHello('h2');
upperHello(32);

interface TmpFunc {
    (x: string): number;
    (x: number): number;
}
const upperHello2: TmpFunc = function(x: string | number) {return 0};


type NomadWorker = Engineer | Blogger;
function describeNomadWorkerProfile(nomadWorker: NomadWorker) {
    console.log(nomadWorker.name);
    //typeof演算子が使えるのは7つの型のみ
    //プロパティがあるかどうかのcheckはinを使う
    if('role' in nomadWorker) {
        //Engineer型であることが保証されている
        console.log(nomadWorker.role);
    }

    if('follower' in nomadWorker) {
        //Blogger型であることが保証されている
        console.log(nomadWorker.follower);
    }
}

class Dog {
    //タグ付きUnion
    kind: 'dog' = 'dog';
    speak() {
        console.log('bow-bow');
    }
}

class Bird {
    //タグ付きUnion
    kind: 'bird' = 'bird';
    speak() {
        console.log('tweet-tweet');
    }
    fly() {
        console.log('flutter');
    }
}

type Pet = Dog | Bird;
function havePet(pet: Pet) {
    pet.speak();
    switch (pet.kind) {
        case 'bird':
            pet.fly();
    }
    //instanceof：生成されたインスタンスがどのclass(設計図)から生成されたかをcheckする
    //もともと、JavaScriptに搭載されている
    if(pet instanceof Bird){
        pet.fly();
    }
}
havePet(new Bird());

//lesson75
//型アサーション
//lesson76 !マークを付けることでnullではないことを示すことができる
const input = <HTMLInputElement>document.getElementById('input')!;
input.value = 'initial input value';
const input2 = <HTMLInputElement>document.getElementById('input') as HTMLInputElement;
input2.value = 'initial2';

//lesson77
interface Designer {
    name: string;
    [index: string]: string;
}
const designer: Designer = {
    name: `Quil`,
    role: 'web'
}
console.log(designer);

//lesson79
interface DownloadData {
    id: number;
    user?: {
        name?: {
            first: string;
            last: string;
        }
    }
}
const downloadData: DownloadData = {
    id: 1
}
console.log(downloadData.user?.name?.first);

//lesson80 
// | と ?? との違い：空文字列の扱い方が異なる
const userData = downloadData.user ?? 'no-user';

//lesson81
type id = DownloadData["id"];

let target: string = 'hello'
let source: 'hello' = 'hello'
//source = target;

//enum型とnumber型には互換性がある
//enum型同士には互換性がない
enum Color {
    RED,
    BLUE
}
let target2 = Color.RED;
let source2 = 100;
source2 = target2;

let target3 = function (a: string, b:string) {}
let source3 = function (a: string) {}
target3 = source3;
target3('h1', 'hello');

class AdavancedPerson {
    name: string = 'Peter'
     age: number = 35;
}
class AdavancedCar {
    name: string = 'Ford'
    age: number = 5;
}
let target4 = new AdavancedPerson;
let source4 = new AdavancedCar;
target4 = source4;

//lesson83 
//型の安全性：割と柔軟な部分もある
//ドキュメントを読みましょう