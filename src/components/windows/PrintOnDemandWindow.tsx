
import { Button } from '@/components/ui/button';
import { Printer } from 'lucide-react';

const PrintOnDemandWindow = () => {
  return (
    <div className="h-full overflow-auto py-6 px-8 bg-gradient-to-br from-black to-gray-900 text-white">
      <header className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Printer className="h-8 w-8" />
          <h2 className="text-3xl font-bold">PRINT ON DEMAND</h2>
        </div>
        <div className="h-1 w-40 bg-white mb-4"></div>
        <p className="text-gray-300">Custom designs printed on high-quality garments - as few as one piece.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left column - Services */}
        <div>
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-bold mb-4">Our Print Services</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <div className="h-1 w-1 bg-white rounded-full"></div>
                <span>Direct-to-Garment Printing</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1 w-1 bg-white rounded-full"></div>
                <span>Screen Printing</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1 w-1 bg-white rounded-full"></div>
                <span>Embroidery</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1 w-1 bg-white rounded-full"></div>
                <span>Cut & Sew Custom Pieces</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1 w-1 bg-white rounded-full"></div>
                <span>Fulfillment & Shipping</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">How It Works</h3>
            <ol className="space-y-4">
              <li className="flex gap-3">
                <div className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-white text-black font-bold">1</div>
                <div>
                  <h4 className="font-medium">Upload Your Design</h4>
                  <p className="text-sm text-gray-300">Send us your artwork or collaborate with our designers</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-white text-black font-bold">2</div>
                <div>
                  <h4 className="font-medium">Choose Products</h4>
                  <p className="text-sm text-gray-300">Select garments, sizes, and quantities</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-white text-black font-bold">3</div>
                <div>
                  <h4 className="font-medium">Approve Mockups</h4>
                  <p className="text-sm text-gray-300">We'll send digital mockups before printing</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-white text-black font-bold">4</div>
                <div>
                  <h4 className="font-medium">Production & Delivery</h4>
                  <p className="text-sm text-gray-300">Fast turnaround and worldwide shipping</p>
                </div>
              </li>
            </ol>
          </div>
        </div>

        {/* Right column - Image and CTA */}
        <div className="flex flex-col">
          <div className="relative aspect-square mb-6">
            <img 
              src="/lovable-uploads/3303287f-f97f-449f-8888-8eac77e29055.png" 
              alt="Print on Demand" 
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 rounded-lg"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-2xl font-bold mb-2">CUSTOM MERCH</h3>
              <p className="text-gray-200">For brands, creators, and events</p>
            </div>
          </div>

          <div className="flex flex-col items-center bg-white text-black p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-center">Ready to get started?</h3>
            <p className="text-center mb-6">Request a quote for your custom print project</p>
            <Button className="bg-black text-white hover:bg-gray-800 px-8 py-6">
              REQUEST QUOTE
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintOnDemandWindow;
