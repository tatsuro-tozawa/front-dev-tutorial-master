// 変数に関数を代入することもできる
// 無名関数
const hello = function(name, age){
    console.log('hello' + name + age);
    // 関数で戻される値（戻り値）
    return name + age;
}


// // 関数 関数名（引数）
// function hello(name, age){
//     console.log('hello' + name + age);
//     // 関数で戻される値（戻り値）
//     return name + age;
// }

hello('Code Mafia', 10);
const returnVal = hello('Code Mafia 2', 20);
console.log(returnVal);