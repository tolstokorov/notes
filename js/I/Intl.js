// Интернационализация (стандарт ECMA 402)


// Локаль 
    // 1. Код языка. 
        // ru – русский язык.
    // 2. Код способа записи. 
        // en‐US – английский язык, используемый в США.
    // 3. Код страны.
        // zh‐Hans‐CN – китайский язык, упрощённая иероглифическая письменность, используемый в китае.


// Локали (RFC 5464); языки (IANA language registry)

// суффикс ‐u‐* расширения локалей
    // th‐TH‐u‐nu‐thai – тайский язык, используемый в Тайланде, с записью чисел тайскими буквами

// Локали в виде строки или массива, содержащего несколько локалей в порядке предпочтения!
// Если не указана / undefined – берётся по умолчанию, установленная в окружении (браузере).


Intl.Collator; // Умеет правильно сравнивать и сортировать строки.
let collator = new Intl.Collator(locales, options);
    // locales - строка или массив
    // options:
{

    localeMatcher // алгоритм выбора подходящей локали, если желаемая недоступна
        // "lookup" – простейший порядок поиска путём обрезания суффикса (zh‐Hans‐CN → zh‐Hans → zh → локаль по умолчанию).
        // "best fit"(по умолчанию) – встроенные алгоритмы и предпочтения браузера

    usage // цель сравнения:
        // сортировка "sort" (по умолчанию)
        // поиск "search".

    sensitivity // чувствительность: какие различия в символах учитывать, а какие – нет:
        // base – только разные символы, без диакритических знаков и регистра, например: а ≠ б, е = ё, а = А.
        // accent – символы и диакритические знаки, например: а ≠ б, е ≠ ё, а = А.
        // case – символы и регистр, например: а ≠ б, е = ё, а ≠ А.
        // variant (по умолчанию) – всё: символ, диакритические знаки, регистр, например: а ≠ б, е ≠ ё, а ≠ А.

    ignorePunctuation // игнорировать знаки пунктуации:
        // true
        // false (по умолчанию).

    numeric // использовать ли численное сравнение:
        // true (12 > 2)
        // false (12 < 2)

    caseFirst // в сортировке должны идти первыми прописные или строчные буквы:
        // "upper" (прописные)
        // lower (строчные)
        // false (по умолчанию) - стандартное для локали.

}

// сравнение
let result = collator.compare(str1, str2); // 1 (больше) / 0 (равно) / ‐1 (меньше)






Intl.DateTimeFormat; // Умеет форматировать дату и время в соответствии с нужным языком.
let formatter = new Intl.DateFormatter(locales, options);

{

    localeMatcher // Алгоритм подбора локали
        // lookup
        // best fit (по умолчанию)

    formatMatcher // Алгоритм подбора формата
        // basic - по стандартным правилам
        // best fit (по умолчанию) на усмотрение окружения (браузера)

    hour12 // Включать ли время в 12‑часовом формате
        // true ‑‑ 12‑часовой формат
        // false ‑‑ 24‑часовой

    timeZone // Временная зона Временная зона, например Europe/Moscow (по умолчанию - UTC)

    weekday // День недели
        // narrow
        // short
        // long

    era // Эра
        // narrow
        // short
        // long

    year // Год 
        // 2‐digit
        // numeric
            // (по умолчанию - undefined или numeric)

    month // Месяц 
        // 2‐digit
        // numeric
        // narrow
        // short
        // long
            // (по умолчанию - undefined или numeric)

    day // День
        // 2‐digit
        // numeric
            // (по умолчанию - undefined или numeric)

    hour // Час
        // 2‐digit
        // numeric

    minute // Минуты
        // 2‐digit
        // numeric

    second // Секунды
        // 2‐digit
        // numeric

}

formatter.format(date);

// Все локали обязаны поддерживать следующие наборы настроек:
//     weekday, year, month, day, hour, minute, second
//     weekday, year, month, day
//     year, month, day
//     year, month
//     month, day
//     hour, minute, second



Intl.NumberFormat; // Умеет форматировать числа, валюту, проценты в соответствии с нужным языком.
let formatter = new Intl.NumberFormat(locales, options);

{

    localeMatcher // Алгоритм подбора локали
        // lookup
        // best fit (по умолчанию)

    style // Стиль форматирования
        // decimal (по умолчанию)
        // percent
        // currency
    
    currency // Алфавитный код валюты (например USD)

    currencyDisplay // Показывать валюту в виде кода, локализованного символа или локализованного названия
        // code
        // symbol (по умолчанию)
        // name

    useGrouping // Разделять ли цифры на группы
        // true (по умолчанию)
        // false

    minimumIntegerDigits // Минимальное количество цифр целой части
        // от `1` до `21`
            // (по умолчанию - 21)

    minimumFractionDigits // Минимальное количество десятичных цифр
        // от 0 до 20
            // (по умолчанию - для чисел и процентов 0, для валюты - зависит от кода)

    maximumFractionDigits // Максимальное количество десятичных цифр
        // от minimumFractionDigits до 20
            // (по умолчанию - для чисел max(minimumFractionDigits, 3),
            // для процентов 0 , для валюты зависит от кода)

    minimumSignificantDigits // Минимальное количество значимых цифр
        // от 1 до 21
        // (по умолчанию - 1)

    maximumSignificantDigits // Максимальное количество значимых цифр
        // от minimumSignificantDigits до 21
        //  (по умолчанию - minimumSignificantDigits)

}

formatter.format(number);


// укороченные варианты вызова

// В String.prototype
st1.localeCompare(str2, locales, options); // Сравнивает строку с другой, с учётом локали

// В Date.prototype
date.toLocaleString(locales, options);
    // Форматирует дату в соответствии с локалью
date.toLocaleDateString(locales, options);
    // Форматирует дату в соответствии с локалью (опции по умолчанию включают в себя год, месяц, день)
date.toLocaleTimeString(locales, options);
    // Форматирует дату в соответствии с локалью (опции по умолчанию включают в часы, минуты, секунды)

// В Number.prototype
number.toLocaleString(locales, options);
    // Форматирует число, используя опции Intl.NumberFormat
