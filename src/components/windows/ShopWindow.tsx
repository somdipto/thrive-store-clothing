
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

const ShopWindow = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const products = [
    { 
      id: 1, 
      name: 'THRIVE Oversized Tee', 
      price: 59.99, 
      image: '/lovable-uploads/3303287f-f97f-449f-8888-8eac77e29055.png',
      tags: ['Featured', 'New arrival']
    },
    { 
      id: 2, 
      name: 'Digital Dreams Hoodie', 
      price: 89.99, 
      image: '/placeholder.svg',
      tags: ['Limited edition']
    },
    { 
      id: 3, 
      name: 'Metaverse Jacket', 
      price: 129.99, 
      image: '/placeholder.svg',
      tags: ['Web3']
    },
    { 
      id: 4, 
      name: 'Pixel Pocket Tee', 
      price: 49.99, 
      image: '/placeholder.svg',
      tags: ['Bestseller']
    },
    { 
      id: 5, 
      name: 'Crypto Cargo Pants', 
      price: 79.99, 
      image: '/placeholder.svg',
      tags: ['New arrival']
    },
    { 
      id: 6, 
      name: 'NFT Pattern Shirt', 
      price: 69.99, 
      image: '/placeholder.svg',
      tags: ['Exclusive']
    },
  ];

  return (
    <div className="h-full overflow-auto py-4 px-6 bg-black text-white">
      {/* Header */}
      <header className="mb-8 flex justify-between items-center">
        <div>
          <h2 className="text-4xl font-bold text-white mb-2">SHOP COLLECTION</h2>
          <div className="h-1 w-32 bg-white"></div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-300">6 products</span>
          <Button variant="outline" size="icon" className="rounded-full border-gray-700 text-white hover:bg-gray-800">
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </div>
      </header>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(product => (
          <div 
            key={product.id} 
            className="group cursor-pointer relative"
            onMouseEnter={() => setHoveredProduct(product.id)}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            <div className="aspect-[4/5] bg-gray-900 overflow-hidden mb-3 relative">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className={`absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-4 transform transition-transform duration-300 ${hoveredProduct === product.id ? 'translate-y-0' : 'translate-y-full'}`}>
                <Button className="w-full bg-white text-black hover:bg-gray-200 font-medium">
                  ADD TO CART
                </Button>
              </div>
            </div>
            <div className="flex gap-2 mb-2">
              {product.tags.map((tag, i) => (
                <span key={i} className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded-sm">
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="font-medium text-white text-lg">{product.name}</h3>
            <div className="flex justify-between items-center mt-1">
              <span className="text-white font-bold">${product.price}</span>
              <Button variant="ghost" className="text-xs text-gray-400 hover:text-white p-0">
                Details →
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopWindow;
