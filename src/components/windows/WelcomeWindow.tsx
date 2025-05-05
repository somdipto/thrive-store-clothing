
const WelcomeWindow = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">PIXEL CHIC</h1>
      <div className="w-32 h-1 bg-gray-900 mb-6"></div>
      <p className="text-xl text-gray-700 mb-8 max-w-md text-center">
        Welcome to our digital fashion experience. Click the desktop icons to explore our collection.
      </p>
      <div className="grid grid-cols-2 gap-4">
        <button className="bg-gray-900 text-white px-6 py-2 hover:bg-gray-800 transition-colors">
          SHOP NOW
        </button>
        <button className="border border-gray-900 text-gray-900 px-6 py-2 hover:bg-gray-100 transition-colors">
          LOOKBOOK
        </button>
      </div>
    </div>
  );
};

export default WelcomeWindow;
