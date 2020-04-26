//Lesson29
//unknown型
let unknownInput: unknown;
let anyInput: any;
let text: string;
unknownInput = 'hello';
unknownInput = true;
unknownInput = 23;
//text = unknownInput; →　エラー発生
text = anyInput;
//活用例
//型チェックに用いる場合
if(typeof unknownInput === 'string'){
    text = unknownInput;
}

//lesson30
//error型
//何も返さないerrorメソッド
//型推論の場合、返り値はvoid型になる
//version3.0からneverが登場
function error(message: string): never {
    throw new Error(message);
  }
  console.log(error('This is an error'));