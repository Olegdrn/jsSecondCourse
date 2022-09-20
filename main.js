const products = [
    { id: 1, title: 'Notebook', price: 2000, img: 'image/image_card_6.jpg" alt="logo3' },
    { id: 2, title: 'Mouse', price: 20, img: 'image/image_card_6.jpg" alt="logo3' },
    { id: 3, title: 'Keyboard', price: 200, img: 'image/image_card_6.jpg" alt="logo3' },
    { id: 4, title: 'Gamepad', price: 50, img: 'image/image_card_6.jpg" alt="logo3' },
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = item => {
    return `<div class="product-item">
                <h3>${item.title}</h3>
                <img class="product_img" src="${item.img}">
                <p>${item.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item));
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList.join('');
    /*Свойство innerHTML позволяет считать содержимое в виде HTML-строки 
    (аналогичное методу toString). Поэтому объекты массива будут перечислены 
    через запятую. Используем join(' ') для удаления запятой
    */
};

renderPage(products);