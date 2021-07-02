
// Функции

// Function Declaration
function sum (a, b) {
    return a + b;
}

// Объявление функции Function Declaration, сделанное в блоке, видно только в этом блоке.


// Function Expression
const sum = function(a, b) {
    return a + b;
}
// Named Function Expression (NFE)
const sum = function inner(a, b) {
    return a + b;
}


new Blah; // функция конструктор
// 1. Создаётся новый пустой объект.
// 2. Ключевое слово this получает ссылку на этот объект.
// 3. Функция выполняется. Как правило, она модифицирует this , добавляет методы, свойства.
// 4. Возвращается this .

// возвращает по умолчанию this;
// если есть return {}; , то {}
// если есть return etc; , то тоже this

const sum = new Function('a', 'b', 'return a+b;');
const sum = new Function('a, b', 'return a+b;');
const sum = new Function('a , b', 'return a+b;');

const blah = new Function('alert(42);');

// В функциях, создаваемых через new Function,
// [[Scope]] в ES5 / [[Environment]] в ES6  указывает на window

// При помощи специального статического геттера Symbol.species можно вернуть конструктор,
// который JavaScript будет использовать в методах для создания новых объектов




arguments // Псевдо-массив аргументов функции

arguments[i];
arguments.length;

arguments.callee; // аналог NFE; устарел в 'use strict'
arguments.callee.caller; // ссылка на вызывающую функцию; устарел в 'use strict'
    arguments.caller; // раритетный аналог arguments.callee.caller




// immediately-invoked function expressions» (IIFE)
(function() {})();
(function() {}());
+function() {}();
-function() {}();
!function() {}();
~function() {}();




// по умолчанию и spread оператор в функциях
function foo(a=42, b=foo(), ...rest) {};
// можно использовать rest вместо псевдо-массива arguments
// rest - настоящий, а не псевдо-массив

// деструктуризация параметров
function foo( { a=42, b=24 } = {} ) {};

foo.name === 'foo';
foo.length; // кол-во параметров фу-ии (...rest не считается)

foo.displayName = 'Собственное имя функции для консоли'; // НЕСТАНДАРТНОЕ!!! 

// Стрелочные функции

() => 42;
a => a+1;
(a) => a+1;
(a, b) => a+b;

// return'ит автоматически
// но если использовать {}, то return надо самому ставить

// у стрелочных функций нес своего this'а
// стрелочные функции нельзя использовать с new
// в стрелочных функциях псевдо-массив arguments берётся из вызывающей функции





fn.call(myThis, arg1, arg2);
fn.apply(myThis, [arg1, arg2]);

// null/undefined в call/apply дают:
    // в старом стандарте - window
    // в 'use strict' - как есть (null/undefined)

fn.bind(myThis, [arg1, arg2]);

// каррирование 

// декоратор - функция получает функцию и возвращает обертку, которая делает что‑то своё «вокруг» вызова основной функции


fn.call(myThis, ...args); // позволяет передавать перебираемый объект
fn.apply(myThis, args); // позволяет передавать псевдо-массив



fn.toString();





function Blah() {
    alert(new.target);
}
new Blah(); // код функции
Blah(); // undefined








// Классы

// Класс нельзя вызывать без new , будет ошибка
// Класс ведёт себя как let
// Методы класса - настоящие методы, всегда в 'use strict' и не перечислимы
// Свойств у класса нет, но можно через геттер

class Название extends Родитель {
    constructor() {} // запускается при создании
    методы // записываются в prototype
    static метод() {} // доступен как Название.метод();
};

// так жк есть Class Declaration, Class Expression и Named Class Expression(NCE)

super(...args); // в конструкторе вызывать строго ДО this