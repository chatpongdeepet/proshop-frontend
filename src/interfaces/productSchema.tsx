export interface IProduct {
  _id: string;
  name: string;
  img: string;
  price: number;
}

export interface IProductProps {
  product: IProduct;
}
