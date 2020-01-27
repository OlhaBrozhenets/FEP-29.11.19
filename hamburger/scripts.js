class Hamburger {
    constructor(size) {
        this.size = size;
        this.toppings = [];
    }

    static SIZE_SMALL = { price: 50, calories: 20 };
    static SIZE_BIG = { price: 100, calories: 40 };
    static TOPPING_SAUCE = { price: 15, calories: 0 };
    static TOPPING_MAYO = { price: 20, calories: 5 };
    static TOPPING_CHEESE = { price: 10, calories: 20 };
    static TOPPING_SALAD = { price: 20, calories: 5 };
    static TOPPING_POTATO = { price: 15, calories: 10 };

    calculateCalories() {
        return this.toppings.reduce((sum, topping) => {
            return sum + topping.calories;
        }, this.size.calories);
    }

    calculatePrice() {
        return this.toppings.reduce((sum, topping) => {
            return sum + topping.price;
        }, this.size.price);
    }

    add(topping) {
        this.toppings.push(topping);
    }
}

// маленький гамбургер с начинкой из сыра
const hamburger = new Hamburger(
    Hamburger.SIZE_SMALL,
    Hamburger.STUFFING_CHEESE
);
// добавка из майонеза
hamburger.add(Hamburger.TOPPING_MAYO);
// спросим сколько там калорий
console.log('Calories: ' + hamburger.calculateCalories());
// сколько стоит
console.log('Price: ' + hamburger.calculatePrice());
// я тут передумал и решил добавить еще приправу
hamburger.add(Hamburger.TOPPING_SAUCE);
// А сколько теперь стоит?
console.log('Price with sauce: ' + hamburger.calculatePrice());

// function Hamburger(size) {
//     this.size = size;
//     this.toppings = [];
// }

// Hamburger.SIZE_SMALL = {
//     price: 50,
//     calories: 20
// };

// Hamburger.SIZE_BIG = {
//     price: 100,
//     calories: 40
// };

// Hamburger.TOPPING_SAUCE = {
//     price: 15,
//     calories: 0
// };

// Hamburger.TOPPING_MAYO = {
//     price: 20,
//     calories: 5
// };

// Hamburger.TOPPING_CHEESE = {
//     price: 10,
//     calories: 20
// };

// Hamburger.TOPPING_SALAD = {
//     price: 20,
//     calories: 5
// };

// Hamburger.TOPPING_POTATO = {
//     price: 15,
//     calories: 10
// };

// Hamburger.prototype.calculateCalories = function() {
//     const toppingCalories = this.toppings.reduce((sum, topping) => {
//         return sum + topping.calories;
//     }, 0);

//     return this.size.calories + toppingCalories;
// };

// Hamburger.prototype.calculatePrice = function() {
//     const toppingPrice = this.toppings.reduce((sum, topping) => {
//         return sum + topping.price;
//     }, 0);

//     return this.size.price + toppingPrice;
// };

// Hamburger.prototype.add = function(topping) {
//     this.toppings.push(topping);
// };
