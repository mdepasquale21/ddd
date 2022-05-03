export class Product {

    constructor(private readonly name: string) {
    }

    public getName(): string {
        return this.name;
    }

    public toString(): string {
        return 'Product{' +
            'name=\'' + this.name + '\'' +
            '}';
    }
}