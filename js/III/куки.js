document.cookie; // свойство для чтения и записи cookie
// представляет собой строку в специальном формате

"ключ=значение; ключ=значение; ключ=значение"

'path=/my-path'; // Путь, внутри которого будет доступ к cookie. Если не указать, то имеется в виду текущий путь и все пути ниже него.

'domain=site.com'; // Домен, на котором доступно cookie. Если не указать, то текущий домен.
// Допустимо указывать текущий домен site.com и его поддомены.
// Если указать специальную маску .site.com , то cookie будет доступно на сайте и всех его поддоменах.

'expires=Tue, 19 Jan 2038 03:14:07 GMT'; // Дата истечения куки в формате GMT.
// Если дату не указать, то cookie будет считаться 'сессионным'. Если дата в прошлом, то кука будет удалена.

'secure'; // Cookie можно передавать только по HTTPS.


navigator.cookieEnabled; // отключены ли куки