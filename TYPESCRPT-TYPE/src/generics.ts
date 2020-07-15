//lesson93
//型を引数として受け取る
function copy<T extends {name: string}> (value: T): T{
    return value;
}

console.log(copy({name: 'Mike'}));