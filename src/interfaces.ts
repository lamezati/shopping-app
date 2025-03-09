export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  features: string[];
  rating: number;
  reviewCount: number;
  retailers: Retailer[];
  comments: Comment[];
  additionalImages: string[];
  category: string;
  subcategory: string;
}

export interface Retailer {
  name: string;
  price: number;
  currency: string;
  url: string;
  inStock: boolean;
  shippingCost: number;
  deliveryDate: string;
}

export interface Comment {
  id: string;
  userName: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  helpful: number;
}

export interface Subcategory {
  id: string;
  name: string;
  description: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  subcategories: Subcategory[];
}