import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Tag, Filter, ChevronDown } from 'lucide-react';
const ShopWindow = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const products = [{
    id: 1,
    name: 'PIXEL CHIC Oversized Tee',
    price: 59.99,
    image: '/lovable-uploads/3303287f-f97f-449f-8888-8eac77e29055.png',
    tags: ['Featured', 'New arrival'],
    category: 'Tops'
  }, {
    id: 2,
    name: 'Digital Dreams Hoodie',
    price: 89.99,
    image: '/lovable-uploads/f3c70a62-f8fa-46ac-a4a0-004e245c385e.png',
    tags: ['Limited edition'],
    category: 'Tops'
  }, {
    id: 3,
    name: 'Metaverse Jacket',
    price: 129.99,
    image: '/lovable-uploads/107cf10d-39fe-4b58-9a56-60e3bfa82564.png',
    tags: ['Web3'],
    category: 'Outerwear'
  }, {
    id: 4,
    name: 'Pixel Pocket Tee',
    price: 49.99,
    image: '/lovable-uploads/3303287f-f97f-449f-8888-8eac77e29055.png',
    tags: ['Bestseller'],
    category: 'Tops'
  }, {
    id: 5,
    name: 'Crypto Cargo Pants',
    price: 79.99,
    image: '/lovable-uploads/f3c70a62-f8fa-46ac-a4a0-004e245c385e.png',
    tags: ['New arrival'],
    category: 'Bottoms'
  }, {
    id: 6,
    name: 'NFT Pattern Shirt',
    price: 69.99,
    image: '/lovable-uploads/107cf10d-39fe-4b58-9a56-60e3bfa82564.png',
    tags: ['Exclusive'],
    category: 'Tops'
  }];
  const filteredProducts = selectedCategory === 'All' ? products : products.filter(product => product.category === selectedCategory);
  const categories = ['All', 'Tops', 'Bottoms', 'Outerwear', 'Accessories'];
  return <div className="h-full overflow-auto py-6 px-8 bg-white text-black">
      {/* Header with Mac-like design */}
      <header className="mb-8 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-medium text-gray-900">THR!VE  Store</h2>
          <p className="text-gray-500 text-sm mt-1">Discover our trending fashion pieces</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="rounded-full border-gray-300 text-gray-700 hover:bg-gray-100 flex gap-2 items-center">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </Button>
          <Button variant="outline" size="icon" className="rounded-full border-gray-300 text-gray-700 hover:bg-gray-100">
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </header>

      {/* Categories */}
      <div className="flex overflow-x-auto mb-6 pb-2 gap-2 scrollbar-none">
        {categories.map(category => <Button key={category} variant={selectedCategory === category ? "default" : "outline"} className={selectedCategory === category ? "rounded-full bg-black text-white hover:bg-gray-800" : "rounded-full border-gray-300 text-gray-700 hover:bg-gray-100"} onClick={() => setSelectedCategory(category)} size="sm">
            {category}
          </Button>)}
      </div>

      {/* Featured Product */}
      <div className="relative aspect-[21/9] bg-gray-100 overflow-hidden rounded-xl mb-8">
        <img src="/lovable-uploads/f3c70a62-f8fa-46ac-a4a0-004e245c385e.png" alt="Featured Collection" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex flex-col justify-center p-8">
          <span className="text-sm font-medium text-white/80 mb-2">Featured Collection</span>
          <h3 className="text-3xl font-medium text-white mb-3">Web3 Fashion</h3>
          <p className="text-white/90 max-w-md mb-6">Clothing for the digital age. Limited edition pieces with blockchain authentication.</p>
          <Button className="w-fit bg-white text-black hover:bg-gray-200 font-medium rounded-full">
            Shop Collection
          </Button>
        </div>
      </div>

      {/* Products Grid with Mac-like design */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProducts.map(product => <div key={product.id} className="group cursor-pointer" onMouseEnter={() => setHoveredProduct(product.id)} onMouseLeave={() => setHoveredProduct(null)}>
            <div className="aspect-[3/4] bg-gray-100 overflow-hidden rounded-lg mb-3 relative">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className={`absolute bottom-0 left-0 right-0 bg-white p-4 transform transition-all duration-300 ${hoveredProduct === product.id ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                <Button className="w-full bg-black text-white hover:bg-gray-800 font-medium rounded-full">
                  Add to Cart
                </Button>
              </div>
            </div>
            <div className="flex gap-2 mb-2">
              {product.tags.map((tag, i) => <span key={i} className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full">
                  {tag}
                </span>)}
            </div>
            <h3 className="font-medium text-gray-900">{product.name}</h3>
            <div className="flex justify-between items-center mt-1">
              <span className="text-gray-900 font-medium">${product.price}</span>
              <Button variant="ghost" className="text-xs text-gray-500 hover:text-gray-900 p-0">
                Details →
              </Button>
            </div>
          </div>)}
      </div>
    </div>;
};
export default ShopWindow;