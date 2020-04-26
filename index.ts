let hello: string = 'Hello Typescript';
console.log(hello);

//lesson6 ドキュメントとしての側面を活用する
//他の人にわかりやすくコードを説明できる
//third patryパッケージのソースコードを読むときにtypescriptの知識がないとしんどい
//javascriptのファイルからでもtypesceriptのパッケージをinport可能
function addSample(a: number , b: number): number{
    return a + b;
}