import { Product } from './product';
import { v4 as uuidv4 } from 'uuid';

export class Item {
    private readonly id: string;

    constructor(private readonly product: Product,
                private readonly quantity: number = 1) {
        this.id = uuidv4();
    }

    getId(): string {
        return this.id;
    }

    getProduct(): Product {
        return this.product;
    }

    getQuantity(): number {
        return this.quantity;
    }

    print(): string {
        return ' Item{' +
            'product: ' + this.product + ', ' +
            'quantity: ' + this.quantity + ', ' +
            'id: ' + this.id + ' ' +
            '}';
    }

}
