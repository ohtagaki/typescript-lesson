interface Engineer {
    name: string;
    role: string;
}

interface Blogger {
    name: string;
    follower: number;
}

//インターセクション型：AかつB
//name,role,followerの全てがないとダメな型
//type EngineerBlogger = ENgineer & Blogger
interface EngineerBlogger extends Engineer, Blogger{}
const quil: EngineerBlogger = {
    name: 'QUil',
    role: 'frone-end',
    follower: 1000
}

//存在しない型
type tmp = string & number;

type NumberBoolean = number | boolean;
type StringNumber = string | number;
type Mix = NumberBoolean & StringNumber;

//Lesson73
function toUpperCase(x: string | number){
    if(typeof x === 'string'){
        return x.toUpperCase();
    }
    return '';
}

type NomadWorker = Engineer | Blogger;
//typeofは7つの結果しか返さない
function describeNomadWorkerProfile(nomadWorker: NomadWorker){
    console.log(nomadWorker.name);
    if('role' in nomadWorker){
        //nomadWorkerがEngineer型になっている
        console.log(nomadWorker.role);
    }
    if('follower' in nomadWorker){
        //nomadWorkerがBlogger型になっている
        console.log(nomadWorker.follower);
    }
}

class Dog {
    //型をリテラル型にする
    kind: 'dog' = 'dog';
    speak(){
        console.log('bow-bow');
    }
}
class Bird {
    kind: 'bird' = 'bird';
    speak(){
        console.log('tweet-tweet');
    }
    fly(){
        console.log('flutter');
    }
}

type Pet = Dog | Bird;
//クラスの型判定の場合はinstanceof演算子も使用可能
//instance演算子、in演算子はJavaScriptに搭載されている
function havePet(pet: Pet){
    pet.speak();
    switch(pet.kind){
        case 'bird':
            pet.fly();
    }
    if(pet instanceof Bird){
        pet.fly();
    }
}
havePet(new Bird());

//型アサーション：手動で型を上書きする
//inputタグがあるかどうか判別できないため常にnullabeの状態
//HTMLELement：インターフェース
//HTMLELementは抽象的なモノのため具象化したい
const input = <HTMLInputElement>document.getElementById('input');
input.value = 'initial input value';