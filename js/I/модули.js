
export let a = 42;
export let b = 24;
// или
export { a, b };
// или 
export { a as new_a_name, b as new_b_name };

// экспортировать можно переменные, функции, классы



import { new_a_name, new_b_name } from './url';
// или
import { new_a_name as a, new_b_name as b} from './url';
// или
import * as new_obj from './url';




export default let = 42;
// или
let x = 42;
export { x as default }


import New_name from './url';
// 
import { default as x } from './url';





// реэкспорт
export { x } from './url';

export * as all from './url'; // не экспортирует default
export { default as x } from './url';




<script src="/blah.js" type='module'></script>

import.meta // инфа о модуле
import.meta.url;


// this в модуле на верхнем уровне undefined

<script nomodule></script> // для старых браузеров


import(module) // асинхронный импорт (это не функция!)

async function foo() {
    let module = './url';
    let x = await import(module);
}