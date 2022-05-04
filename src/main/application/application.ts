import { Product } from '../domain/product';
import { Cart } from '../domain/cart';
import { Item } from '../domain/item';

export class Application {

    public static main(): void {
        const cart = new Cart();
        const product1 = new Product('Apple Pencil');
        const item1 = new Item(product1, 2);
        const product2 = new Product('Sony Wireless Headphone');
        const item2 = new Item(product2);

        cart.add(item1);
        cart.add(item2);
        const items: Item[] = cart.getItems();

        console.log('----------------------------------------');
        console.log('Cart = ' + cart);
        console.log('----------------------------------------');

        console.log('\n');
        console.log('--------------------------remove product-----------------------------------------------------------');
        cart.remove(item1);
        console.log('Cart = ' + cart);
        console.log('----------------------------------------');
    }

}

Application.main();
