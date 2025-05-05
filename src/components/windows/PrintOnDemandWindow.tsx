
import { Button } from '@/components/ui/button';
import { Printer, Check, Image, Package } from 'lucide-react';

const PrintOnDemandWindow = () => {
  return (
    <div className="h-full overflow-auto py-6 px-8 bg-white text-gray-900">
      <header className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-8 w-8 bg-black rounded-lg flex items-center justify-center">
            <Printer className="h-5 w-5 text-white" />
          </div>
          <h2 className="text-xl font-medium">Print On Demand</h2>
        </div>
        <p className="text-gray-500 text-sm">Custom designs printed on high-quality garments - as few as one piece.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Hero section */}
        <div className="lg:col-span-2 bg-gray-50 rounded-xl overflow-hidden">
          <div className="relative">
            <img 
              src="/lovable-uploads/f3c70a62-f8fa-46ac-a4a0-004e245c385e.png" 
              alt="Print on Demand" 
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
            <div className="absolute bottom-4 left-6 text-white">
              <h3 className="text-xl font-medium">CUSTOM MERCH</h3>
              <p className="text-sm">Design your own fashion line</p>
            </div>
          </div>
          
          <div className="p-6">
            <h3 className="text-lg font-medium mb-4">Our Process</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
                  <span className="text-sm font-medium">1</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Design Upload</h4>
                  <p className="text-sm text-gray-600 mt-1">Upload your artwork or work with our design team to create something unique.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
                  <span className="text-sm font-medium">2</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Product Selection</h4>
                  <p className="text-sm text-gray-600 mt-1">Choose from our premium garment selection - tees, hoodies, hats, and more.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
                  <span className="text-sm font-medium">3</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Production</h4>
                  <p className="text-sm text-gray-600 mt-1">We handle printing, quality control, and inventory management.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
                  <span className="text-sm font-medium">4</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Shipping & Fulfillment</h4>
                  <p className="text-sm text-gray-600 mt-1">We ship directly to your customers with your custom packaging.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <Button className="bg-black hover:bg-gray-800 text-white rounded-full">
                Start Your Custom Order
              </Button>
            </div>
          </div>
        </div>
        
        {/* Services & CTA */}
        <div className="space-y-6">
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-medium mb-4">Print Services</h3>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600" />
                <span className="text-gray-700">Direct-to-Garment (DTG)</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600" />
                <span className="text-gray-700">Screen Printing</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600" />
                <span className="text-gray-700">Embroidery</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600" />
                <span className="text-gray-700">All-Over Print</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600" />
                <span className="text-gray-700">Cut & Sew Custom Pieces</span>
              </div>
            </div>
          </div>
          
          <div className="bg-black text-white rounded-xl p-6">
            <div className="flex items-center justify-center mb-4">
              <img 
                src="/lovable-uploads/7b41f825-fde2-4b14-9a26-12f532c4be3f.png" 
                alt="PIXEL CHIC Logo" 
                className="h-10 w-10"
              />
            </div>
            <h3 className="text-lg font-medium text-center mb-2">Ready to launch your brand?</h3>
            <p className="text-gray-300 text-sm text-center mb-4">We've helped hundreds of creators bring their vision to life</p>
            <Button variant="outline" className="w-full border-white text-white hover:bg-white/10 rounded-full">
              Request a Quote
            </Button>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-medium mb-2">No Minimums</h3>
            <p className="text-gray-600 text-sm mb-0">Order as few as one piece. Perfect for testing designs or creating limited exclusives.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintOnDemandWindow;
