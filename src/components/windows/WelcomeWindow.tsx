
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const WelcomeWindow = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center bg-white">
      <div className="text-center max-w-md">
        <img 
          src="/lovable-uploads/7b41f825-fde2-4b14-9a26-12f532c4be3f.png" 
          alt="THRIVE Logo" 
          className="h-16 mx-auto mb-6" 
        />
        <h1 className="text-3xl font-medium mb-4 text-gray-900">Welcome to PIXEL CHIC</h1>
        
        <div className="my-8 flex justify-center">
          <img 
            src="/lovable-uploads/107cf10d-39fe-4b58-9a56-60e3bfa82564.png" 
            alt="Brand Featured" 
            className="w-64 h-64 object-cover rounded-lg shadow-md" 
          />
        </div>
        
        <p className="text-lg text-gray-600 mb-8">
          For the past two years, I've been on a journey designing clothes to sparkle vision across the world with unique creations across the world with PIXEL CHIC clothing. Like a digital experience in a new kind of web3 fashion.
        </p>
        
        <div className="grid grid-cols-2 gap-4">
          <Button 
            variant="default" 
            className="bg-black hover:bg-gray-800 text-white font-medium py-2 px-8 rounded-md"
          >
            SHOP NOW
          </Button>
          <Button
            variant="outline"
            className="border border-black text-black hover:bg-gray-200 font-medium py-2 px-8 rounded-md"
          >
            LOOKBOOK
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeWindow;
