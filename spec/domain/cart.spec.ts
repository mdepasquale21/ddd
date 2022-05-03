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

});
