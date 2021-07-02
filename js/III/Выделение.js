// Range - объект, соответствующий фрагменту документа

// Range состоит из двух граничных точек (boundary-points), соответствующих началу и концу области.
// Позиция определяется с помощью узла (node) и смещения (offset).
// Контейнер (container) - узел, содержащий граничную точку.
// Сам контейнер и все его предки называются родительскими контейнерами (ancestor containers)для граничной точки.
// Родительский контейнер, включающий обе граничные точки, называют корневым контейнером (root container).

let r = document.createRange(); // создаёт объект Range
r.setStart(node, offset);
r.setEnd(node, offset);

// Свойства:
commonAncestorContainer; // вернет ссылку на наиболее вложенный корневой контейнер.

startContainer; endContainer; // вернет ссылку на контейнер верхней (нижней) граничной точки.

startOffset; endOffset; // вернет смещение для верхней (нижней) граничной точки.

collapsed; // вернет true , если граничные точки имеют одинаковые контейнеры и смещение ( false в противном случае).




// Методы:
setStart; setEnd; // задает контейнер (ссылка на узел) и смещение (целочисленное значение) для соответствующих граничных точек.

setStartBefore; setStartAfter; setEndBefore; setEndAfter; // принимают в качестве единственного аргумента ссылку на узел и
// устанавливают граничные точки в соответствии с естественной границей переданного узла.

selectNode; selectNodeContents; // позволяют создать объект Range по границам узла,
// ссылку на который они принимают в качестве единственного аргумента.
// При использовании selectNode передаваемый узел также войдет в Range,
//  в то время как selectNodeContents создаст объект только из содержимого узла.

collapse; // объединяет граничные точки объекта Range . В качестве единственного аргумента принимает булево значение
// ( true – для объединения в верхней точке, false – в нижней). По‑умолчанию true.

toString; // вернет текстовое содержимое объекта Range.

cloneContents; // вернет копию содержимого объекта Range в виде фрагмента документа.

cloneRange; // вернет копию самого объекта Range.

deleteContents; // удаляет всё содержимое объекта Range.

detach; // извлекает текущий объект из DOM, так что на него больше нельзя сослаться.

insertNode; // принимает в качестве единственного аргумента ссылку на узел (или фрагмент документа) и
// вставляет его в содержимое объекта в начальной точке.

extractContents; // вырезает содержимое объекта Range и возвращает ссылку на полученный фрагмент документа.

surroundContents; // помещает всё содержимое текущего объекта Range в новый родительский элемент,
// ссылка на который принимается в качестве единственного аргумента.

compareBoundaryPoints; // используется для сравнения граничных точек.




// Selection - объект выделения элементов на странице
// точка начала выделения (anchor) и фокусная точка окончания (focus). Точки могут совпадать.

// Свойства:
anchorNode; focusNode;//  вернет контейнер, в котором начинается/заканчивается выделение.
// Началом/окончанием выделения считается та граница, от которой вы начали/закончили выделение.

anchorOffset; focusOffset; // вернет смещение для начала выделения в пределах контейнера anchorNode.

rangeCount; // возвращает число объектов Range, которые входят в полученное выделение.




// Методы:
getRangeAt; // принимает в качестве аргумента индекс объекта Range и возвращает сам объект.

collapse; // сворачивает выделение в точку (каретку).
// Методу можно передать в качестве первого аргумента узел, в который нужно поместить каретку.

extend; // принимает в качестве аргументов ссылку на контейнер и смещение ( parentNode , offset ),
// и перемещает фокусную точку в это положение.

collapseToStart; collapseToEnd; // перемещает фокусную (начальную) границу к начальной (фокусной),
// тем самым сворачивая выделение в каретку.

selectAllChildren; // принимает в качестве единственного аргумента ссылку на узел и добавляет всех его потомков в выделение.

addRange; // принимает в качестве аргумента объект Range и добавляет его в выделение.

removeRange; removeAllRanges; // удаляет переданный (все) объект Range из выделения.

toString; // вернет текстовое содержимое выделения