// Map - коллекция записей ключ:значение
// в качестве ключей можно использовать всё, в том числе и объект
let map = new Map();
map.set(42, 'aaa') // 42 !== '42'
    .set('42', 'bbb'); // можно 'чейнить'

map.get(42); // 'aaa'
map.size; // 2

let map2 = new Map([
    [42, 'aaa'],
    ['42', 'bbb']
]);

let success = map.delete(key);
map.clear(); // удаляет всё

let success = map.has(key);

map.keys(); // возвращает итерируемый объект с ключами
map.values(); // возвращает итерируемый объект со значениями
map.entries(); // возвращает итерируемый объект с записями [ключ, значение] по умолчанию в for..of

// Перебор гарантированно осуществляется в порядке вставки

map.forEach((item, i, map) => {}, thisArg);

let obj = { a: 42, b: 24 };
let map = new Map(Object.entries(obj)); // [ ['a', 42], ['b', 24] ]

let map = new Map( [ ['a', 42], ['b', 24] ] );
let obj = Object.fromEntries(map.entries()); // или Object.fromEntries(map);



// Set - коллекция УНИКАЛЬНЫХ записей
let set = new Set();

set.add(item) // добавляет item
    .add(item); // чейнится

let set2 = new Set( ['aaa', 'bbb', 'ccc'] );

let success = set.delete(item);
set.clear(); // удаляет всё

let success = set.has(item);

set.forEach((value, valueAgain, set) => {}, thisArg); // value === valueAgain для совместимости с Map

set.values(); // возвращает перебираемый объект для значений
    set.keys(); // то же, что и set.values(); для совместимости с Map
    set.entries(); // возвращает итерируемый объект с записями [значение, значение]
    //  по умолчанию в for..of; для совместимости с Map



// WeakMap/WeakSet - инфа жива пока жив объект с которыми она связанна 
// нет size
// не итерируется
// нет clear()
// нет доступа сразу ко всем записям (сборщик мусора виноват)

// WeakMap - ключом может быть только объект
// WeakSet - значения только объекты