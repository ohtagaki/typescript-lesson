//any型
//どんな型でも入る・オブジェクトにも追加可能
let anything: any = true;
anything = 'hello';
anything = ['business', 1500, false, 2323, true];
anything = {};
anything.kaka = "sjdj";
//型付けされた変数にもany型の変数を代入できてしまう
//any型に関しては、TypeScriptは型チェックなどを行わない
let banana = 'banana';
banana = anything;
//any型に関しては、型チェックを行わない = JavaScriptの世界
//基本的にany型は極力使わない