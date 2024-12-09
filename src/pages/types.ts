export interface Category {
  category_id: number;
  name: string;
  description: string;
  img: string;
}

export interface Item {
  id: number;
  description: string;
  category: string;
  price: number;
  image: string;
  title: string;
  rating: {
    rate: number;
    count: number;
  };
}
