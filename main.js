"use strict"

const app = new Vue({
  el: '#app',
  data: {
    userSearch: '',
    showCart: false,
    showMenu: false,
    cartItems: [],
    filtered: [],
    products: [],
  },
  methods: {
    getJson(url) {
      return fetch(url)
        .then(result => result.json())
        .catch(error => console.log(error))
    },
    addProduct(item) {
      this.getJson(`https://raw.githubusercontent.com/Olegdrn/jsonBase/main/responses/addToBasket.json`)
        .then(data => {
          if (data.result === 1) {
            let find = this.cartItems.find(el => el.id_product === item.id_product);
            if (find) {
              find.quantity++;
            } else {
              const prod = Object.assign({ quantity: 1 }, item);
              this.cartItems.push(prod)
            }
          }
        })
    },
    remove(item) {
      this.getJson(`https://raw.githubusercontent.com/Olegdrn/jsonBase/main/responses/deleteFromBasket.json`)
        .then(data => {
          if (data.result === 1) {
            if (item.quantity > 1) {
              item.quantity--;
            } else {
              this.cartItems.splice(this.cartItems.indexOf(item), 1);
            }
          }
        })
    },
    filter() {
      let regexp = new RegExp(this.userSearch, 'i');
      this.filtered = this.products.filter(el => regexp.test(el.product_name));
    }

  },
  mounted() {
    this.getJson(`https://raw.githubusercontent.com/Olegdrn/jsonBase/main/responses/getBasket.json`)
      .then(data => {
        for (let item of data.contents) {
          this.cartItems.push(item);
        }

      });
    this.getJson(`https://raw.githubusercontent.com/Olegdrn/jsonBase/main/responses/catalogData.json`)
      .then(data => {
        for (let item of data) {
          this.$data.products.push(item);
          this.$data.filtered.push(item);
        }
      });

  }

});