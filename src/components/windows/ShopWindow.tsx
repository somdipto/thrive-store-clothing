
const ShopWindow = () => {
  const products = [
    { id: 1, name: 'Pixel T-Shirt', price: 29.99, image: 'placeholder.svg' },
    { id: 2, name: 'Retro Hoodie', price: 59.99, image: 'placeholder.svg' },
    { id: 3, name: 'Digital Jeans', price: 79.99, image: 'placeholder.svg' },
    { id: 4, name: 'Code Jacket', price: 99.99, image: 'placeholder.svg' },
    { id: 5, name: 'Binary Beanie', price: 19.99, image: 'placeholder.svg' },
    { id: 6, name: 'Vaporwave Shirt', price: 34.99, image: 'placeholder.svg' },
  ];

  return (
    <div className="h-full overflow-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Shop Collection</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="border border-gray-200 p-4 hover:shadow-md transition">
            <div className="aspect-square bg-gray-100 flex items-center justify-center mb-3">
              <img src={product.image} alt={product.name} className="h-32 w-32" />
            </div>
            <h3 className="font-medium text-gray-900">{product.name}</h3>
            <div className="flex justify-between items-center mt-2">
              <span className="text-gray-800">${product.price}</span>
              <button className="bg-gray-900 text-white text-xs px-3 py-1 hover:bg-gray-800">
                ADD TO CART
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopWindow;
