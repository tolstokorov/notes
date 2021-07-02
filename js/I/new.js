
// отличия let от var:
// 1. область видимости let - блок {}
// 2. let видны только после объявления
// 3. let нельзя объявлять повторно
// 4. в цикле для каждой итерации своя let

// const - как let, только неизменяемая
// const объекта фиксирует сам объект, а не его содержимое!



// Деструктуризация

let [a, b] = ['test1', 'test2'];
// a === 'test1'; b === 'test2';

let [,, a, b] = ['test1', 'test2', 'test3', 'test4', 'test5'];
// a === 'test3'; b === 'test4';
// 'test1', 'test2', 'test5' - отброшены


// spread - оператор ...
let [a, b, ...rest] = ['test1', 'test2', 'test3', 'test4', 'test5'];
// a === 'test1'; b === 'test2';
// rest === ['test3', 'test4', 'test5'];


let [a, b] = [];
// a === 'undefined'; b === 'undefined';

let [a=42, b=foo()] = [];
// a === 42; b === результату foo;

let { width:w, height:h=100 } = { width: 200 };
// w === 200; h === 100;




// Nullish coalescing operator (Null'овый оператор объединения) 
// (a ?? b)
// a, если a не null/undefined
// иначе b
// похоже на (a || b), но различает '', '0', false


// Optional chaining (Опциональная цепочка) ?.
// возвращает значение (или вызывает метод), если obj не null/undefined или возвращает undefined
obj?.prop;
obj?.[value];
obj?.foo();

Reflect.ownKeys(obj); // возвращает ВСЕ ключи объекта, включая символьные

