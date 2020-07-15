//lesson93
//型を引数として受け取る
function copy<T extends {name: string}, U extends keyof T> (value: T, key: U): T{
    value[key]
    return value;
}

console.log(copy({name: 'Mike' , age: 23}, 'name'));

//型のkeyを取り出してunion演算子をつける
type K = keyof { name: string; age: number}

//lesson96
class LightDatabase<T extends string | number | boolean> {
    private data: T[] = [];
    add(item: T){
        this.data.push(item);
    }
    remove(item: T){
        this.data.splice(this.data.indexOf(item), 1);
    }
    get(){
        return this.data;
    }
}

//Union型は柔軟すぎるため注意(型安全ではなくなる)
const stringLightDatabase = new LightDatabase<string>();
stringLightDatabase.add('Apple');
stringLightDatabase.add('Banana');
stringLightDatabase.add('Grape');
stringLightDatabase.remove('Banana');
console.log(stringLightDatabase.get());

//interfaceにジェネリクスを適用
interface TmpDatabase<T> {
    id: number;
    data: T[];
}
const tmpDatabase: TmpDatabase<number> = {
    id: 32,
    data: [35]
}