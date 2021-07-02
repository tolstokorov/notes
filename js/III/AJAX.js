// AJAX (Asynchronous Javascript And Xml) – технология обращения к серверу без перезагрузки страницы
    // JSON
    // XML
    // HTML/текст
    // Бинарные данные, файлы



// COMET - техники получения данных по инициативе сервера; - непрерывный канал, по которому приходят данные



let xhr = new XMLHttpRequest(); // Объект для HTTP‑запросов из JavaScript к серверу без перезагрузки страницы.

xhr.open(method, URL, async=true, user, password); // Задаёт основные параметры запроса, но не открывает соединение
    // method – HTTP‑метод строка заглавными буквами

xhr.send(body); // открывает соединение и отправляет запрос на сервер

xhr.abort(); // прерывает выполнение запроса


status; // HTTP‑код ответа: 200, 404 и тд. Если сервер не ответил или при запросе на другой домен, равен 0.
statusText; // Текстовое описание статуса от сервера: OK , Not Found , Forbidden и тд.

response;
responseType;

responseURL; // ?

responseText; // Текст ответа сервера.

responseXML; // XML-документ, с заголовком Content‐type: text/xml;


timeout; // максимальная продолжительность асинхронного запроса



readystatechange; // событие происходит несколько раз в процессе отсылки и получения ответа

xhr.readyState; // текущее состояние запроса
    UNSENT = 0;             // начальное состояние
    OPENED = 1;             // вызван open
    HEADERS_RECEIVED = 2;   // получены заголовки
    LOADING = 3;            // загружается тело (получен очередной пакет данных) Точка разрыва пакетов не гарантирована!
    DONE = 4;               // запрос завершён

// 0 → 1 → 2 → 3 → … → 3 → 4


// HTTP
setRequestHeader(name, value);

getResponseHeader(name);

getAllResponseHeaders(); // Возвращает все заголовки ответа, кроме Set‐Cookie и Set‐Cookie2.
    // в виде единой строки (": " - между значениями; "\r\n" - между заголовками)


xhr.upload; // события на выгрузку
xhr; // события на загрузку

loadstart;  // запрос начат.
progress;   // браузер получил очередной пакет данных, можно прочитать текущие полученные данные в responseText .
    loaded // сколько байт уже переслано в теле запроса
    lengthComputable // полное количество байт для пересылки, и хранится в свойстве total (если true)
    total //  общее количество байт для пересылки, если известно.
abort;      // запрос был отменён вызовом xhr.abort() .
error;      // произошла ошибка.
load;       // запрос был успешно (без ошибок) завершён.
timeout;    // запрос был прекращён по таймауту.
loadend;    //запрос был завершён (успешно или неуспешно)


// Кодировки
urlencoded // стандартное кодирование URL: /куда?имя1=значение1&имя2=значение2
    // Все символы, кроме английских букв, цифр и ‐ _ . ! ~ * ' ( )
    // заменяются на их цифровой код в UTF‑8 со знаком %
    encodeURIComponent(); // закодировать вручную



enctype // атрибут html, указывает кодировку
    `application/x‐www‐form‐urlencoded` // urlencoded; единственная возможная для GET
    `multipart/form‐data; boundary=boundary_str` // для пересылки файлов; boundary - разделительная строка
    `text‐plain` // 

// при POST обязателен заголовок `Content‐Type` , содержащий кодировку




let formData = new FormData(form); // кодирует формы для отправки на сервер; по умолчанию multipart/form‐data
formData.append(name, value); //  добавляет данные к форме


('Content‐type', 'application/json; charset=utf‐8') // JSON-формат


// CORS
    // Простые запросы:
        // 1. Простой метод : GET, POST или HEAD
        // 2. Простые заголовки – только из списка:
            'Accept'
            'Accept‐Language'
            'Content‐Language'
            'Content‐Type' // со значением:
                'application/x‐www‐form‐urlencoded'
                'multipart/form‐data'
                'text/plain'
    // Непростые запросы: все остальные
        // новые возможности доступны только с явного согласия сервера (по умолчанию – нет)


// Простые запросы:
'Origin' // содержит домен, с которого осуществлён запрос; автоматически добавляется браузером при кросс-доменном запросе
    // Ответ сервера:
        'Access‐Control‐Allow‐Origin' // содержит домен запроса или *
        // (контроль-доступа-разрешить-происхождение)
    // Если Access‐Control‐Allow‐Origin нет, то браузер считает, что разрешение не получено, и завершает запрос с ошибкой
    // При таких запросах не передаются куки и заголовки HTTP‑авторизации.
    // Параметры user и password в методе open игнорируются.



    
// По умолчанию скрипт может прочитать из ответа только:
    'Cache‐Control'
    'Content‐Language'
    'Content‐Type'
    'Expires'
    'Last‐Modified'
    'Pragma'

// Чтобы прочитать не стандартный заголовок ответа - сервер должен указать его имя в
    'Access‐Control‐Expose‐Headers'
    // (контроль-доступа-выставленных-заголовков)



// По умолчанию браузер не передаёт с запросом куки и авторизующие заголовки
xhr.withCredentials = true; // включает передачу вместе с запросом кук и и HTTP‑авторизацию
// сервер должен вернуть:
    'Access‐Control‐Allow‐Origin' // домен (* - запрещена)
    'Access‐Control‐Allow‐Credentials' // true
    // (контроль-доступа-разрешить-полномочия)




// Непростые запросы:
// браузер сделает два HTTP‑запроса:
    // 1. preflight (предзапрос) - браузер делает его сам в методе OPTIONS:
        'Access‐Control‐Request‐Method' // содержит название желаемого метода
        'Access‐Control‐Request‐Headers' // если добавлены особые заголовки, то содержит их список
        // сервер должен ответить статусом 200, без тела ответа, указав эти заголовки    
            'Access‐Control‐Allow‐Method' // метод
            'Access‐Control‐Allow‐Headers' // разрешённые заголовки .
            'Access‐Control‐Max‐Age' // sec – количество секунд, на которые нужно закэшировать разрешение; доп

    // 2. основной запрос




// протокол WebSocket
let socket = new WebSocket( "ws или wss://site.com/ws", ["soap", "wamp"]); // открытие соединения

open; // Соединение установлено
close; // Соединение закрыто
    e.wasClean // чисто / не чисто
    e.code
    e.reason
message; // Получены данные
    e.data
error; // Ошибка
    e.message

socket.send(data); // посылка данных


// события с сервера
let eventSource = new EventSource("/xxx", {
    withCredentials: true/false
});

onmessage; // пришло сообщение, доступно как event.data
onopen; // при успешном установлении соединения
onerror // при ошибке соединения.

eventSource.close(); // закрыть соединение

eventSource.lastEventId; // Последнее полученное id

eventSource.readyState; // Текущее состояние соединения
    CONNECTING = 0; // в процессе (пере‐)соединения
    OPEN = 1; // соединение установлено
    CLOSED = 2; // соединение закрыто

// Формат ответа сервера: data id retry event





fetch(url, options)
    .then(function(response) {
        headers;
        status;

        response.arrayBuffer();
        response.blob();
        response.formData();
        response.json();
        response.text();
    });

options = {

    method, // метод запроса,
    headers, // заголовки запроса (объект),
    body, // тело запроса: FormData , Blob , строка и т.п.
    mode: //указывает, в каком режиме кросс‑доменности предполагается делать запрос.
        [
            'same‑origin',
            'no‑cors',
            'cors',
        ],
    credentials: // указывает, пересылать ли куки и заголовки авторизации вместе с запросом.
       [
            'omit',
            'same‑origin',
            'include',
        ],
    cache: // указывает, как кешировать запрос.
        [
            'default',
            'no‑store',
            'reload',
            'no‑cache',
            'force‑cache',
            'only‑if‑cached',
        ],
    redirect: // 
        [
            'follow', // для обычного поведения при коде 30x (следовать редиректу)
            'error', // для интерпретации редиректа как ошибки.
        ]
}

