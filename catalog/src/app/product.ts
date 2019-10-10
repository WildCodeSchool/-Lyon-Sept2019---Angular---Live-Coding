/**
 * Product class which respresent a product.
 */
export class Product {
    id: number;
    name: string;
    price: number;
    promo: number;

    constructor(id, name, price, promo) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.promo = promo;
    }
}
