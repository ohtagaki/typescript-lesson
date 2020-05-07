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