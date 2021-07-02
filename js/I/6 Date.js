// Дата и время

let moment = new Date(); // сейчас
let moment1 = new Date(ms); // количеству миллисекунд, прошедших с 1 января 1970 года GMT+0
let moment2 = new Date('YYYY‐MM‐DDTHH:mm:ss.sssZ'); 
let moment3 = new Date(year, month, date=1, hours=0, minutes=0, seconds=0, ms=0);
// year - 4 цифры; month - начинается с ноля 

moment.getFullYear(); // year - 4 цифры (есть ещё нестандартное!!! getYear)
moment.getMonth();
moment.getDate();
moment.getHours();
moment.getMinutes();
moment.getSeconds();
moment.getMilliseconds();
moment.getDay(); // 0 - вс

moment.getUTCFullYear(); // year - 4 цифры
moment.getUTCMonth();
moment.getUTCDate();
moment.getUTCHours();
moment.getUTCMinutes();
moment.getUTCSeconds();
moment.getUTCMilliseconds();
moment.getUTCDay(); // 0 - вс

moment.getTime(); // количество миллисекунд, прошедших с 1 января 1970 года GMT+0

moment.getTimezoneOffset(); // разница между местным и UTC‑временем, в минутах



moment.setFullYear(year, month, date); // (есть ещё нестандартное!!! setYear)
moment.setMonth(month, date);
moment.setDate(date);
moment.setHours(hour, min, sec, ms);
moment.setMinutes(min, sec, ms);
moment.setSeconds(sec, ms);
moment.setMilliseconds(ms);

moment.setUTCFullYear(year, month, date);
moment.setUTCMonth(month, date);
moment.setUTCDate(date);
moment.setUTCHours(hour, min, sec, ms);
moment.setUTCMinutes(min, sec, ms);
moment.setUTCSeconds(sec, ms);
moment.setUTCMilliseconds(ms);


moment.setTime(milliseconds); // количество миллисекунд, прошедших с 1 января 1970 года GMT+0


+moment === +moment.valueOf();

performance.now(); // до 1000

console.time('sth');
    //sth
console.timeEnd('sth');

moment.toString(); // возвращает всю дату и время в виде строки
moment.toDateString(); // возвращает только дату в виде строки
moment.toTimeString();// возвращает только время в виде строки

moment.toLocaleString();
moment.toLocaleDateString();
moment.toLocaleTimeString();

Date.UTC();
moment.toUTCString();

moment.toJSON();

moment.toISOString(); // в формате YYYY‐MM‐DDTHH:mm:ss.sssZ/+‐hh:mm

Date.parse(str); // принимает YYYY‐MM‐DDTHH:mm:ss.sssZ/+‐hh:mm; возвращает кол-во ms или NaN

Date.now(); // возвращает дату в ms; аналог +(new Date()), но быстрее





Date.prototype.toGMTString() // устаревший