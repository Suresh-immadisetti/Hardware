import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Power Drill',
    description: 'High-performance cordless drill with variable speed control',
    price: 129.99,
    category: 'tools',
    image: 'https://images.pexels.com/photos/1029243/pexels-photo-1029243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    featured: true,
    inStock: true,
    rating: 4.8
  },
  {
    id: '2',
    name: 'Professional Tool Set',
    description: '145-piece toolkit with carrying case',
    price: 199.99,
    category: 'tools',
    image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    featured: true,
    inStock: true,
    rating: 4.5
  },
  {
    id: '3',
    name: 'Electric Circular Saw',
    description: 'Powerful circular saw for precise cutting',
    price: 149.99,
    category: 'tools',
    image: 'https://images.pexels.com/photos/3846022/pexels-photo-3846022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    inStock: true,
    rating: 4.3
  },
  {
    id: '4',
    name: 'Concrete Mix (50lb)',
    description: 'High-quality concrete mix for construction projects',
    price: 12.99,
    category: 'building-materials',
    image: 'https://images.pexels.com/photos/544966/pexels-photo-544966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    inStock: true,
    rating: 4.2
  },
  {
    id: '5',
    name: 'LED Ceiling Light',
    description: 'Energy-efficient LED light fixture for residential use',
    price: 59.99,
    category: 'electrical',
    image: 'https://images.pexels.com/photos/1123262/pexels-photo-1123262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    featured: true,
    inStock: true,
    rating: 4.7
  },
  {
    id: '6',
    name: 'PVC Pipe (10ft)',
    description: 'Schedule 40 PVC pipe for plumbing applications',
    price: 8.99,
    category: 'plumbing',
    image: 'https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    inStock: true,
    rating: 4.0
  },
  {
    id: '7',
    name: 'Interior Wall Paint (1gal)',
    description: 'Premium interior paint, matte finish',
    price: 32.99,
    category: 'paint-supplies',
    image: 'https://images.pexels.com/photos/5691544/pexels-photo-5691544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    inStock: true,
    rating: 4.6
  },
  {
    id: '8',
    name: 'Hammer',
    description: 'Professional-grade claw hammer with fiberglass handle',
    price: 24.99,
    category: 'tools',
    image: 'https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    inStock: true,
    rating: 4.4
  }
];

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};