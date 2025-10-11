export interface IMango {
  name: string;
  variety: string;
  price: number;
  stock: number;
  origin: string;
  season: "summer" | "winter";
  unit: "KG" | "TON";
}
