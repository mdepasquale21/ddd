import { Product } from '../domain/product';
import { Cart } from '../domain/cart';

export class Application {

    public static main(): void {
        const cart = new Cart();
        const product1 = new Product('Apple Pencil');
        const product2 = new Product('Sony Wireless Headphone');

        cart.add(product1, 2);
        cart.add(product2);
        const products: Product[] = cart.getProducts();

        console.log('Cart = ' + cart);
        console.log('----------------------------------------');
        console.log('products = ' + products);
        console.log('----------------------------------------');
    }

}

Application.main();
