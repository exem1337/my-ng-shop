export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: IProductRating;
}

export interface IProductRating {
  rate: number;
  count: number;
}

export interface ICartProduct extends IProduct {
  count: number;
}