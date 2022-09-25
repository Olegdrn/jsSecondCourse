"use strict";

class ElemValues {
    constructor(choosedElement) {
        this.name = choosedElement.id;
        this.price = choosedElement.dataset['price'];
        this.calories = choosedElement.dataset['calories'];
    }
}

class Hamburger {
    constructor(size, firstOpt, secondOpt) {
        this.size = new ElemValues(_checkedParam(size));
        this.firstOpt = new ElemValues(_checkedParam(firstOpt));
        this.secondOpt = secondOpt;
    }

    _checkedParam(paramName) {
        const paramFirstOpt = document.querySelector('input[name= ${paramName}]:checked');
        return paramFirstOpt;
    }

    _checkedSecondOpt(optName) {
        const optList = [];

    }
}
//     // addTopping(topping) { // Добавить добавку }
//     //     removeTopping(topping) { // Убрать добавку }
//     //         getToppings(topping) { // Получить список добавок }
//     //             getSize() { // Узнать размер гамбургера }
//     //                 getStuffing() { // Узнать начинку гамбургера }
//     //                     calculatePrice() { // Узнать цену }
//     //                         calculateCalories() { // Узнать калорийность }
//     //                         }



window.onload = () => {
    document.querySelector('.button').addEventListener('click', e => {
        e.preventDefault();
        let burger = new Burger('size', 'firstOpt', 'secondOpt');
        burger.showPrice("#price");
        burger.showCalories("#calories");
    });
}