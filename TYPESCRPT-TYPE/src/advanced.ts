interface Engineer {
    name: string;
    role: string;
}

interface Blogger {
    name: string;
    follower: number;
}

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
function describeNomadWorkerProfile(nomadWorker: NomadWorker){
    console.log(nomadWorker.name);
    if('role' in nomadWorker){
        console.log(nomadWorker.role);
    }
    if('follower' in nomadWorker){
        console.log(nomadWorker.follower);
    }
}

class Dog {
    speak(){
        console.log('bow-bow');
    }
}
class Bird {
    speak(){
        console.log('tweet-tweet');
    }
    fly(){
        console.log('flutter');
    }
}

type Pet = Dog | Bird;
function havePet(pet: Pet){
    pet.speak();
    if(pet instanceof Bird){
        pet.fly();
    }
}