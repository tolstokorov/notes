// String (в Юникоде UTF-16)

'abc';
"abc";

'\t \n \xff \u009A' // спецсимволы
'\' \" \\ \a' // экранирование

'Строка'.length // 6

'Строка'.charAt(1); // т
'Строка'[1]; // т

'Строка'.toLowerCase(); // 'строка'
'Строка'.toLocalLowerCase();
'Строка'.toUpperCase(); // 'СТРОКА'
'Строка'.toLocalUpperCase();

'Строка'.indexOf('ро'); // 2
'Строка'.lastIndexOf('ро'); // 2

if (~str.indexOf) {} // читается как "если найдено"

'Строка'.substring(start, end); // [start, end или, если нет, до конца с округлением до ноля отрицательных)
'Строка'.substr(start, steps); // от start количество steps

'Строка'.slice(start, end); // [start, end)

String.fromCharCode(42); // *
'Строка'.charCodeAt(0); // С

let str = 'Ещё строка';
'Строка'.localeCompare(str, lang_code, options); //  Нормальное сравнение строк, без косяков с Ёё

'   Строка   '.trim(); // 'Строка'
'   Строка   '.trimStart(); // 'Строка   '
'   Строка   '.trimEnd(); // '   Строк'

str1.concat(str2, str3);
str1.split(separator, limit);

str.match(regexp);
str.matchAll(regexp);
str.search(regexp);

let newStr = str.replace(regexp_or_substr, newSubstr_or_fn);
let newStr = str.replaceAll(regexp_or_substr, newSubstr_or_fn);

str.padStart(targetLength, padString);
str.padEnd(targetLength, padString);

String.raw()

// Строки

`Шаблонные
строки`;

`Интерполяция -> ${2+2}` 

let a = 2;
let b = 3;
let x = foo`blah:\n${a + b}!`;

function foo(str, ...values) {
    str; // ["blah:\n", "!"]
    str.raw; // ["blah:\\n", "!"]
    values; // [5]
}


String.fromCodePoint(code);
str.codePointAt(position);


'\u{42}'; // UTF-32 
"S\u0307\u0323".normalize() === "\u1e68";

str1.includes(str2);
str1.startsWith(str2);
str1.endsWith(str2);
str1.repeat(times);

str.at();



String.prototype.toString()
String.prototype.valueOf()