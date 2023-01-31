import MovieData from "./MovieData";

export default class Cart {
    private _items: MovieData[] = [];

    add(item: MovieData): void {
        this._items.push(item);
    }
    get items(): MovieData[] {
        return [...this._items];
    }
    getTotalPriceWithoutDiscount(): number {
        return this.items.reduce((currentSum, item) => {
            console.log(currentSum, item.price);
            return currentSum += item.price;
        }, 0)
    }
    getTotalPrice(): number {
        return this.items.reduce((currentSum, item) => {
            console.log(currentSum, item.price, item.discount);
            return currentSum += item.price * item.discount / 100;
        }, 0)
    }
    deleteProduct(id: MovieData): void {
        this.items.filter(item => {
            if (item.id === id) {
                delete item;
            }
        })
    }
}