
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const WelcomeWindow = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center bg-gray-100">
      <div className="text-center max-w-md">
        <img 
          src="/lovable-uploads/7b41f825-fde2-4b14-9a26-12f532c4be3f.png" 
          alt="THRIVE Logo" 
          className="h-16 mx-auto mb-6" 
        />
        <h1 className="text-4xl font-bold mb-4 text-gray-900 tracking-tight">PIXEL CHIC</h1>
        <div className="w-32 h-1 bg-gray-900 mx-auto mb-6"></div>
        
        <p className="text-xl text-gray-700 mb-8">
          Welcome to our web3 fashion experience. Click the desktop icons to explore our next-gen clothing collection.
        </p>
        
        <div className="grid grid-cols-2 gap-4">
          <Button 
            variant="default" 
            className="bg-black hover:bg-gray-800 text-white font-medium py-2 px-8"
          >
            SHOP NOW
          </Button>
          <Button
            variant="outline"
            className="border border-black text-black hover:bg-gray-200 font-medium py-2 px-8"
          >
            LOOKBOOK
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeWindow;
