"use strict";
const cars = ['ford', 'audi'];
const cars2 = ['ford', 'audi'];
//////////////////////////////////
const promise = new Promise(resolve => {
    setTimeout(() => {
        resolve("Promise resolved");
    }, 2000);
});
promise.then(data => {
    console.log(data);
});
//////////////////////////////////
function mergeObjects(a, b) {
    return Object.assign({}, a, b);
}
const merged = mergeObjects({ name: "maxim" }, { age: 24 });
const merged2 = mergeObjects({ model: "Ford" }, { year: 2010 });
function withCount(value) {
    return {
        value,
        count: `В этом объекте ${value.length} символов`
    };
}
console.log(withCount("Привет ts"));
console.log(withCount(['i', 'am', 'array']));
//console.log(withCount(20))
console.log(withCount({ length: 20 }));
////////////////////////////////
function getObjectValue(obj, key) {
    return obj[key];
}
const person = {
    name: "Maxim",
    age: 24,
    job: "Js"
};
console.log(getObjectValue(person, 'name'));
console.log(getObjectValue(person, 'age'));
console.log(getObjectValue(person, 'job'));
/////////////////////////////////
class Collection {
    constructor(_items = []) {
        this._items = _items;
    }
    add(item) {
        this._items.push(item);
    }
    remove(item) {
        this._items = this._items.filter(i => i != item);
    }
    get items() {
        return this._items;
    }
}
function createAndValidateCar(model, year) {
    const car = {}; // temporary object with inherited keys
    if (model.length >= 3) {
        car.model = model;
    }
    if (year > 2000) {
        car.year = year;
    }
    return car;
}
////////////////////////////////
const carss = ["ford", "audi"]; // only for read
//carss.shift();
const ford = {
    model: 'Ford',
    year: 2020
};
//ford.model = 'Ferrari'
