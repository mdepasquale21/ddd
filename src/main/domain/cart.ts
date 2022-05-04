import { Product } from './product';

export class Cart {
    private readonly products: Product[] = [];

    public add(product: Product, quantity: number = 1): void {
        for (let i = 0; i < quantity; i++) {
            this.products.push(product);
        }
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