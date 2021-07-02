// Proxy – объект для перехвата обращения к другому объекту (и изменения его).
let proxy = new Proxy(target_obj, obj_with_stuff);

{
    // [[Get]] перехватывает обращение к:
        // чтению свойства
    get(target, property, receiver),
    // receiver – объект, к которому было применено присваивание.

    // [[Set]] перехватывает обращение к:
        // записи свойства
    set(target, property, value, receiver),

    // [[HasProperty]] перехватывает обращение к:
        // оператору in
    has(target, property, receiver),

    // [[Delete]] перехватывает обращение к:
        delete
    deleteProperty(target, property, receiver), // delete
    
    enumerate(target), // for..in и for..of

    // [[Call]] перехватывает обращение к:
        // вызову функции
    apply(target, thisArgument, argumentsList),

    // [[Construct]] перехватывает обращение к:
        new
    construct(target, argumentsList)



    // [[GetPrototypeOf]] перехватывает обращение к методу: 
        Object.getPrototypeOf
    getPrototypeOf

    // [[SetPrototypeOf]] перехватывает обращение к методу:
        Object.setPrototypeOf
    setPrototypeOf

    // [[PreventExtensions]] перехватывает обращение к методу:
        Object.preventExtensions
    preventExtensions

    // [[IsExtensible]] перехватывает обращение к методу:
        Object.isExtensible
    isExtensible

    // [[GetOwnProperty]] перехватывает обращение к методам:
        Object.getOwnPropertyDescriptor
        Object.keys
        Object.values
        Object.entries
        // for..in
    getOwnPropertyDescriptor

    // [[DefineOwnProperty]] перехватывает обращение к методам:
        Object.defineProperty
        Object.defineProperties
    defineProperty

    // [[OwnPropertyKeys]] перехватывает обращение к методам:
        Object.getOwnPropertyNames
        Object.getOwnPropertySymbols
        Object.keys
        Object.values
        Object.entries
        // for..in
    ownKeys

}

old_name  = new Proxy(old_name, ); // надо перезаписать оригинал!!!

// инварианты


// Reflect позволяет вызвать операторы как функции


// Отключаемый (revocable) прокси – может быть отключён вызовом специальной функции.
let {proxy, revoke} = Proxy.revocable(target, handler);
revoke();