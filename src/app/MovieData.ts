export default interface MovieData {
  readonly id: number;
  readonly title: string;
  readonly year: number;
  readonly country: string;
  readonly slogan: string;
  readonly genre: string[];
  readonly time: number;
  readonly price: number;
  discount?: number;
}
