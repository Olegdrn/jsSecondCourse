class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this._fetchProducts();
        this.insert();
    }
    _fetchProducts() {
        this.goods = [
            { id: 1, title: 'Notebook', price: 2000 },
            { id: 2, title: 'Mouse', price: 20 },
            { id: 3, title: 'Keyboard', price: 200 },
            { id: 4, title: 'Gamepad', price: 50 },
        ];
    }
    insert() {
        const productPlace = document.querySelector(this.container);
        this.goods.forEach(product => {
            const item = new ProductInTheProductList(product);
            productPlace.insertAdjacentHTML("beforeend", item.render());
        });
    }

    totalPrice() {
        let price = 0;
        this.goods.forEach(product => {
            price += product.price;
        });
        console.log(price);
    }

}

class ProductInTheProductList {
    constructor(product, img = 'image/image_card_6.jpg" alt="logo3') {
        this.id = product.id;
        this.title = product.title;
        this.price = product.price;
        this.img = img;
    }

    render() {
        return `<div class="product-item">
                <h3>${this.title}</h3>
                <img class="product_img" src="${this.img}">
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}




class Basket {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this.clickBasket();
        this._addProduct()
            .then(data => {
                this.goods = data.contents;
                console.log(this.goods);
                this.insertProduct();
            });
    }
    _addProduct() {
        return fetch('https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/getBasket.json')
            .then(result => result.json())
            .catch(error => {
                console.log('error');
            });
    }
    insertProduct() {
        const basketProductPlace = document.querySelector(this.container);
        this.goods.forEach(product => {
            const item = new ElementInTheBasket(product);
            console.log(item);
            basketProductPlace.insertAdjacentHTML("beforeend", item.render());
        });
    }

    clickBasket() {
        document.querySelector(".btn-cart").addEventListener('click', () => {
            document.querySelector(".basket-item").classList.toggle('invisible')
        });
    }

    removeProduct() { };
    changeProduct() { };
}

class ElementInTheBasket {
    constructor(product, img = 'image/notebook.png" alt="logo3') {
        this.id = product.id_product;
        this.price = product.price;
        this.name = product.product_name;
        this.quantity = product.quantity;
        this.img = img;
    }
    render() {
        return `<div class="basket-item invisible">
        <img class="basketProduct_img" src="${this.img}">
        <div class="text">
            <h7>Наименование: ${this.name}</h7>
            <p class="pBasket">Цена:  ${this.price}</p>
            <p class="pBasket">Количество: ${this.quantity}</p>
        </div>
    </div>`
    }
}



let list = new ProductList();
list.totalPrice();
let bask = new Basket();

// если будет корректно работать main, то main1 попробовать сделать с наследованием и полиморфизмом











/*
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
    Свойство innerHTML позволяет считать содержимое в виде HTML-строки 
    (аналогичное методу toString). Поэтому объекты массива будут перечислены 
    через запятую. Используем join(' ') для удаления запятой    

};

renderPage(products); 

*/