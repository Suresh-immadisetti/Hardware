export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  featured?: boolean;
  inStock: boolean;
  rating?: number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  slug: string;
}