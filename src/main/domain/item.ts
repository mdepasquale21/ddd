import { Product } from './product';
import { UuidUtil } from '../util/uuid.util';

export class Item {
    private readonly id: string;

    constructor(private readonly product: Product,
                private readonly quantity: number = 1) {
        this.id = UuidUtil.getUuidV4();
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
