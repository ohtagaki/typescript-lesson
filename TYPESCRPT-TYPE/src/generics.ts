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

interface Todo {
    title: string;
    text: string;
}
type Todoable = Partial<Todo>
type ReadTodo = Readonly<Todo>

const fetchData: Promise<string> = new Promise(resolve => {
    setTimeout(() => {
        resolve('hello');
    }, 3000);
})
fetchData.then(data => {
    data.toUpperCase();
})
const vegetables: Array<string> = ['Tomato', 'Apple', 'Banana'];

interface ResopnseData<T extends{message: string} = any> {
    data: T;
    status: number;
}
let tmp2: ResopnseData;

//lesson100
interface Vegetables {
    readonly tomato: string;
    pumpkin?: string;
}
let tmp3: keyof Vegetables;
type MappedTypes = {
   -readonly [P in keyof Vegetables]-?: string
}