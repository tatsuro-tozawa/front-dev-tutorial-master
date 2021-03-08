// オブジェクト
const person = {
    name: ['Code', 'Mafia'],
    age: 32,
    gender: 'male',
    interests: {
        sports: 'soccer',
        music: 'piano'
    },
    // メソッドもオブジェクト化できる
    getFullname: function() {
        // this：宣言されたオブジェクトを指す
        console.log(this.name[0] + this.name[1])
    }
};
const ageKey = 'age';
// ブラケット記法（変数を使用したい場合に使う）
person[ageKey] = 12;
console.log(person.age);

person.getFullname();