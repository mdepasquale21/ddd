import { Product } from './product';

export class Cart {
    private readonly products: Product[] = [];

    public add(product: Product): void {
        this.products.push(product);
    }

    public getProducts(): Product[] {
        return this.products;
    }

    public toString(): string {
        return 'Cart{' +
            'products=' + this.products +
            '}';
    }
}