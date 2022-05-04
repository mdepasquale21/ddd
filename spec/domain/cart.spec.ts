import { Cart } from '../../src/main/domain/cart';
import { Product } from '../../src/main/domain/product';

describe('Cart', () => {
    let cart: Cart;
    let product: Product;

    beforeEach(() => {
        cart = new Cart();
        product = new Product('Test product');
    });

    describe('add', () => {
        let actualProducts: Product[];

        describe('when adding only 1 item', () => {

            beforeEach(() => {
                cart.add(product);
                actualProducts = cart.getProducts();
            });

            it('should add the product to the the cart', () => {
                const expectedProducts: Product[] = [product];

                expect(actualProducts).toEqual(expectedProducts);
                expect(actualProducts.length).toEqual(1);
                expect(actualProducts[0].getName()).toEqual('Test product');
            });

        });

        describe('when adding more than 1 unit of the same item', () => {

            beforeEach(() => {
                cart.add(product, 2);
                actualProducts = cart.getProducts();
            });

            it('should add the right amount of product to the the cart', () => {
                const expectedProducts: Product[] = [product, product];

                expect(actualProducts).toEqual(expectedProducts);
                expect(actualProducts.length).toEqual(2);
            });

        });

    });

});
