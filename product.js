class Product {
    static countProduct = 0;

    constructor(name, price) {
        this._idProduct = ++Product.countProduct;
        this._name = name;
        this._price = price;
    }

    get idProduct() {
        return this._idProduct;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        return this._name = name;
    }

    get price() {
        return this._price;
    }

    set price(price) {
        return this._price = price;
    }

    toString() {
        return `idProduct: ${this._idProduct}, name: ${this._name}, price: ${this._price}`;
    }

}

let product1 = new Product('Pantalon', 100);
let product2 = new Product('Camisa 2', 200);
console.log(product1.toString());
console.log(product2.toString());