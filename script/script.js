let arr = [1, 2, 3, 4, 5, 6, , 7, 8]//массив с одним  типом данных
let arr1 = ['str', 2, true, [1, 2, 3, 4, 5, 6, 7, 8], { name: 'r', age: 2323 }]//массив с разными типами данных
let obj = {
    name: 'r',
    age: 23,
    ismarried: false,
}
Object.freeze(obj)//заморозить объект
obj.nickname = "RTZ"

console.log(obj);
console.log(Array.isArray(arr));//проверка на массив
console.log(Array.isArray(obj));
console.log(typeof (arr), typeof (arr1), typeof (obj),);

console.log(Object.keys(obj));//получение ключей объета
console.log(Object.values(obj));//получение значение объекта




let word = ['Bob', 'Jane', "Leo", 'Alex', 'Dick', 'Roma', 'Antony', "Leo"]

word.indexOf('Leo')//ищет с начала(выдает цифру)
word.lastIndexOf('Leo')//ищет с конца
word.includes('Leo', 3)//проверяет есть ли элемент в массиве ответ в виде тру фолс

let word2 = word.slice(1, 4)//возвращает массив с определенными значениями
//word.slice(откуда будем брать, до куда брать будем)
//word.slice(от,до)
//word.slice => ctrl+x
let word3 = word.splice(1, 3)
//word.splice(откуда,сколько)
//word.splice => ctrl+x

word = word.concat(word3)//добавление в конец массива
let names = ['Sulton', 'Donik', 'Tima',]
names = names.concat(word)
console.log(names);

word.pop()//удаление последнего элемента
word.shift()//удаление первого элнмента

word.push('Bob')//добавление в конец
word.unshift('Bob')//добавление в начало
word.reverse()//переворот массива

let arr3 = ['h', 'e', 'l', 'l', 'o', , 'w', 'o', 'r', 'l', 'd',]
//arr3.join() сделал из них строку но с запятыми
//arr3.join('') сделал из них строку без запятых
arr3 = arr3.join('');
arr3 = arr3.split('');//сделал массив который разделил слово по буквам
//arr3.split()//сделали из стринга массив с однтим словом

console.log(word, word.length, word[0], word[word.length - 1]);
console.log(arr3);







