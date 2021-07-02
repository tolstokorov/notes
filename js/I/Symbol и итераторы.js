// Примитивный тип данных Символ
let s = Symbol('name');
typeof s === 'symbol';
s.toString(); // 'Symbol(name)'
s.description; // 'name'

let n = Symbol.for('name'); // чтение из глобального реестра символов или запись, если первый раз
Symbol.keyFor(n) === 'name'; // только для глобальных символов, для остальных undefined


Symbol('a') !== Symbol('a');
Symbol.for('a') === Symbol.for('a');


Object.getOwnPropertySymbols(obj); // возвращает ТОЛЬКО символы в объекте

Symbol; // системная функция
Symbol.имя_системного_символа;


// Итераторы

let arr = 'Привет';
for(let value of arr) { alert(value) }; // П р и в е т 


let obj2 = {
    from: 24,
    to: 42,
    
    [Symbol.iterator]() {
        return this;
    },
    next() {
        // value - очередное значение
        // done – если false, то есть ещё значения, если true, то конце
    }
};
// или
let obj1 = {
    from: 24,
    to: 42
};
obj1[Symbol.iterator] = function() {
    // реализация next()
};


// асинхронные итераторы
let obj1 = {
    from: 24,
    to: 42,


    [Symbol.asyncIterator]() {
        // реализация next()
    },
    
    async next() {}
};

(async () => {

    for await (let value of obj1) {}

})();





Symbol.hasInstance
Symbol.isConcatSpreadable
Symbol.match
Symbol.matchAll
Symbol.replace
Symbol.search
Symbol.species
Symbol.split
Symbol.toPrimitive
Symbol.toStringTag
Symbol.unscopables

Symbol.prototype.valueOf()