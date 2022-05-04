import { Cart } from '../../src/main/domain/cart';
import { Product } from '../../src/main/domain/product';
import { Item } from '../../src/main/domain/item';

describe('Cart', () => {
    let cart: Cart;
    let product: Product;
    let item: Item;
    let actualItems: Item[];

    beforeEach(() => {
        cart = new Cart();
        product = new Product('Test product');
        item = new Item(product, 2);

        cart.add(item);
        actualItems = cart.getItems();
    });

    describe('add', () => {

        it('should add the item to the the cart in the right quantity', () => {
            const expectedItems: Item[] = [item];

            expect(actualItems).toEqual(expectedItems);
            expect(actualItems[0].getProduct()).toEqual(product);
            expect(actualItems[0].getQuantity()).toEqual(2);
        });

    });

    describe('remove', () => {

        it('should remove the whole item', () => {
            expect(actualItems.length).toEqual(1);

            const expectedItems: Item[] = [];
            cart.remove(item);

            expect(cart.getItems()).toEqual(expectedItems);
            expect(cart.getItems().length).toEqual(0);
        });

    });

});
