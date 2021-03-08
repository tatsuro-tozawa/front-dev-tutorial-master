const array = [1,2,3,4,5,6,'moji', false];

// push：末尾に代入
array.push('new item');

//unshift：先頭に代入 
array.unshift('new item')

// 削除（末尾）
const val = array.pop();

// 削除（先頭）
const val2 = array.shift();

console.log(array);