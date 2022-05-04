import { Item } from './item';

export class Cart {
    private items: Item[] = [];

    public add(item: Item): void {
        this.items.push(item);
    }

    public remove(itemToRemove: Item): void {
        this.items = this.items.filter(item => item.getId() !== itemToRemove.getId());
    }

    public getItems(): Item[] {
        return this.items;
    }

    printItems(): string[] {
        return this.items.map(item => item.print());
    }

    public toString(): string {
        return 'Cart{' +
            'items=' + this.printItems() +
            '}';
    }
}