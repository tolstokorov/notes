window; // одновременно глобальный объект JS и хранилище св-в и методов для браузера
    // JavaScript
    // BOM
    // DOM


// Browser Object Model (BOM) - Объектная Модель Браузера
    // это объекты для работы с чем угодно, кроме документа.
    alert; confirm; prompt;
    navigator; // общая информация о браузере и операционной системе
        navigator.userAgent // содержит информацию о браузере
        navigator.platform // содержит информацию о платформе
    location // содержит информацию о текущем URL страницы
        // и позволяет перенаправить посетителя на новый URL
        location.href // текущий адрес
    screen;
    frames;
    history;
    XMLHttpRequest;
    // etc.




// Document Object Model (DOM) - объектная модель документа, используемая для XML/HTML‑документов.
// это представление документа в виде дерева объектов, доступное для изменения через JavaScript.

document; // Глобальный объект DOM

// Типы узлов:
    
    ELEMENT_NODE: 1
    ATTRIBUTE_NODE: 2

    // CharacterData
        TEXT_NODE: 3
            CDATA_SECTION_NODE: 4
        PROCESSING_INSTRUCTION_NODE: 7
        COMMENT_NODE: 8

    DOCUMENT_NODE: 9
    DOCUMENT_TYPE_NODE: 10
    DOCUMENT_FRAGMENT_NODE: 11

    // deprecated 
        ENTITY_REFERENCE_NODE: 5
        ENTITY_NODE: 6
        NOTATION_NODE: 12



// Пробельные символы учитываются в DOM (как text node)

// пробельные символы до <head> игнорируются, а любое содержимое после </body>
// не создаёт узла, браузер переносит его внутрь, в конец body

// Таблицы всегда содержат <tbody>

// $0 - последний элемент, выбранный во вкладке Elements ($1 предыдущий и тд)
// $("div.my") – ищет первый элемент в DOM по данному CSS‑селектору
// $$("div.my") – ищет все элементы в DOM по данному CSS‑селектору

// В DOM в качестве отсутствующего значения используется не undefined, а null.

// Все навигационные свойства (document.x) – только для чтения

// Навигационные ссылки:
    document.documentElement; // <html>
    document.head; // <head>
    document.body; // <body>

    
// Навигационные ссылки: текстовые узлы и узлы‑элементы и узлы‑комментарии
    document.childNodes; // [псевдо-массив] все дочерние элементы, включая текстовые ( item(n) )
    document.firstChild; // доступ к первому дочернему эл-ту
    document.lastChild; // доступ к последнему дочернему эл-ту
    
    document.previousSibling; // Доступ к элементу слева
    document.nextSibling; // Доступ к элементу справа

    document.parentNode; // Доступ к элементу родителя
        // document.documentElement.parentNode; // document


// Навигационные ссылки: только текстовые узлы
    document.children; // [псевдо-массив] все дочерние текстовые элементы ( item(n) )
    document.firstElementChild; // доступ к первому дочернему текстовому эл-ту
    document.lastElementChild; // доступ к последнему дочернему текстовому эл-ту
    
    document.previousElementSibling; // Доступ к текстовому элементу слева
    document.nextElementSibling; // Доступ к текстовому элементу справа

    document.parentElement; // Доступ к текстовому элементу родителя
        // document.documentElement.parentElement ; // null




// TABLE
    table.rows // [псевдо-массив] строк TR таблицы.
    table.caption // ссылки на элемент таблицы CAPTION
    table.tHead // ссылки на элемент таблицы THEAD
    table.tFoot // ссылки на элемент таблицы TFOOT
    table.tBodies // [псевдо-массив] элементов таблицы TBODY (может быть несколько)

// THEAD/TFOOT/TBODY - [псевдо-массив] строк TR секции
    thead.rows
    tfoot.rows
    tbody.rows

// TR
    tr.cells // [псевдо-массив] ячеек TD/TH
    tr.sectionRowIndex // номер строки в текущей секции THEAD/TBODY
    tr.rowIndex // номер строки в таблице

// TD/TH - номер ячейки в строке
    th.cellIndex 
    td.cellIndex 



// Если html-элементу назначен атрибут id, можно получить его в переменной id.
    `<div id="content">Элемент</div>`
    alert( content ); // DOM‐элемент

let el = document.getElementById('id');
let els = elem.getElementsByTagName('tag-name'); // не забудь про букву 's'!!!
let els = document.getElementsByName('name'); // не забудь про букву 's'!!!
let els = elem.getElementsByClassName('class-name'); // не забудь про букву 's'!!!

let els = elem.querySelector('css-selector');
let els = elem.querySelectorAll('css-selector');

let res = elem.matches('css'); // true/false

let res = elem.closest('css');
// Ищет ближайший элемент выше по иерархии DOM, подходящий под CSS‑селектор.
// Сам элемент тоже включается в поиск



// XPath - как вариант



// Node
    // Element
        // HTMLElement
            // HTMLxxxElement

document.body; // [object HTMLBodyElement]
document.body instanceof HTMLBodyElement, HTMLElement, Element, Node
        
// IDL (Interface Definition Language)

elem.nodeType; // тип узла (один из 12)

elem.nodeName; // название(тэг) узла заглавными буквами - для любых узлов Node
elem.tagName; // название(тэг) узла заглавными буквами - только у элементов Element

elem.innerHTML; // вставка / чтение html содержимого (происходит не добавление, а перезапись)
// скрипты не выполняются

elem.outerHTML; // чтение - содержит html элемента целиком;
// вставка - заменяет на новый элемент, а переменная остаётся со старым

other_node.data; // на чтение / запись
    other_node.nodeValue; // аналог data

elem.textContent; // на чтение - весь текстовый контент; на запись - как текст 
    elem.innerText; // нестандартное свойство не используй!

elem.hidden = true; // работает так же, как style="display:none"


// зависящие от типа
    elem.value
    elem.checked
    elem.id
    elem.type
    elem.href
    elem.name
    elem.title
    elem.src
    elem.alt
    // etc.


// Атрибуты – это то, что написано в HTML.
// (Строка, Не чувствительны к регистру, Видны в innerHTML)

// Свойства – это то, что находится в свойстве DOM‑объекта.
// (Любое значение, Названия зависимы от регистра, Не видны в innerHTML)

elem.hasAttribute(attr); // проверяет наличие атрибута
elem.getAttribute(attr); // получает значение атрибута
elem.setAttribute(attr, value); // устанавливает атрибут
elem.removeAttribute(attr); // удаляет атрибут
elem.attributes; // [псевдо‑массив] объектов типа Attr


// for из html
htmlFor 

// class из html
className // строка
classList // объект, [псевдо‑массив]

elem.classList.contains("class");
elem.classList.add("class");
elem.classList.remove("class");
elem.classList.toggle("class");


// Нестандартный атрибут не попадёт в свойство; нужно использовать getAttribute

// data-xxx-yyy
elem.dataset.xxxYyy;




let result = parent.contains(child); // true, если parent содержит child или parent === child

let result = nodeA.compareDocumentPosition(nodeB);
//                                                   000000   0   nodeA и nodeB ‑‑ один и тот же узел
// Node.DOCUMENT_POSITION_DISCONNECTED               000001   1   Узлы в разных документах (или один из них не в документе)
// Node.DOCUMENT_POSITION_PRECEDING                  000010   2   nodeB раньше встречается, чем nodeA (в порядке обхода документа)
// Node.DOCUMENT_POSITION_FOLLOWING                  000100   4   nodeA раньше встречается, чем nodeB (в порядке обхода документа)
// Node.DOCUMENT_POSITION_CONTAINS                   001000   8   nodeB содержит nodeA
// Node.DOCUMENT_POSITION_CONTAINED_BY               010000   16  nodeA содержит nodeB
// Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC    100000   32  Зарезервировано для браузера
// возможны сочетания битов!!!






let elem = document.createElement(tag); // Создает новый элемент с указанным тегом
let textNode = document.createTextNode(text); // Создает новый *текстовый* узел с данным текстом


let elem = parentElem.appendChild(elem); // Добавляет elem в конец parentElem
let elem = parentElem.insertBefore(elem, nextSibling); // Вставляет elem в parentElem, перед nextSibling
// если nextSibling === null, то insertBefore как appendChild


let elem = elem.cloneNode(deep); // создаст копию элемента; true - глубокую, false - поверхностную

let elem = parentElem.removeChild(elem); // Удаляет elem из parentElem .
let elem = parentElem.replaceChild(newElem, elem); // Удаляет elem из parentElem и вставляет на его место newElem

let elem = elem.remove(); // удаляет элемент напрямую

// Все методы вставки автоматически удаляют вставляемый элемент со старого места.



parentElem.insertAdjacentHTML(where, html);
let newElem = parentElem.insertAdjacentElement(where, newElem);
parentElem.insertAdjacentText(where, text);
// where: [[ beforeBegin - <elem> afterBegin -//- beforeEnd </elem> - afterEnd ]]




// Фрагмент документа, когда он вставляется в DOM – то он исчезает, а вместо него вставляются его дети.
let fragment = document.createDocumentFragment(); // Это не узел. Нет обычных свойств DOM‑узлов.



node.before(...nodes) // вставляет nodes перед узлом node
node.prepend(...nodes) // вставляет nodes в начало node
node.append(...nodes) // вставляет nodes в конец node
node.after(...nodes) // вставляет nodes после узла node

node.replaceWith(...nodes) // вставляет nodes вместо node

// nodes – DOM‑узлы или строки



// Только до конца загрузки!
// а при попытки дописать в уже загруженный документ все текущее содержимое удаляется.
document.write(str);
document.writeln(str); // добавляет после str "\n" .
// '<\/script>' или '</scr' + 'ipt>'




// слили в атрибуте элемента
element.style.xxxYyy = '100xy';
// = ''; очищает


// каждый дефис даёт большую букву


// float - исключение
element.style.cssFloat;


element.style.cssText = `
    xxx: yyy;
`; // перезаписывает style


window.getComputedStyle(element, pseudo); // требует полное свойство





// CSS-width/height включает width/height scrollbar'а 

// Метрики (для невидимых элементов равны нулю)

// Внешние
offsetParent; // ссылка на родительский элемент в дереве рендеринга

offsetLeft; // смещение от левого края относительно offsetParent
offsetTop; // смещение от верхнего края относительно offsetParent

offsetWidth; // полная ширина, включая рамки border
offsetHeight; // полная высота, включая рамки border



// border, а точнее отступ внутренней части элемента от внешней
clientLeft; // левый border (включая scrollbar, если есть)
clientTop; // верхний border (включая scrollbar, если есть)

clientWidth; // ширина с padding'ами (не включая scrollbar)
clientHeight; // высота с padding'ами (не включая scrollbar)



scrollWidth; // ширина всей прокрутки (включая невидимые области, но не включая scrollbar)
scrollHeight; // высота всей прокрутки (включая невидимые области, но не включая scrollbar)

// можно изменить, и браузер выполнит прокрутку элемента
scrollLeft; // ширина выступа прокрутки
scrollTop; // высота выступа прокрутки



window.innerWidth; // вся ширина окна
window.innerHeight; // вся высота окна
// vs
document.documentElement.clientWidth; // ширина минус прокрутка
document.documentElement.clientHeight; // высота минус прокрутка


let scrollWidth = Math.max(
    document.body.scrollWidth, document.documentElement.scrollWidth,
    document.body.offsetWidth, document.documentElement.offsetWidth,
    document.body.clientWidth, document.documentElement.clientWidth
);
let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
);


// можно только читать, а менять нельзя
window.pageXOffset; // Текущая прокрутка сверху
window.pageYOffset; // Текущая прокрутка слева


scrollBy(x,y); // прокручивает страницу относительно текущих координат

scrollTo(pageX, pageY); // прокручивает страницу к указанным координатам относительно документа

elem.scrollIntoView(top); // прокручивает страницу так, чтобы элемент оказался
//  вверху, для top === true (по умолчанию), и внизу, для top === false

// запрет прокрутки окна (полоса прокрутки исчезает)
document.body.style.overflow = "hidden";


// Относительно окна window
    // clientX/clientY
let coords = elem.getBoundingClientRect(); // возвращает координаты элемента (один охватывающий прямоугольник)
    elem.getClientRects(); // строчные прямоугольники

{
    // от границ текущей видимой области (не учитывают прокрутку)

    // от левого края
    left    // X‑координата левой границы
    right   // X‑координата правой границы

    // от верхнего края
    top     // Y‑координата верхней границы
    bottom  // Y‑координата нижней границы

    // опционально
    width
    height

}

let elem = document.elementFromPoint(x, y); // Возвращает элемент, под координатами относительно окна



// Относительно документа document
    // pageX/pageY
function getCoords(elem) {
    let box = elem.getBoundingClientRect();
    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
}

// Относительно экрана screen
    // screenX/screenY
screen;
{
    // общая ширина/высота
    screen.width;
    screen.height;

    // доступная ширина/высота (за вычетом таскбара и т.п.)
    screen.availWidth;
    screen.availHeight;

}

// Координаты левого‑верхнего угла браузера на экране
    window.screenX;
    window.screenY;