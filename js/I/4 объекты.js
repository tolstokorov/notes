// Object

let obj1 = new Object();
let obj2 = {};

let obj = {};
obj.tmp = 42;
delete obj.tmp;

if('tmp' in obj) {}
if(obj.tmp !== undefined) {}

obj.tmp;
obj['tmp'];
let v =  obj.tmp; obj[v];

for(key in obj) {}








// Секретный тип [[Class]]
    // узнать его можно только для встроенных объектов
    // для объявленных нами конструкторов тип [[Class]] всегда равен 'Object'
    ({}).toString.call(obj); // '[object ЗНАЧЕНИЕ]'
    ({}).toString.call(obj).slice(8, -1); // 'ЗНАЧЕНИЕ'


obj instanceof Foo; // true/false

// 'утиная типизация' - проверка реализации объектом требуемого интерфейса





let obj = {
    a: 42,

    myMethod: function() {
        alert(this.a);
    }
}
obj.myMethod();

this // равен объекту в контексте которого вызван метод


// Без контекста
    // Старый JS
    function func() {
        alert( this ); // выведет [object Window] или [object global]
    }
    func();

    // JS с "use strict"
    function func() {
        "use strict";
        alert( this ); // выведет undefined (кроме IE9‐)
    }
    func();


// Reference Type (служебный ссылочный тип)
// в obj.method() точка (или квадратные скобки) возвращает 'base‑name‑strict'
    // base – объект,
    // name – имя свойства,
    // strict – вспомогательный флаг для передачи use strict


// Преобразование объектов
    // Логическое
    // объект всегда true

    // Строковое - хинт: 'string'
    // метод toString: function() { return 'blah'; }
    // или если его нет, то метод valueOf(): function() { return 42; }
    // [object Object] - по умолчанию

    // Числовое - хинты: 'number' и 'default'
    // метод valueOf: function() { return 42; }
    // или если его нет, то метод toString(): function() { return 'blah'; }

    // Универсальное преобразование
    obj[Symbol.toPrimitive] = function(hint) {
        // hint равно одному из: "string", "number" или "default"
        return значение;
    };




Object.defineProperty(obj, prop, description);
description = {
    value, // значение свойства, по умолчанию undefined
    get, // функция, которая возвращает значение свойства. По умолчанию undefined
    set, // функция, которая записывает значение свойства. По умолчанию undefined

    writable, // значение свойства можно менять, если true . По умолчанию false
    configurable, // если true , то свойство можно удалять,
    // а также менять его в дальнейшем при помощи новых вызовов defineProperty . По умолчанию false
    enumerable // если true , то свойство просматривается в цикле for..in и методе Object.keys() . По умолчанию false
}
// запрещено одновременно указывать value и get/set 
// запрещено одновременно указывать writable и get/set



var user = {
    firstName: "Вася",
    surname: "Петров",

    get fullName() {
        return this.firstName + ' ' + this.surname;
    },

    set fullName(value) {
        var split = value.split(' ');
        this.firstName = split[0];
        this.surname = split[1];
    }
};

alert( user.fullName ); // Вася Петров (из геттера)

user.fullName = "Петя Иванов";
alert( user.firstName ); // Петя (поставил сеттер)
alert( user.surname ); // Иванов (поставил сеттер)


Object.defineProperties(obj, {
    prop1: {},
    prop2: {}
});


Object.keys(obj); // возвращает только enumerable‑свойства
Object.getOwnPropertyNames(obj); // возвращает все свойства

Object.getOwnPropertyDescriptor(obj, prop); // возвращает дескриптор для свойства obj[prop]
Object.getOwnPropertyDescriptors()


Object.preventExtensions(obj) // запрещает добавление свойств в объект
Object.isExtensible(obj) // возвращает false, если добавление свойств объекта
// было запрещено вызовом метода Object.preventExtensions

Object.seal(obj) // запрещает добавление и удаление свойств,
// все текущие свойства делает configurable: false
Object.isSealed(obj) // возвращает true, если добавление и удаление свойств объекта запрещено,
// и все текущие свойства являются configurable: false

Object.freeze(obj) // запрещает добавление, удаление и изменение свойств,
// все текущие свойства делает configurable: false, writable: false
Object.isFrozen(obj) // возвращает true, если добавление, удаление и изменение свойств объекта запрещено,
// и все текущие свойства являются configurable: false, writable: false







// ООП в функциональном стиле

// private - локальные переменные и функции; доступны только внутри функции
// public - через this; доступны везде
// protected - есть договорённость не изменять их из вне; доступны везде

// setter - setFoo() или нативный метод set: function() {}
// getter - getFoo() или нативный метод get: function() {}

function Foo2() {
    Foo.apply(this, arguments);

    let parentX = this.x; // или в родителе: bind'ть или (let self = this; и self.blah = 42;)
    function x() {
        parentX.call(this);

        // sth
    }
}



// ООП в прототипном стиле

// [[Prototype]] - св-во из спеки; ранее было скрыто, теперь доступно как __proto__

let obj1 = {};
let obj2 = {};
obj2.__proto__ = obj1;

// цикл for..in не делает различия между свойствами объекта и его прототипа
obj.hasOwnProperty(prop); // true , если свойство принадлежит самому объекту

Object.create(obj, descriptors); // создаёт объект с прототипом obj; если obj === null, то без прототипа

Object.getPrototypeOf(obj);

Object.setPrototypeOf(obj, proto);


function Foo1() {
    this.__proto__ = obj
}
// или
function Foo2() {}
Foo2.prototype = obj;
Foo2.prototype.constructor = Foo2;


function Foo() {}
Foo.prototype = {
    constructor: Foo
};

// Примитивы не являются объектами, но методы берут из соответствующих прототипов:
Number.prototype;
Boolean.prototype;
String.prototype;

(   new Number(42)  ) == {
    __proto__: Number,
    [[PrimitiveValue]]: 42
};

(   new Boolean(false)  ) == {
    __proto__: Boolean,
    [[PrimitiveValue]]: false
};

(   new String("str")  ) == {
    0: "s",
    1: "t",
    2: "r",
    length: 3,
    __proto__: String,
    [[PrimitiveValue]]: "str"    
};

// Значения null и undefined не имеют прототипов


let obj1 = {};

obj1.isPrototypeOf(obj2);





// Объекты

let a = 4;
let b = 2;
let c = {
    a: a, // a: 4
    b // b: 2
};

let d = {
    [`blah_${a+b}`]: 42 // blah_42: 42 
};

Object.assign(target_obj, obj1, obj2); // копирование св-в объектов в целевой объект
let new_obj = Object.assign({}, obj); // копирование объекта (поверхностное)


Object.is(v1, v2);
    // Сравнение +0 и ‐0
    Object.is(+0, -0); // false
    +0 === -0; // true

    // Сравнение с NaN
    Object.is(NaN, NaN); // true
    NaN === NaN; // false


// Настоящие методы объекта
    let obj = {
        meth_old: function() {}, // старый НЕнастоящий метод
        meth_new() {}, // новый настоящий метод

        a: 42,
        get a() {},
        set a() {}
    };

let proto_obj = { a() { return 42; } };
let obj = {
    a() {
        super.blah() // 42
    },
    __proto__: proto_obj
};
// super использует скрытую ссылку [[HomeObject]] текущего метода, и от него берётся __proto__
// super в стрелочный функциях берётся из внешней функции

Object.keys(obj);
Object.values(obj);
let arr = Object.entries(obj);
Object.fromEntries(arr);











Object.prototype.constructor 


Object.getOwnPropertySymbols()
Object.prototype.isPrototypeOf()
Object.prototype.propertyIsEnumerable()

Object.prototype.toLocaleString()
Object.prototype.toString()
Object.prototype.valueOf()



// не стандартно!!!
Object.prototype.__defineGetter__() 
Object.prototype.__defineSetter__()
Object.prototype.__lookupGetter__()
Object.prototype.__lookupSetter__()