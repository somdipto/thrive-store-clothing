
import { Button } from '@/components/ui/button';
import { ShoppingCart, Phone } from 'lucide-react';

const WelcomeWindow = () => {
  const openShopWindow = () => {
    const shopWindowButton = document.getElementById('shop-window-button');
    if (shopWindowButton) {
      shopWindowButton.click();
    }
  };

  const openContactWindow = () => {
    const contactWindowButton = document.getElementById('contact-window-button');
    if (contactWindowButton) {
      contactWindowButton.click();
    }
  };

  return (
    <div className="h-full flex flex-col items-center justify-center bg-white">
      <div className="text-center max-w-md px-6">
        <img src="/lovable-uploads/7b41f825-fde2-4b14-9a26-12f532c4be3f.png" alt="THRIVE Logo" className="h-16 mx-auto mb-6" />
        <h1 className="mb-4 text-zinc-950 text-3xl font-bold tracking-tight">WELCOME TO THRIVE</h1>
        
        <div className="my-8 flex justify-center">
          <div className="h-px w-24 bg-gray-200"></div>
        </div>
        
        <p className="text-lg text-gray-600 mb-8">For the past two years, we've been on a journey designing unique clothing to express your individual style. Experience fashion redefined with premium quality and cutting-edge designs.</p>
        
        <div className="grid grid-cols-2 gap-4">
          <Button 
            variant="default" 
            className="bg-black hover:bg-gray-800 text-white font-medium py-2 px-8 rounded-full flex items-center justify-center gap-2"
            onClick={openShopWindow}
          >
            <ShoppingCart className="h-4 w-4" />
            SHOP NOW
          </Button>
          <Button 
            variant="outline" 
            className="border border-black text-black hover:bg-gray-100 font-medium py-2 px-8 rounded-full flex items-center justify-center gap-2"
            onClick={openContactWindow}
          >
            <Phone className="h-4 w-4" />
            CONTACT
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeWindow;
