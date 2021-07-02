'use strict'; // используй ES5 shim в старых браузерах

 
// <script>blah-blah</script>
// <script src="/js/blah.js"></script>
// <script src="/js/blah.js" type="text/javascript" language="javascript"></script> // устаревший вариант

// async - как загрузится, в произвольном порядке (в приоритете над defer)
// defer - загружается после html, строго в порядке появления в коде

// скрипты из js файлов - по умолчанию async
// а в модулях - defer

// чтобы гарантировать порядок:
//     let script = document.createElement('script');
//     script.async = false;


// имена переменных содержат: x, X, $, _, 4
// но не начинаются с цифр

typeof x;
typeof(x);

// number
//     42, -42, 0, Infinity, -Infinity, NaN
// string
//     '', "", ``
// boolean
//     true, false
// null // есть баг, что typeof null === object
// undefined
// object
//     function // есть фича, что typeof foo === function


// операторы
//     унарные:
//         -() минус
//         +() плюс (приведение к числу)
//     бинарные:
//         () - () минус
//         () + () плюс или конкатенация
//         () * () умножение
//         () / () деление с дробной частью
//         () % () остаток от деления нацело
//         () ** () возведение в степень (в том числе и 1/x)
//     тернарный:
//        () ? () : ()

// ++x - префиксный инкремент
// x++ - постфиксный инкремент
// --x - префиксный декремент
// x-- - постфиксный декремент



// побитовые: & - и, | - или, ^ - исключающее или, ~ - не,
// << - левый сдвиг, >> - правый сдвиг, >>> - правый сдвиг с заполнением нолями

// = -= += *= /= %= &= |= ^= ~= <<= >>= >>>= ,

// < > <= >= != == ===  - возвращают логический тип
// Строковое сравнение - лексикографически

(123.13)^0; // округление
~n; // если n = -1, то ~n = 0

alert('la la la');
prompt('la la la', 'placeholder'); // возвращает строку или null
confirm('la la la?'); // возвращает true или false


// if , else , else if

// && - и, || -, или ! - не


// 1. Строковое преобразование.
    String(123);
    123 + '';

// 2. Числовое преобразование.     ==
    // используется при сравнении значений разных типов
    Number('123');
    +'123';

    undefined // NaN
    null // 0
    true // 1
    false // 0
    '' // 0
    '123' // 123
    '123abc' // NaN
    '\t\n 123 ' // 123

    
// undefined == null    и больше ничему!!!

// 3. Преобразование к логическому значению.     if()
    Boolean(1);
    !!1;

    undefined // false
    null // false
    NaN // false
    0 // false
    '' // false

    {} // true
    etc // true
    '0' // true
    ' ' // true


// while() {}
// do{} while()
// for(;;) {}

break
continue

outer: for(;;) {
    for(;;) {
        break outer;
    }
}

switch(x) {
    case 42:
        break;
    default:
        break;
}






JSON.parse(str, function(key, value) {
    if(key === 'data') return new Data(value);
    return value;
});

// При сериализации объекта вызывается его метод toJSON 
// или перечисляются его свойства,
// кроме функций/методов, символьных св-в и содержащих undefined

JSON.stringify(objInJSON, arr, char);
// arr - массив свойств для сериализации
// или function(key, value) { return value или undefined, если нужно исключить }
// char - символы для отступов или если число, то кол-во пробелов



const id = setTimeout(fn_or_code_or_str, delay, arg1, arg2);
clearTimeout(id);

const id = setInterval(fn_or_code_or_str, delay, arg1, arg2);
clearInterval(id);
// 4ms - минимальная задержка в браузере; меньше нельзя

let requestId = requestAnimationFrame(callback);
// планирует запуск callback в ближайшее время, когда браузер сочтёт возможным осуществить анимацию
// callback получает аргумент – время, прошедшее с начала загрузки страницы ( performance.now() )
cancelAnimationFrame(requestId);


eval(str); // выполняет код из строки и возвращает последнее вычисленное выражение
// в 'use strict' eval имеет свою область видимости, а к внешним переменным обращается через замыкание
window.eval(str); // выполняет код в глобальной области видимости



try {
    // sth
    throw new Error(messageStr);
} catch(err) {
    // sth
} finally {
    // sth
    // срабатывает даже после return
}

const err = {
    name: 'BlahError',
    message: 'blah',
    stack: 'blah'
}

window.onerror = function() {};


