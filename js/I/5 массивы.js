// Array

Array.isArray(arr); // true/false

let arr1 = [];
let arr2 = new Array(1, 2); // [1, 2]
let arr3 = new Array(3); // [undefined, undefined, undefined]

arr.length; // последний индекс массива плюс 1
arr.length = 0; // Очищает массив

arr.push(42, 24);
arr.pop();

arr.unshift(42, 24);
arr.shift();


'test1, test2, test3'.split(', ', 2); // ['test1', 'test2']
['test1', 'test2', 'test3'].join(', '); // 'test1, test2, test3'

['test1', 'test2', 'test3'].splice(start, count, blah1, blah2, blah3);

['test1', 'test2', 'test3'].slice(start, end); // [start, end)

arr.sort(); // по умолчанию сортирует как строки (лексикографически)
arr.sort(fn); // fn - самописная функция возвращает:
    // Положительное значение, если a > b
    // Отрицательное значение, если a < b
    
[1, 2, 3].reverse(); // [3, 2, 1]

[1, 2].concat([3, 4], 5); // [1, 2, 3, 4, 5]

arr.indexOf(element, position); // Номер элемента или -1
arr.lastIndexOf(element, position); // Номер элемента или -1

Object.keys(obj); // массив свойств объекта obj
Object.keys(obj).length; // кол-во свойств в объекте obj



callback(item, i, arr);

arr.forEach(callback, thisArg);

arr.filter(callback, thisArg); // возвращает массив из эл-ов вернувших true

arr.map(callback, thisArg); // возвращает новый изменённый массив

arr.every(callback, thisArg); // возвращает true, если все эл-ты вернут true
arr.some(callback, thisArg); // возвращает true, если хоть один эл-т вернёт true


reduceCallback(previousValue, item, i, arr);
arr.reduce(reduceCallback, initialValue);
arr.reduceRight(reduceCallback, initialValue); // с права на лево






Array.of(el1, el2); // создаёт массив [el1, el2]
Array.from(old_iter_or_like_obj, fn, thisArg); 

arr.at(index);

arr.toString();
arr.toLocaleString(locales, options);

arr.keys(); // 0,1,2,3...

arr.includes(value, from_index);

arr.flatMap(callback, thisArg);
arr.flat(depth);

arr.find(callback, thisArg);
arr.findIndex(callback, thisArg);

arr.fill(value, start, end);
arr.copyWithin(target, start, end);


// итераторы
arr.values();
arr.entries();
