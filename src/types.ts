import type { Product, Retailer, Comment, Category } from './interfaces';

export const categories: Category[] = [
  {
    id: 'electronics',
    name: 'Electronics',
    description: 'Latest tech gadgets and devices',
    subcategories: [
      {
        id: 'smartphones',
        name: 'Smartphones & Accessories',
        description: 'Latest smartphones and mobile accessories'
      },
      {
        id: 'computers',
        name: 'Computers & Tablets',
        description: 'Laptops, desktops, and tablets'
      },
      {
        id: 'audio',
        name: 'Audio & Headphones',
        description: 'Speakers, headphones, and audio equipment'
      },
      {
        id: 'cameras',
        name: 'Cameras & Photography',
        description: 'Digital cameras and photography gear'
      }
    ]
  },
  {
    id: 'grocery',
    name: 'Grocery',
    description: 'Fresh food and pantry essentials',
    subcategories: [
      {
        id: 'fresh',
        name: 'Fresh Produce',
        description: 'Fruits, vegetables, and fresh herbs'
      },
      {
        id: 'dairy',
        name: 'Dairy & Eggs',
        description: 'Milk, cheese, yogurt, and eggs'
      },
      {
        id: 'pantry',
        name: 'Pantry Staples',
        description: 'Canned goods, grains, and baking essentials'
      }
    ]
  },
  {
    id: 'household',
    name: 'Cleaning & Household',
    description: 'Cleaning supplies and home essentials',
    subcategories: [
      {
        id: 'cleaning',
        name: 'Cleaning Supplies',
        description: 'All-purpose cleaners and cleaning tools'
      },
      {
        id: 'laundry',
        name: 'Laundry Care',
        description: 'Detergents and laundry accessories'
      },
      {
        id: 'paper',
        name: 'Paper & Plastic',
        description: 'Paper towels, toilet paper, and disposables'
      }
    ]
  },
  {
    id: 'tools',
    name: 'Tools & Home Improvement',
    description: 'DIY tools and home improvement supplies',
    subcategories: [
      {
        id: 'power-tools',
        name: 'Power Tools',
        description: 'Drills, saws, and power tool accessories'
      },
      {
        id: 'hand-tools',
        name: 'Hand Tools',
        description: 'Hammers, screwdrivers, and wrenches'
      },
      {
        id: 'hardware',
        name: 'Hardware',
        description: 'Nails, screws, and building materials'
      }
    ]
  },
  {
    id: 'office',
    name: 'Office & School Supplies',
    description: 'Office essentials and school supplies',
    subcategories: [
      {
        id: 'writing',
        name: 'Writing Supplies',
        description: 'Pens, pencils, and markers'
      },
      {
        id: 'paper-products',
        name: 'Paper Products',
        description: 'Notebooks, paper, and filing supplies'
      },
      {
        id: 'office-equipment',
        name: 'Office Equipment',
        description: 'Printers, shredders, and office machines'
      }
    ]
  },
  {
    id: 'beauty',
    name: 'Beauty & Personal Care',
    description: 'Beauty products and personal care items',
    subcategories: [
      {
        id: 'skincare',
        name: 'Skincare',
        description: 'Facial care and body care products'
      },
      {
        id: 'haircare',
        name: 'Hair Care',
        description: 'Shampoo, conditioner, and styling products'
      },
      {
        id: 'makeup',
        name: 'Makeup',
        description: 'Cosmetics and beauty tools'
      }
    ]
  },
  {
    id: 'sports',
    name: 'Sports & Outdoors',
    description: 'Sports equipment and outdoor gear',
    subcategories: [
      {
        id: 'exercise',
        name: 'Exercise & Fitness',
        description: 'Workout equipment and accessories'
      },
      {
        id: 'outdoor-recreation',
        name: 'Outdoor Recreation',
        description: 'Camping and hiking gear'
      },
      {
        id: 'sports-equipment',
        name: 'Sports Equipment',
        description: 'Equipment for various sports'
      }
    ]
  },
  {
    id: 'toys',
    name: 'Toys & Games',
    description: 'Toys, games, and entertainment',
    subcategories: [
      {
        id: 'games',
        name: 'Board Games & Puzzles',
        description: 'Family games and puzzles'
      },
      {
        id: 'toys',
        name: 'Toys',
        description: 'Toys for all ages'
      },
      {
        id: 'video-games',
        name: 'Video Games',
        description: 'Gaming consoles and video games'
      }
    ]
  },
  {
    id: 'fashion',
    name: 'Clothing & Fashion',
    description: 'Latest fashion trends and accessories',
    subcategories: [
      {
        id: 'womens',
        name: "Women's Fashion",
        description: "Women's clothing and accessories"
      },
      {
        id: 'mens',
        name: "Men's Fashion",
        description: "Men's clothing and accessories"
      },
      {
        id: 'kids',
        name: "Kids' Fashion",
        description: "Children's clothing and accessories"
      }
    ]
  },
  {
    id: 'automotive',
    name: 'Automotive',
    description: 'Car parts and accessories',
    subcategories: [
      {
        id: 'parts',
        name: 'Replacement Parts',
        description: 'Car parts and components'
      },
      {
        id: 'accessories',
        name: 'Accessories',
        description: 'Car accessories and gadgets'
      },
      {
        id: 'tools',
        name: 'Tools & Equipment',
        description: 'Automotive tools and equipment'
      }
    ]
  },
  {
    id: 'pets',
    name: 'Pet Supplies',
    description: 'Pet food and accessories',
    subcategories: [
      {
        id: 'dog',
        name: 'Dog Supplies',
        description: 'Food and supplies for dogs'
      },
      {
        id: 'cat',
        name: 'Cat Supplies',
        description: 'Food and supplies for cats'
      },
      {
        id: 'other-pets',
        name: 'Other Pets',
        description: 'Supplies for other pets'
      }
    ]
  },
  {
    id: 'books',
    name: 'Books & Media',
    description: 'Books, movies, and music',
    subcategories: [
      {
        id: 'books',
        name: 'Books',
        description: 'Physical and digital books'
      },
      {
        id: 'movies',
        name: 'Movies & TV',
        description: 'Movies and TV shows'
      },
      {
        id: 'music',
        name: 'Music',
        description: 'CDs and vinyl records'
      }
    ]
  }
];

export const mockProducts: Product[] = [
  // Electronics - Smartphones & Accessories
  {
    id: 'phone-1',
    name: 'iPhone 15 Pro Max',
    description: 'Latest iPhone with A17 Pro chip and advanced camera system',
    image: 'https://images.unsplash.com/photo-1696426505729-0ac50e8f8f49?w=800&auto=format&fit=crop&q=80',
    features: ['A17 Pro chip', 'Pro camera system', '6.7" display'],
    rating: 4.8,
    reviewCount: 1256,
    category: 'Electronics',
    subcategory: 'Smartphones & Accessories',
    additionalImages: [],
    retailers: [
      {
        name: 'Apple Store',
        price: 1199.99,
        currency: 'USD',
        url: '#',
        inStock: true,
        shippingCost: 0,
        deliveryDate: 'Get it tomorrow'
      }
    ],
    comments: []
  },
  {
    id: 'phone-2',
    name: 'Samsung Galaxy S24 Ultra',
    description: 'Premium Android smartphone with advanced AI features',
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800&auto=format&fit=crop&q=80',
    features: ['Snapdragon 8 Gen 3', '200MP camera', '6.8" display'],
    rating: 4.7,
    reviewCount: 892,
    category: 'Electronics',
    subcategory: 'Smartphones & Accessories',
    additionalImages: [],
    retailers: [
      {
        name: 'Samsung Store',
        price: 1299.99,
        currency: 'USD',
        url: '#',
        inStock: true,
        shippingCost: 0,
        deliveryDate: 'Get it tomorrow'
      }
    ],
    comments: []
  },

  // Electronics - Computers & Tablets
  {
    id: 'laptop-1',
    name: 'MacBook Pro 16" M3 Max',
    description: 'Most powerful MacBook ever with M3 Max chip',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80',
    features: ['M3 Max chip', 'Liquid Retina XDR display', '48GB RAM'],
    rating: 4.9,
    reviewCount: 456,
    category: 'Electronics',
    subcategory: 'Computers & Tablets',
    additionalImages: [],
    retailers: [
      {
        name: 'Apple Store',
        price: 2499.99,
        currency: 'USD',
        url: '#',
        inStock: true,
        shippingCost: 0,
        deliveryDate: 'Get it tomorrow'
      }
    ],
    comments: []
  },

  // Grocery - Fresh Produce
  {
    id: 'produce-1',
    name: 'Organic Avocados (4 pack)',
    description: 'Fresh, ripe organic avocados',
    image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=800&auto=format&fit=crop&q=80',
    features: ['Organic', 'Non-GMO', 'Fresh picked'],
    rating: 4.5,
    reviewCount: 234,
    category: 'Grocery',
    subcategory: 'Fresh Produce',
    additionalImages: [],
    retailers: [
      {
        name: 'Fresh Market',
        price: 5.99,
        currency: 'USD',
        url: '#',
        inStock: true,
        shippingCost: 0,
        deliveryDate: 'Get it tomorrow'
      }
    ],
    comments: []
  },
  {
    id: 'produce-2',
    name: 'Organic Bananas (bunch)',
    description: 'Sweet and ripe organic bananas',
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=800&auto=format&fit=crop&q=80',
    features: ['Organic', 'Non-GMO', 'Fresh picked'],
    rating: 4.6,
    reviewCount: 189,
    category: 'Grocery',
    subcategory: 'Fresh Produce',
    additionalImages: [],
    retailers: [
      {
        name: 'Fresh Market',
        price: 2.99,
        currency: 'USD',
        url: '#',
        inStock: true,
        shippingCost: 0,
        deliveryDate: 'Get it tomorrow'
      }
    ],
    comments: []
  },

  // Cleaning & Household - Cleaning Supplies
  {
    id: 'cleaning-1',
    name: 'All-Purpose Cleaner Bundle',
    description: 'Multi-surface cleaning solution pack',
    image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?w=800&auto=format&fit=crop&q=80',
    features: ['All-natural', 'Multi-surface', 'Concentrated formula'],
    rating: 4.7,
    reviewCount: 567,
    category: 'Cleaning & Household',
    subcategory: 'Cleaning Supplies',
    additionalImages: [],
    retailers: [
      {
        name: 'CleanCo',
        price: 19.99,
        currency: 'USD',
        url: '#',
        inStock: true,
        shippingCost: 0,
        deliveryDate: 'Get it tomorrow'
      }
    ],
    comments: []
  },

  // Tools & Home Improvement - Power Tools
  {
    id: 'tool-1',
    name: 'DeWalt 20V MAX Drill/Driver Kit',
    description: 'Professional-grade cordless drill kit',
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&auto=format&fit=crop&q=80',
    features: ['20V MAX power', 'Brushless motor', '2 batteries included'],
    rating: 4.8,
    reviewCount: 892,
    category: 'Tools & Home Improvement',
    subcategory: 'Power Tools',
    additionalImages: [],
    retailers: [
      {
        name: 'ToolDepot',
        price: 199.99,
        currency: 'USD',
        url: '#',
        inStock: true,
        shippingCost: 0,
        deliveryDate: 'Get it tomorrow'
      }
    ],
    comments: []
  },

  // Beauty & Personal Care - Skincare
  {
    id: 'skincare-1',
    name: 'Advanced Night Repair Serum',
    description: 'Anti-aging night serum for all skin types',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&auto=format&fit=crop&q=80',
    features: ['Anti-aging', 'Hydrating', 'All skin types'],
    rating: 4.9,
    reviewCount: 1567,
    category: 'Beauty & Personal Care',
    subcategory: 'Skincare',
    additionalImages: [],
    retailers: [
      {
        name: 'BeautyStore',
        price: 75.99,
        currency: 'USD',
        url: '#',
        inStock: true,
        shippingCost: 0,
        deliveryDate: 'Get it tomorrow'
      }
    ],
    comments: []
  },

  // Sports & Outdoors - Exercise & Fitness
  {
    id: 'fitness-1',
    name: 'Premium Yoga Mat Bundle',
    description: 'Non-slip yoga mat with accessories',
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800&auto=format&fit=crop&q=80',
    features: ['Non-slip surface', 'Eco-friendly', 'Includes strap'],
    rating: 4.7,
    reviewCount: 345,
    category: 'Sports & Outdoors',
    subcategory: 'Exercise & Fitness',
    additionalImages: [],
    retailers: [
      {
        name: 'SportsCo',
        price: 49.99,
        currency: 'USD',
        url: '#',
        inStock: true,
        shippingCost: 0,
        deliveryDate: 'Get it tomorrow'
      }
    ],
    comments: []
  }
];

export type { Product, Retailer, Comment, Category };