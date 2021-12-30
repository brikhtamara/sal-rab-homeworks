// Задание 4.1. Вывод карточек товаров

function parseProducts(json) {
    // Аргументом функции является JSON
        json = [JSON.parse(json)];    // Преобразуйте строку json, переданную как аргумент функции,
    // в объект с помощью функции JSON.parse(json)
    let data = json;// и запишите в переменную data
    return products.data;// Верните как результат функции свойство products объекта data
}
function renderProductsCards(json){
    clearProducts ();
    products.json = parseProducts(json);
    let length = products.length;
    for (0; products; length - 1) {
        addProduct()
    }
}
// Напишите функцию renderProductsCards(json)
// Аргументом функции является JSON
// Выполните функцию clearProducts - она уже написана в коде, просто вызовите ее, аргументы не требуются
// Выполните функцию parseProducts, передав в неё json - аргумент функции и запишите результат в переменную products
// Запишите в переменную length значение свойства products.length
// Напишите цикл, в котором перебираете все products от 0 до (length - 1)
// и выполняете addProduct с каждым элементом массива products (передавая элемент массива как аргумент)
