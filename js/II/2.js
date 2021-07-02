
// Обработчик хранится именно в DOM‑свойстве, а атрибут – лишь один из способов его инициализации

// атрибутное on<событие> - назначаются в html
    // <element onclick = "foo();" ></element>

// свойство DOM‑элемента on<событие> - назначаются в js
    elem.onClick = foo;

// назначить более одного обработчика так нельзя!

elem.onclick = null; // удаление обработчика

// Внутри обработчика события this ссылается на текущий элемент



elem.addEventListener(event_name, handler, phase);

// передать те же аргументы, что были у addEventListener
elem.removeEventListener(event_name, handler, phase);



setTimeout(func, 0); // сделать событие асинхронным


// Объект события - первый аргумент в обработчике
elem.onclick = function(event) {
    event.type; // Тип события (click)

    event.currentTarget; // Элемент, на котором сработал обработчик. (неза'bind'енный this)
    // текущий элемент, до которого дошло всплытие, на нём сейчас выполняется обработчик.

    event.target // это исходный элемент, на котором произошло событие, в процессе всплытия он неизменен.

    event.stopPropagation(); // предотвращает всплытие,
    // но на текущем элементе все обработчики отработают.

    event.stopImmediatePropagation(); // предотвращает всплытие,
    // и останавливает обработку событий на текущем элементе.

    event.eventPhase; // 0 1 2 3
    // 0. 
    // 1. Событие сначала идет сверху вниз.         Стадия перехвата (capturing stage).
    // 2. Событие достигло целевого элемента.       Стадия цели      (target    stage).
    // 3. После этого событие начинает всплывать.   Стадия всплытия  (bubbling  stage).

    event.isTrusted; // инициировано ли действие посетителем или это скрипт

    event.bubbles;
    event.cancelable;
};

// true в третьем аргументе в addEventListener - стадия перехвата

// focus не всплывает (только перехватывать)



// Шаблон проектирования «поведение» (behavior) 
    // data-атрибут (или аналог)
    // делегирование



// Отмена действия браузера
// on<событие> -        вернуть false
// addEventListener -   event.preventDefault()



// Своё событие
let event = new Event(event_type, {
    bubbles: false, // всплывает ли событие
    cancelable: false // можно ли отменить событие
});

elem.dispatchEvent(event); // инициализация события

UIEvent
FocusEvent
MouseEvent
WheelEvent
KeyboardEvent
CompositionEvent

let custom_event = new CustomEvent(event_type, {
    bubbles: false,
    cancelable: false,
    detail: { name: "Вася" } // спец св-во
});



let old_event = document.createEvent(eventInterface);
old_event.initEvent(type, bubbles, cancelable);

old_event.init<'конкретный тип события'>(arg1, args2);



// События мыши

// лкм 
    mousedown // Кнопка мыши нажата над элементом.
    mouseup // Кнопка мыши отпущена над элементом.

    click // mousedown + mouseup на одном элементе (порядок mousedown → mouseup → click)
    dblclick // Вызывается при двойном клике по элементу.

// пкм
    contextmenu // Вызывается при клике правой кнопкой мыши на элементе.

// движение
    mousemove // Каждое движение мыши над элементом генерирует это событие.

    mouseover // Мышь появилась над элементом.
    mouseout // Мышь ушла с элемента.

{

    mouse_event.which; // какая кнопка мыши нажата
        // 1 левая
        // 2 средняя
        // 3 правая

    // клавиши‑модификаторы
        mouse_event.shiftKey
        mouse_event.altKey
        mouse_event.ctrlKey
        mouse_event.metaKey // для Mac - Cmd (примерно соответствует Ctrl)

    // координаты относительно окна
    mouse_event.clientX;
    mouse_event.clientY;

    // координаты относительно документа (с прокруткой)
    mouse_event.pageX;
    mouse_event.pageY;

}


// отмена выделения
    // предотвратить действие браузера по умолчанию для события mousedown
    // или
    window.getSelection().removeAllRanges(); // Выделение производится, но тут же снимается
    // или
    // CSS‑свойство user‐select

oncopy // событие - запретить копирование




mousemove; // срабатывает при передвижении мыши


mouseover; // происходит, когда мышь появляется над элементом
{
    event.target // элемент, на который пришла мышь, то есть на котором возникло событие.
    event.relatedTarget // элемент, с которого пришла мышь. (может быть null)
}


mouseout; // происходит, когда мышь уходит с элемента
{
    event.target // элемент, с которого ушла мышь, то есть на котором возникло событие.
    event.relatedTarget // элемент, на который перешла мышь. (может быть null)
}

// DOM‑элементы, через которые мышь проходит на большой скорости, могут быть пропущены.


mouseenter;
mouseleave;
// События похожи на mouseover/mouseout, но:
//     1. Не учитываются переходы внутри элемента.
//     2. Не всплывают.


elem.ondragstart; 


wheel; // генерируется над любым элементом при передвижении колеса мыши
{

    // количество прокрученных пикселей
    deltaY;
    deltaX;
    deltaZ;

}

scroll; // генерируется при любой прокрутке, в том числе через клавиатуру,
//  но только на прокручиваемых элементах
{

}

onwheel; // до прокрутки
onscroll; // после прокрутки


// УСТАРЕВШИЙ ВАРИАНТ
    keydown // происходят при нажатии клавиши
        // keyCode=87 (which=87) -- скан‑код (соответствует заглавной букве)
        // charCode=0
        // char=W

    keypress // возникает сразу после keydown, если нажата символьная клавиша
        // keyCode=119 (which=119) -- скан‑код (различает заглавные и строчные)
        // charCode=119
        // char=w

    keyup // происходят при отпускании клавиши
        // keyCode=87 (which=87) -- скан‑код (соответствует заглавной букве)
        // charCode=0
        // char=W


// СОВРЕМЕННЫЙ ВАРИАНТ
    // override!!!



// Загрузка документа
    DOMContentLoaded // браузер полностью загрузил HTML, и построил DOM‑дерево.
    // на document и только через addEventListener
    // ждёт загрузки и выполнения обычных скриптов (async и defer - не ждёт) и стилей
    // альтерната onDOMContentLoaded -> вызов функции init из скрипта в самом конце BODY

    load // браузер загрузил все ресурсы.
    // на window

    beforeunload // уход со страницы
    // на window
    window.onbeforeunload = () => 'строка, которую браузеры покажут посетителю'; 

    unload // уход со страницы (отменить переход нельзя)
    // на window



// Загрузка ресурсов
    onload // если загрузка успешна
    onerror // если при загрузке произошла ошибка




document.forms[name_or_index]; // Элемент FORM; можно получить по имени формы или по номеру

my_form.elements[name_or_index]; // Элементы в самой форме; можно получить по имени формы или по номеру
// если несколько элементов со одинаковым именем, то вернётся коллекция
// есть так же у <fieldset>
// my_form.name - аналог, но изменённое св-во name будет доступно под старым именем

elem_in_my_form.form === my_form;





input.value = value;
input.checked = boolean; // для checkbox и radio

textarea.value = value;
// Не используйте textarea.innerHTML; хранит изначально присутствовавший в элементе html


select.value;
// или
select.selectedIndex; // 0 -- первая опция; ‐1 -- очистит выбор

select.options; // Список элементов‑опций доступен через
    option.selected = true; // выбрана ли опция
    option.index; // номер опции в списке селекта
    option.text; // Текстовое содержимое опции (то, что видит посетитель).

let option = new Option(text, value, defaultSelected, selected); // новый синтаксис
// можно использовать вместо document.createElement('option')


// События (не всплывают, но есть стадия перехвата)
focus;
blur;

// События (всплывают; назначаются только через addEventListener)
focusin;
focusout;

// Методы
elem.focus();
elem.blur();

// из CSS:
    // псевдокласс :focus
    // атрибут autofocus
    // атрибут placeholder='текст' и псевдокласс ::input‐placeholder
    // атрибут tabindex (0 -- делает элемент всегда последним; -1 -- Tab будет элемент игнорировать)

document.activeElement // текущий элемент, на котором фокус



change; // происходит по окончании изменении значения элемента формы
// Для текстовых элементов: событие произойдёт не при каждом вводе, а при потере фокуса.

input; // срабатывает на текстовых элементах при изменении их значения


// основное применение – это отмена соответствующей операции
    cut; // происходит при вырезании значения
    copy; // происходит при копировании значения
    paste; // происходит при вставке значения


submit; // возникает при отправке формы
    // при нажатии кнопки <input type="submit"> или <input type="image"> .
    // при нажатии Enter, находясь на каком‑нибудь поле.

// При отправке формы нажатием Enter на текстовом поле, на элементе
    // <input type="submit"> генерируется событие click

form.submit(); // метод






transitionend
    propertyName // Свойство, анимация которого завершилась.
    elapsedTime // Время (в секундах), которое заняла анимация, без учета transition‐delay .