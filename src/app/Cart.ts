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
        return this.items.reduce((currentSum, item) => {
            return currentSum += item.price;
        }, 0)
    }
    getTotalPrice(): number {
        return this.items.reduce((currentSum, item) => {
            item.discount ? item.discount : item.discount = 1;
            return currentSum += item.price - item.price * item.discount / 100;
        }, 0)
    }
    deleteProduct(num: number): void {
        return this.items.forEach((item: Movie, index: number) => {
            if (item.id === num) {
                console.log(item);
                return this.items.splice(index, 1);
            }
        })
    }
}