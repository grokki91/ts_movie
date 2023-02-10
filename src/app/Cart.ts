import Movie from "./Movie";
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
        return this.items.reduce((currentSum, item) => currentSum += item.price, 0);
    }
    getTotalPrice(): number {
        return this.items.reduce((currentSum, item) => currentSum += item.price - item.price * item.discount / 100, 0);
    }
    deleteProduct(num: number): MovieData[] {
        return this.items.filter((item) => {
            if (item.id !== num) {
                return this.items;
            }
        })
    }
}