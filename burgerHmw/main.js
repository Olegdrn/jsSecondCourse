"use strict";

class ElemValues {
    constructor(choosedElement) {
        this.name = choosedElement.id;
        this.price = +choosedElement.dataset['price'];
        this.calories = +choosedElement.dataset['calories'];
    }
}

class Burger {
    constructor(size, firstOpt, secondOpt) {
        this.size = new ElemValues(this._checkedParam(size));
        this.firstOpt = new ElemValues(this._checkedParam(firstOpt));
        this.secondOpt = this._secondOptList(secondOpt);
    }

    _secondOptList(optName) {
        const optResult = [];
        this._checkedSecondOpt(optName).forEach(el => {
            let obj = new ElemValues(el);
            optResult.push(obj);
        });
        return optResult
    }

    _checkedParam(paramName) {
        return document.querySelector(`input[name = ${paramName}]:checked`);
    }

    _checkedSecondOpt(optName) {
        return document.querySelectorAll(`input[name = ${optName}]:checked`);
    }

    calculatePrice() {
        let price = this.size.price + this.firstOpt.price;
        this.secondOpt.forEach(el => price += el.price);
        return price;
    }

    calculateCalories() {
        let calories = this.size.calories + this.firstOpt.calories;
        this.secondOpt.forEach(el => calories += el.calories);
        return calories;
    }

    showTotal() {
        document.querySelector('.price').textContent = this.calculatePrice();
        document.querySelector('.calories').textContent = this.calculateCalories();
    }
}

window.onload = () => {
    document.querySelector('.button').addEventListener('click', e => {
        e.preventDefault();
        let burger = new Burger('size', 'firstOpt', 'secondOpt');
        burger.showTotal();
    });
}