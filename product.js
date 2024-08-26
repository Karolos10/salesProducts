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

class Order{
    static countOrder = 0;
    static get MAX_PRODUCTS(){
        return 5;
    }

    constructor(){
        this._idOrder = ++Order.countOrder;
        this._products = [];
        //this.countProductsAdded = 0;
    }

    get idOrder(){
        return this._idOrder;
    }

    addProduct(product){
        if(this._products.length < Order.MAX_PRODUCTS){
            this._products.push(product);
            //this._products[this._countProductsAdded++] = product;
        }else{
            console.log('No se pueden agregar mas productos');
        }
    }

    calculateTotal(){
        let total = 0;
        for(let product of this._products){
            total += product.price;
        }
        return total;
    }

    showOrder(){
        let productsOrder = '';
        for(let product of this._products){
            productsOrder += product.toString() + ' ';
        }
        console.log(`Order: ${this._idOrder}, Total: ${this.calculateTotal()}, Products: ${productsOrder}`);
    }
}

let product1 = new Product('Pantalon', 100);
let product2 = new Product('Camisa 2', 200);
/* console.log(product1.toString());
console.log(product2.toString()); */

