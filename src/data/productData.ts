import { Product } from '../interfaces';

// Function to generate a unique ID
const generateId = (category: string, subcategory: string, index: number): string => {
  return `${category.toLowerCase().replace(/\s+/g, '-')}-${subcategory.toLowerCase().replace(/\s+/g, '-')}-${index}`;
};

// Function to generate a random price
const generatePrice = (min: number, max: number): number => {
  return Number((Math.random() * (max - min) + min).toFixed(2));
};

// Function to generate a random review count
const generateReviewCount = (): number => {
  return Math.floor(Math.random() * 10000);
};

// Function to generate a random rating
const generateRating = (): number => {
  return Number((Math.random() * 1.5 + 3.5).toFixed(1));
};

// Function to generate a random delivery date
const generateDeliveryDate = (): string => {
  const options = [
    'Tomorrow by 8 PM',
    'Next-day delivery',
    'Get it by tomorrow',
    'Fast & free shipping',
    'Free delivery',
    'Free delivery by Wednesday'
  ];
  return options[Math.floor(Math.random() * options.length)];
};

// Function to generate retailers for a product
const generateRetailers = (productName: string, basePrice: number): Product['retailers'] => {
  const retailers = [
    { name: 'Amazon', priceFactor: 1.0 },
    { name: 'Walmart', priceFactor: 0.9 },
    { name: 'Best Buy', priceFactor: 1.05 },
    { name: 'Target', priceFactor: 0.95 },
    { name: 'Costco', priceFactor: 0.85 },
    { name: 'eBay', priceFactor: 0.8 },
    { name: 'Newegg', priceFactor: 1.0 },
    { name: 'B&H', priceFactor: 1.1 },
    { name: 'Home Depot', priceFactor: 1.0 },
    { name: 'Lowe\'s', priceFactor: 0.98 }
  ];

  // Select 3-5 retailers randomly
  const selectedRetailerCount = Math.floor(Math.random() * 3) + 3;
  const shuffledRetailers = [...retailers].sort(() => 0.5 - Math.random());
  const selectedRetailers = shuffledRetailers.slice(0, selectedRetailerCount);

  return selectedRetailers.map(retailer => {
    const exactPrice = basePrice * retailer.priceFactor;
    const price = Number(exactPrice.toFixed(2));
    return {
      name: retailer.name,
      price,
      currency: 'USD',
      url: '#',
      inStock: Math.random() > 0.1, // 90% chance of being in stock
      shippingCost: price > 35 ? 0 : 4.99,
      deliveryDate: generateDeliveryDate()
    };
  });
};

// Function to generate products for a specific category and subcategory
const generateCategoryProducts = (
  category: string,
  subcategory: string,
  productNames: string[],
  baseImageUrl: string,
  features: string[],
  priceRange: { min: number; max: number }
): Product[] => {
  return productNames.map((name, index) => {
    const basePrice = generatePrice(priceRange.min, priceRange.max);
    const id = generateId(category, subcategory, index + 1);
    
    // Ensure consistent image URLs that work without breaking
    const image = `https://source.unsplash.com/featured/?${encodeURIComponent(name.toLowerCase().split(' ')[0])}&sig=${index}`;

    return {
      id,
      name,
      description: `High-quality ${name.toLowerCase()} with premium features and exceptional performance.`,
      image,
      features: features.slice(0, 3 + Math.floor(Math.random() * 3)), // 3-5 random features
      rating: generateRating(),
      reviewCount: generateReviewCount(),
      category,
      subcategory,
      additionalImages: [],
      retailers: generateRetailers(name, basePrice),
      comments: []
    };
  });
};

// Electronics Category
const electronicsProducts: Product[] = [
  // Smartphones & Accessories
  ...generateCategoryProducts(
    'Electronics',
    'Smartphones & Accessories',
    [
      'iPhone 15 Pro Max',
      'Samsung Galaxy S24 Ultra',
      'Google Pixel 8 Pro',
      'OnePlus 11',
      'Xiaomi 13',
      'iPhone SE (2023)',
      'Wireless Charging Stand 15W',
      'Magnetic Phone Holder for Car',
      'USB-C Fast Charging Cable (10ft)',
      'Tempered Glass Screen Protector'
    ],
    'https://source.unsplash.com/random/?smartphone&sig=',
    [
      'Fast processor',
      'High-resolution display',
      'Long battery life',
      'Waterproof design',
      'Wireless charging',
      'Face recognition',
      'Fingerprint sensor',
      'Advanced camera system',
      'Fast charging',
      'Large storage capacity'
    ],
    { min: 399, max: 1499 }
  ),
  
  // Computers & Tablets
  ...generateCategoryProducts(
    'Electronics',
    'Computers & Tablets',
    [
      'MacBook Pro 16" M3 Max',
      'Dell XPS 15',
      'Lenovo ThinkPad X1 Carbon',
      'HP Spectre x360',
      'ASUS ROG Zephyrus G14',
      'iPad Pro 12.9"',
      'Samsung Galaxy Tab S9 Ultra',
      'Microsoft Surface Pro 9',
      'Laptop Cooling Pad',
      'USB-C Hub Adapter'
    ],
    'https://source.unsplash.com/random/?laptop&sig=',
    [
      'High-performance CPU',
      'Dedicated graphics card',
      'Fast SSD storage',
      'High-resolution display',
      'Long battery life',
      'Premium build quality',
      'Backlit keyboard',
      'Thunderbolt ports',
      'Lightweight design',
      'Touch screen'
    ],
    { min: 299, max: 2999 }
  ),
  
  // Audio & Headphones
  ...generateCategoryProducts(
    'Electronics',
    'Audio & Headphones',
    [
      'Sony WH-1000XM5',
      'Apple AirPods Pro 2',
      'Bose QuietComfort Ultra',
      'Sennheiser Momentum 4',
      'Bowers & Wilkins PX8',
      'Sony WF-1000XM5',
      'JBL Flip 6',
      'Sonos Roam',
      'Beats Fit Pro',
      'Headphone Stand'
    ],
    'https://source.unsplash.com/random/?headphones&sig=',
    [
      'Active noise cancellation',
      'Long battery life',
      'Premium sound quality',
      'Comfortable fit',
      'Bluetooth connectivity',
      'Water resistance',
      'Built-in microphone',
      'Touch controls',
      'Fast charging',
      'Multipoint connection'
    ],
    { min: 49, max: 499 }
  ),
  
  // Cameras & Photography
  ...generateCategoryProducts(
    'Electronics',
    'Cameras & Photography',
    [
      'Sony Alpha a7 IV',
      'Canon EOS R6 Mark II',
      'Fujifilm X-T5',
      'Nikon Z8',
      'Sony ZV-E10',
      'GoPro Hero 12 Black',
      'Camera Tripod',
      'Camera Backpack',
      'SD Card 128GB',
      'Ring Light'
    ],
    'https://source.unsplash.com/random/?camera&sig=',
    [
      'High-resolution sensor',
      'Fast autofocus',
      'In-body stabilization',
      'High dynamic range',
      '4K video recording',
      'Weather sealing',
      'Tilting LCD screen',
      'Long battery life',
      'Bluetooth and Wi-Fi',
      'Dual memory card slots'
    ],
    { min: 299, max: 3999 }
  )
];

// Grocery Category
const groceryProducts: Product[] = [
  // Fresh Produce
  ...generateCategoryProducts(
    'Grocery',
    'Fresh Produce',
    [
      'Organic Avocados (4 pack)',
      'Organic Bananas (bunch)',
      'Organic Apples (5 lb bag)',
      'Organic Blueberries (1 pint)',
      'Organic Strawberries (16 oz)',
      'Organic Baby Spinach (16 oz)',
      'Organic Kale (bunch)',
      'Organic Roma Tomatoes (5 pack)',
      'Organic Bell Peppers (3 pack)',
      'Organic Carrots (2 lb bag)'
    ],
    'https://source.unsplash.com/random/?produce&sig=',
    [
      'Organic certified',
      'Non-GMO',
      'Locally grown',
      'Pesticide-free',
      'Sustainably farmed',
      'Fresh picked',
      'High in vitamins',
      'Premium quality',
      'Farm-to-table',
      'Seasonal harvest'
    ],
    { min: 1.99, max: 12.99 }
  ),
  
  // Dairy & Eggs
  ...generateCategoryProducts(
    'Grocery',
    'Dairy & Eggs',
    [
      'Organic Whole Milk (1 gallon)',
      'Organic 2% Milk (half gallon)',
      'Organic Almond Milk (64 oz)',
      'Organic Oat Milk (32 oz)',
      'Organic Greek Yogurt (32 oz)',
      'Organic Cheddar Cheese (8 oz)',
      'Organic Mozzarella Cheese (16 oz)',
      'Organic Large Brown Eggs (dozen)',
      'Organic Free-Range Eggs (18 pack)',
      'Organic Butter (16 oz)'
    ],
    'https://source.unsplash.com/random/?dairy&sig=',
    [
      'Organic certified',
      'Hormone-free',
      'Antibiotic-free',
      'Grass-fed',
      'Pasture-raised',
      'Cage-free',
      'Humane certified',
      'Rich in calcium',
      'High protein',
      'Probiotic cultures'
    ],
    { min: 2.49, max: 9.99 }
  ),
  
  // Pantry Staples
  ...generateCategoryProducts(
    'Grocery',
    'Pantry Staples',
    [
      'Organic Extra Virgin Olive Oil (16.9 oz)',
      'Organic Coconut Oil (16 oz)',
      'Organic Brown Rice (2 lb bag)',
      'Organic Quinoa (16 oz)',
      'Organic Black Beans (15 oz)',
      'Organic Chickpeas (15 oz)',
      'Organic Whole Wheat Pasta (16 oz)',
      'Organic Tomato Sauce (24 oz)',
      'Organic Peanut Butter (16 oz)',
      'Organic Honey (16 oz)'
    ],
    'https://source.unsplash.com/random/?pantry&sig=',
    [
      'Organic certified',
      'Non-GMO',
      'No artificial ingredients',
      'Sustainably sourced',
      'Gluten-free',
      'No added sugar',
      'High in fiber',
      'BPA-free packaging',
      'Fair trade certified',
      'Long shelf life'
    ],
    { min: 2.99, max: 14.99 }
  )
];

// Cleaning & Household Category
const householdProducts: Product[] = [
  // Cleaning Supplies
  ...generateCategoryProducts(
    'Cleaning & Household',
    'Cleaning Supplies',
    [
      'All-Purpose Cleaner Bundle',
      'Eco-Friendly Laundry Detergent (64 loads)',
      'Natural Dish Soap (16 oz)',
      'Biodegradable Disinfecting Wipes (75 count)',
      'Plant-Based Glass Cleaner (26 oz)',
      'Natural Floor Cleaner Concentrate (32 oz)',
      'Eco-Friendly Toilet Bowl Cleaner (24 oz)',
      'Microfiber Cleaning Towels (24 pack)',
      'Scrub Sponges (6 pack)',
      'Dish Scrubber Brush'
    ],
    'https://source.unsplash.com/random/?cleaning&sig=',
    [
      'Eco-friendly',
      'Biodegradable',
      'Plant-based',
      'Non-toxic',
      'No harsh chemicals',
      'Cruelty-free',
      'Concentrated formula',
      'Multi-surface',
      'Streak-free',
      'Pleasant scent'
    ],
    { min: 4.99, max: 24.99 }
  ),
  
  // Laundry Care
  ...generateCategoryProducts(
    'Cleaning & Household',
    'Laundry Care',
    [
      'Plant-Based Laundry Detergent (96 loads)',
      'Eco-Friendly Fabric Softener (80 loads)',
      'Wool Dryer Balls (6 pack)',
      'Stain Remover Spray (22 oz)',
      'Natural Bleach Alternative (32 oz)',
      'Laundry Detergent Pods (60 count)',
      'Wrinkle Release Spray (16 oz)',
      'Mesh Laundry Bags (5 pack)',
      'Foldable Clothes Drying Rack',
      'Dryer Sheets (120 count)'
    ],
    'https://source.unsplash.com/random/?laundry&sig=',
    [
      'Plant-based',
      'Eco-friendly',
      'Biodegradable',
      'Hypoallergenic',
      'No synthetic fragrances',
      'Stain-fighting',
      'Color-safe',
      'Concentrated formula',
      'Septic-safe',
      'Energy-efficient'
    ],
    { min: 5.99, max: 29.99 }
  ),
  
  // Paper & Plastic
  ...generateCategoryProducts(
    'Cleaning & Household',
    'Paper & Plastic',
    [
      'Bamboo Paper Towels (8 rolls)',
      'Recycled Toilet Paper (12 rolls)',
      'Bamboo Facial Tissues (6 boxes)',
      'Compostable Trash Bags (13 gallon, 45 count)',
      'Recycled Paper Napkins (250 count)',
      'Recycled Aluminum Foil (75 sq ft)',
      'Beeswax Food Wraps (3 pack)',
      'Reusable Silicone Food Storage Bags (5 pack)',
      'Compostable Plates (50 count)',
      'Biodegradable Straws (200 count)'
    ],
    'https://source.unsplash.com/random/?paper&sig=',
    [
      'Biodegradable',
      'Compostable',
      'Recycled materials',
      'Plastic-free',
      'Tree-free',
      'Sustainable forestry',
      'Chlorine-free',
      'BPA-free',
      'Durable',
      'Eco-friendly'
    ],
    { min: 3.99, max: 19.99 }
  )
];

// Home & Kitchen Category
const homeKitchenProducts: Product[] = [
  // Kitchen Appliances
  ...generateCategoryProducts(
    'Home & Kitchen',
    'Kitchen Appliances',
    [
      'High-Performance Blender (1500W)',
      'Programmable Slow Cooker (6 quart)',
      'Digital Air Fryer (5.8 quart)',
      'Stand Mixer with Attachments (5 quart)',
      'Electric Pressure Cooker (8 quart)',
      'Toaster Oven with Air Fry Function',
      'Electric Kettle (1.7 liter)',
      'Food Processor (12 cup)',
      'Espresso Machine with Milk Frother',
      'Smart Countertop Convection Oven'
    ],
    'https://source.unsplash.com/random/?appliance&sig=',
    [
      'Energy efficient',
      'Digital controls',
      'Stainless steel finish',
      'Multiple settings',
      'Easy to clean',
      'Dishwasher-safe parts',
      'Precise temperature control',
      'Timer function',
      'Compact design',
      'Safety features'
    ],
    { min: 49.99, max: 399.99 }
  ),
  
  // Cookware & Bakeware
  ...generateCategoryProducts(
    'Home & Kitchen',
    'Cookware & Bakeware',
    [
      'Stainless Steel Cookware Set (10 piece)',
      'Cast Iron Skillet (12 inch)',
      'Non-Stick Frying Pan Set (8/10/12 inch)',
      'Dutch Oven with Lid (6 quart)',
      'Silicone Baking Mat Set (3 pack)',
      'Ceramic Baking Dish Set (3 piece)',
      'Muffin Pan (12 cup)',
      'Bread Loaf Pan (9x5 inch)',
      'Cookie Sheet Set (3 pack)',
      'Glass Mixing Bowl Set (3 piece)'
    ],
    'https://source.unsplash.com/random/?cookware&sig=',
    [
      'Dishwasher safe',
      'Oven safe',
      'PFOA-free',
      'Non-stick coating',
      'Even heat distribution',
      'Durable construction',
      'Ergonomic handles',
      'Tempered glass lids',
      'Stackable design',
      'Lifetime warranty'
    ],
    { min: 19.99, max: 249.99 }
  ),
  
  // Home Décor
  ...generateCategoryProducts(
    'Home & Kitchen',
    'Home Décor',
    [
      'Decorative Throw Pillow Covers (Set of 4)',
      'Handwoven Throw Blanket',
      'LED String Lights (33 ft)',
      'Scented Soy Candle Gift Set (3 pack)',
      'Floating Wall Shelves (Set of 3)',
      'Framed Wall Art Print (24x36 inch)',
      'Macramé Wall Hanging',
      'Ceramic Vase Set (3 piece)',
      'Artificial Potted Plant',
      'Moroccan Area Rug (5x8 ft)'
    ],
    'https://source.unsplash.com/random/?decor&sig=',
    [
      'Handcrafted',
      'Premium materials',
      'Modern design',
      'Versatile style',
      'Easy to install',
      'Eco-friendly',
      'Unique patterns',
      'Coordinating pieces',
      'Durable construction',
      'Easy to clean'
    ],
    { min: 14.99, max: 199.99 }
  )
];

// Combine all products
export const allProducts: Product[] = [
  ...electronicsProducts,
  ...groceryProducts,
  ...householdProducts,
  ...homeKitchenProducts
];

// Export by category
export const productsByCategory = {
  Electronics: electronicsProducts,
  Grocery: groceryProducts,
  'Cleaning & Household': householdProducts,
  'Home & Kitchen': homeKitchenProducts
};

export default allProducts;