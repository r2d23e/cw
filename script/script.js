// let arr = [1, 2, 3, 4, 5, 6, , 7, 8]//массив с одним  типом данных
// let arr1 = ['str', 2, true, [1, 2, 3, 4, 5, 6, 7, 8], { name: 'r', age: 2323 }]//массив с разными типами данных
// let obj = {
//     name: 'r',
//     age: 23,
//     ismarried: false,
// }
// Object.freeze(obj)//заморозить объект
// obj.nickname = "RTZ"

// console.log(obj);
// console.log(Array.isArray(arr));//проверка на массив
// console.log(Array.isArray(obj));
// console.log(typeof (arr), typeof (arr1), typeof (obj),);

// console.log(Object.keys(obj));//получение ключей объета
// console.log(Object.values(obj));//получение значение объекта




// let word = ['Bob', 'Jane', "Leo", 'Alex', 'Dick', 'Roma', 'Antony', "Leo"]

// word.indexOf('Leo')//ищет с начала(выдает цифру)
// word.lastIndexOf('Leo')//ищет с конца
// word.includes('Leo', 3)//проверяет есть ли элемент в массиве ответ в виде тру фолс

// let word2 = word.slice(1, 4)//возвращает массив с определенными значениями


// //word.slice(откуда будем брать, до куда брать будем)
// //word.slice(от,до)
// //word.slice => ctrl+x


// let word3 = word.splice(1, 3)
// //word.splice(откуда,сколько)
// //word.splice => ctrl+x

// word = word.concat(word3)//добавление в конец массива
// let names = ['Sulton', 'Donik', 'Tima',]
// names = names.concat(word)
// console.log(names);

// word.pop()//удаление последнего элемента
// word.shift()//удаление первого элнмента

// word.push('Bob')//добавление в конец
// word.unshift('Bob')//добавление в начало
// word.reverse()//переворот массива

// let arr3 = ['h', 'e', 'l', 'l', 'o', , 'w', 'o', 'r', 'l', 'd',]
// //arr3.join() сделал из них строку но с запятыми
// //arr3.join('') сделал из них строку без запятых
// arr3 = arr3.join('');
// arr3 = arr3.split('');//сделал массив который разделил слово по буквам
// //arr3.split()//сделали из стринга массив с однтим словом

// console.log(word, word.length, word[0], word[word.length - 1]);
// console.log(arr3);



let word = ['Bob', 'Jane', 'Leo', 'Alex', 'Leo', 'Dick', 'Roma', 'Antony',]//массив 1

let obj = {
    name1: 'Gojo',
    name2: 'Bald',
    name3: 'Faxri',
    name4: 'Rocket Sam',
    name5: 'Jack',
}//объект

let names = ['Amir', 'Jo', 'Genry',]//массив 2

let with_obj = ['Bob', 'Jane', 'Leo', 'Alex', 'Dick', 'Roma', 'Antony', obj]

let all = word.concat(obj, names)

console.log(Array.isArray(names));//проверка на массив

console.log(with_obj);// с объектом

console.log(word);//проверка массива были и другие переменные

console.log(all);//все в одном
console.log(word, Object.values(obj), names);//если все по отдельности

//задание 2

let name = prompt('1)Bob 2)Jane 3)Leo 4)Alex 5)Dick 6)Roma 7)Antony')
let word1 = ['Bob', 'Jane', 'Leo', 'Alex', 'Dick', 'Roma', 'Antony',]



if (name == 'bob' || name == 'Bob' || name == 1) {
    let del = word1.slice(1)
    console.log(del);
}
else if (name == 'jane' || name == 'Jane' || name == 2) {
    let del = word1.splice(1,1)
    console.log(word1);
}else if (name == 'leo' || name == 'Leo' || name == 3) {
    let del = word1.splice(2,1)
    console.log(word1);
}
else if (name == 'alex' || name == 'Alex' || name == 4) {
    let del = word1.splice(3,1)
    console.log(word1);
}
else if (name == 'dick' || name == 'Dick' || name == 5) {
    let del = word1.splice(4,1)
    console.log(word1);
}
else if (name == 'roma' || name == 'Roma' || name == 6) {
    let del = word1.splice(5,1)
    console.log(word1);
}
else if (name == 'antony' || name == 'Antony' || name == 7) {
    let del = word1.splice(6,1)
    console.log(word1);
}
else {
    alert('не то имя')
}