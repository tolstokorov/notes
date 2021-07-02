// Promise - объект, который содержит состояние 

//                <pending>
//                (ожидание)
//                /       \
//      <fulfilled>       <rejected>
// (выполнено успешно)   (выполнено с ошибкой)


let promise = new Promise((resolve, reject) => {
    // sth

    setTimeout(() => {
        resolve(str); // или reject(new Error(str))
    }, time);
});

promise.then(onFulfilled, onRejected);
    // onFulfilled - колбэк вызывающийся при resolve 
    // onRejected - колбэк вызывающийся при reject


// .then(null, onRejected) <=> .catch(onRejected)

// Синхронный throw – то же самое, что reject

// .then(fn, fn) <=> .finally()

// После вызова resolve/reject результат промиса уже не может измениться.
// Последующие вызовы resolve/reject будут проигнорированы.

// Промисификация – это оборачивание асинхронного функционала в функцию возвращающую промис.

// Чейнинг - передача по цепочке (промисов)



// Детали*

// Св-ва промиса:
    // PromiseState – состояние, вначале «pending».
    // PromiseResult – результат, при создании значения нет.
    // PromiseFulfillReactions – список функций‑обработчиков успешного выполнения.
    // PromiseRejectReactions – список функций‑обработчиков ошибки.

// PromiseJobs - системная очередь для функций-обработчиков
    // из PromiseFulfillReactions/PromiseRejectReactions

// Дефолтные функции-обработчики в .then()
    // Identity: arg => arg
    // Thrower: arg => throw arg



Promise.all([iterable]); // принимает итерируемый объект промисов и возвращает промис, который ждёт,
// пока все переданные промисы завершатся, и переходит в resolve с массивом их результатов.
// если любой из промисов завершится с ошибкой, то промис завершается с ошибкой

Promise.allSettled([iterable]); // как Promise.all(), но всегда ждёт завершения всех промисов
// В массиве результатов будет:
    // { status: "fulfilled", value: результат } для успешных завершений,
    // { status: "rejected", reason: ошибка } для ошибок.

Promise.any([iterable]) // успешно, если хотя бы один или неуспешно, если ни одного

Promise.race([iterable]); // как Promise.all(), но результат -
// первый успешно выполнившийся промис из списка. Остальные игнорируются. 

Promise.resolve(value);
// или
new Promise(resolve => resolve(value));

Promise.reject(new Error(str));
// или
new Promise(reject => reject(new Error(str)));


// 'unhandledrejection' - объект события необработанных ошибок
//  содержит event.promise и event.reason


async // перед функцией заставляет функцию возвращать промис
await // внутри async-функции дожидается разрешения промиса 
