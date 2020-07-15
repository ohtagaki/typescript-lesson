//lesson93
//型を引数として受け取る
function copy<T extends {name: string}, U extends keyof T> (value: T, key: U): T{
    value[key]
    return value;
}

console.log(copy({name: 'Mike' , age: 23}, 'name'));

//型のkeyを取り出してunion演算子をつける
type K = keyof { name: string; age: number}