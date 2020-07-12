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
function toUpperCase(x : string | number) {
    if(typeof x === 'string') {
        return x.toUpperCase();
    }else{
        return '';
    }
}

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