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