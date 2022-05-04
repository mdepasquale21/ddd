import { Item } from '../../src/main/domain/item';
import { Product } from '../../src/main/domain/product';

describe('Item', () => {
    let item: Item;
    let product: Product;
    let quantity: number;

    describe('constructor', () => {

        beforeEach(() => {
            product = new Product('Test product');
            quantity = 2;
            item = new Item(product, quantity);
        });

        it('should add a product with the amount quantity', () => {
            expect(item.getProduct()).toEqual(product);
            expect(item.getQuantity()).toEqual(quantity);
        });

    });
});
