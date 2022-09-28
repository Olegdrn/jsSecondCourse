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
  addProduct() { };
  removeProduct() { };
  changeProduct() { };
  insertProduct() {
    const basketProductPlace = document.querySelector('.btn-cart');
    this.goods.forEach(product => {
      const item = new ProductInTheProductList(product);
      productPlace.insertAdjacentHTML("beforeend", item.render());
    });
  };
}

class ElementInTheBasket extends ProductInTheProductList {
  constructor(product, img = 'image/image_card_6.jpg" alt="logo3') {
    super(id, price, img);
    this.name = product.name;
    this.quantity = product.quantity;
  }
  render() {
    return `<div class="basket-item">
        <div class="basketProduct_img">
        <img src="${this.img}">
        </div>
        <h7>${this.name}</h7>
        <p class="pBasket">${this.price}</p>
        <p class="pBasket">${this.quantity}</p>
    </div>`
  };
}



let list = new ProductList();
list.totalPrice();












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