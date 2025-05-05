
const LookbookWindow = () => {
  const lookbookItems = [
    { id: 1, title: 'Winter 2025', image: 'placeholder.svg' },
    { id: 2, title: 'Street Tech', image: 'placeholder.svg' },
    { id: 3, title: 'Retro Gaming', image: 'placeholder.svg' },
    { id: 4, title: 'Digital Dreams', image: 'placeholder.svg' },
  ];

  return (
    <div className="h-full overflow-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Lookbook</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {lookbookItems.map(item => (
          <div key={item.id} className="group cursor-pointer">
            <div className="aspect-video bg-gray-200 overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="mt-2 flex justify-between items-center">
              <h3 className="font-medium text-gray-900">{item.title}</h3>
              <button className="text-xs text-gray-700 border-b border-gray-700 hover:text-gray-900">
                VIEW
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LookbookWindow;
