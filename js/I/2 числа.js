// Number
// в 64‑битном формате IEEE‑754 - 'double precision floating point numbers'
// от -(2^53 - 1) до (2^53 - 1)

42
0xFF
0o77
0b11
1.2e-10
Infinity
-Infinity
NaN // Not‑A‑Number

isNaN(NaN); // true
let n = NaN; if( n !== n) alert('This is NaN!');

isFinite(42); // true , если это не NaN/Infinity/‐Infinity

parseInt('42px'); // 42
parseInt('abc42'); // NaN
parseInt('FF', 16); // 255

parseFloat('4.2px') // 4.2

// isFinite() / isNaN() / parseFloat() / parseInt() - старые глобальные функции
// есть их улучшенные аналоги в Number.

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

let n = 15;
n.toString(10); // '15'
n.toString(16); // f
n.toLocaleString();

Math.floor(4.2); // 4
Math.ceil (4.2); // 5
Math.round(4.2); // 4
42..toFixed(2); // '42.00' -  строка!!!
+42..toFixed(); // 42 - округляет с ошибкой вычисления!!!


Math.sqrt(25); // 5
Math.pow(4, 2); // 16
Math.abs(-42); // 42
Math.min(1, 3, 2); // 1
Math.max(1, 3, 2); // 3

Math.random(); // [0, 1)

Math.sign(x); // знак числа, указывающий, является ли число положительным, отрицательным или нулём
Math.trunc(x); // целая часть числа, убирая дробные цифры

Math.sin(x);
Math.cos(x);
Math.tan(x);
Math.asin(x);
Math.acos(x);
Math.atan(x);
Math.atan2(x);
Math.sinh(x);
Math.cosh(x);
Math.tanh(x);
Math.asinh(x);
Math.acosh(x);
Math.atanh(x);

Math.exp(x); // e^x
Math.expm1(x);

Math.log(x);
Math.log10(x);
Math.log1p(x);
Math.log2(x);

Math.cbrt(x); // кубический корень числа.

Math.clz32(x); // количество ведущих нулей 32-битного целого числа.
Math.fround(x); // ближайшее число с плавающей запятой одинарной точности, представляющие это число.
Math.hypot(x); // квадратный корень из суммы квадратов своих аргументов
Math.imul(x); // результат умножения 32-битных целых чисел

Math.PI
Math.E

Math.LN10
Math.LN2
Math.LOG10E
Math.LOG2E

Math.SQRT1_2
Math.SQRT2


Number.NaN
Number.NEGATIVE_INFINITY
Number.POSITIVE_INFINITY
Number.EPSILON
Number.MAX_SAFE_INTEGER
Number.MIN_SAFE_INTEGER
Number.MAX_VALUE
Number.MIN_VALUE


Number.isNaN()
Number.isFinite()

Number.isInteger()
Number.isSafeInteger()

Number.parseFloat()
Number.parseInt()

Number.prototype.toExponential()

Number.prototype.toPrecision()
Number.prototype.toFixed()

Number.prototype.toString()
Number.prototype.toLocaleString()

Number.prototype.valueOf()





// BigInt
let bigint = 1234567890123456789012345678901234567890n;
let sameBigint = BigInt("1234567890123456789012345678901234567890");
let bigintFromNumber = BigInt(10); // то же самое, что и 10n

// Все операции с bigint производятся с bigint и возвращают bigint

// К BigInt нельзя применить унарный оператор +


BigInt.asIntN()
BigInt.asUintN()
BigInt.prototype.toLocaleString()
BigInt.prototype.toString()
BigInt.prototype.valueOf()