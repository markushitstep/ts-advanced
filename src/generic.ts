const cars: string[] = ['ford', 'audi'];
const cars2: Array<string> = ['ford', 'audi'];

//////////////////////////////////

const promise: Promise<string> = new Promise<string>(resolve => {
    setTimeout(() => {
        resolve("Promise resolved")
    }, 2000)
})

promise.then(data => {
    console.log(data);
})
//////////////////////////////////

function mergeObjects<T extends object, R extends object>(a: T, b: R){
    return Object.assign({}, a, b);
}

const merged = mergeObjects({ name: "maxim" }, { age: 24 });
const merged2 = mergeObjects({ model: "Ford" }, { year: 2010 });
//const merged3 = mergeObjects('aaaa', 'bbbb'); error
//console.log(merged3); error

/////////////////////////////////

interface ILength {
    length: number
}

function withCount<T extends ILength>(value: T): {value: T, count: string} {
    return {
        value,
        count: `В этом объекте ${value.length} символов`
    }
}

console.log(withCount("Привет ts"))
console.log(withCount(['i','am','array']))
//console.log(withCount(20))
console.log(withCount({ length: 20}))

////////////////////////////////

function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
    return obj[key]
}

const person = {
    name: "Maxim",
    age: 24,
    job: "Js"
}
console.log(getObjectValue(person, 'name'));
console.log(getObjectValue(person, 'age'));
console.log(getObjectValue(person, 'job'));

/////////////////////////////////

class Collection<T extends number | string | boolean> {
    constructor(private _items: T[] = []) {}

    add(item: T) {
        this._items.push(item);
    }

    remove(item: T) {
        this._items = this._items.filter(i => i != item);
    }

    get items(): T[] {
        return this._items
    }
}

// const strings = new Collection<string>(['I','Am','Strings'])
// strings.add('!');
// strings.remove('Am');
// console.log(strings.items);

// const numbers = new Collection<number>([1,2,3])
// numbers.add(101);
// numbers.remove(2);
// console.log(numbers.items);

// const object = new Collection([{a:1}, {b:2}]) error
// object.remove({b:2});
// console.log(object.items)

////////////////////////////////////

interface Car {
    model: string,
    year: number
}

function createAndValidateCar(model: string, year: number): Car { // validate func
    const car: Partial<Car> = {} // temporary object with inherited keys

    if(model.length >= 3) {
        car.model = model
    }

    if(year > 2000){
        car.year = year
    }

    return car as Car 
}

////////////////////////////////

const carss: Readonly<Array<string>> = ["ford", "audi"]; // only for read
//carss.shift();


const ford: Readonly<Car> = {
    model: 'Ford',
    year: 2020
}

//ford.model = 'Ferrari'