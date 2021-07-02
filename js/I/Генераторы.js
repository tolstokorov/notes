// generator function  -  функция‑генератор
function* gen() {          // .next()
    let result1 = yield 1; // .next(answer1)
    // result1 === answer1
    let result1 = yield 2; // .next(answer2)
    // result2 === answer2
    return 3;
}

// generator function создаёт собственно generator
let generator = gen();

let step = generator.next();
let step = generator.next(42);
let step = generator.throw(new Error(str));
let step = generator.return();

// {
//      value: 'значение из yield/return',
//       done: false/true 
// }

function* x () {
    yield* y; // делегирует другому генератору выполнение
}
