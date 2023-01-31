import MovieData from "./MovieData";

export default class Movie implements MovieData {
  constructor(
    readonly id: number,
    readonly title: string,
    readonly year: number,
    readonly country: string,
    readonly slogan: string,
    readonly genre: string[],
    readonly time: number,
    readonly price: number,
    readonly discount?: number
  ){}
}
