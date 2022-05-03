import { Product } from '../domain/product';
import { Cart } from '../domain/cart';

export class Application {

    public static main(): void {
        const cart = new Cart();
        const product = new Product('Apple Pencil');

        cart.add(product);
        const products: Product[] = cart.getProducts();

        console.log('Cart = ' + cart);
        console.log('----------------------------------------');
        console.log('products = ' + products);
        console.log('----------------------------------------');
    }

}

Application.main();
