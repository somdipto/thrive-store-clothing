
import { Button } from '@/components/ui/button';
import { FileText, Link, Wallet } from 'lucide-react';

const NFTClothingWindow = () => {
  return (
    <div className="h-full overflow-auto bg-black text-white">
      {/* Hero section */}
      <div className="p-8 relative flex flex-col justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
          <img 
            src="/lovable-uploads/107cf10d-39fe-4b58-9a56-60e3bfa82564.png" 
            alt="NFT Clothing" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center">
              <FileText className="h-5 w-5 text-black" />
            </div>
            <h2 className="text-2xl font-medium">NFT CLOTHING</h2>
          </div>
          
          <div className="max-w-lg mb-6">
            <h3 className="text-lg text-gray-300">COMING SOON</h3>
            <p className="text-gray-300 mt-2">
              The future of fashion is here. Blockchain-authenticated garments with digital twins for the metaverse.
            </p>
          </div>
          
          <div className="flex gap-4">
            <Button className="bg-white text-black hover:bg-gray-200 rounded-full">
              Join Waitlist
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white/10 rounded-full">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 p-8 gap-6">
        <div className="bg-gray-900 rounded-xl p-6">
          <div className="h-10 w-10 bg-white/10 rounded-lg flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium mb-2">Authenticated Ownership</h3>
          <p className="text-gray-400 text-sm">
            Each physical garment includes an NFC chip linking to its digital certificate on the blockchain.
          </p>
        </div>
        
        <div className="bg-gray-900 rounded-xl p-6">
          <div className="h-10 w-10 bg-white/10 rounded-lg flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
          </div>
          <h3 className="text-lg font-medium mb-2">Digital Twins</h3>
          <p className="text-gray-400 text-sm">
            Wear your physical garments' digital twins in compatible metaverse platforms and games.
          </p>
        </div>
        
        <div className="bg-gray-900 rounded-xl p-6">
          <div className="h-10 w-10 bg-white/10 rounded-lg flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium mb-2">Exclusive Community</h3>
          <p className="text-gray-400 text-sm">
            NFT holders gain access to exclusive events, future drops, and our creator community.
          </p>
        </div>
      </div>
      
      {/* Newsletter signup */}
      <div className="p-8">
        <div className="bg-gray-900 rounded-xl p-6 flex flex-col md:flex-row gap-6 items-center justify-between">
          <div>
            <h3 className="text-xl font-medium mb-2">Get Early Access</h3>
            <p className="text-gray-400">
              Join our waitlist to be notified when our NFT clothing line launches.
            </p>
          </div>
          
          <div className="flex gap-3">
            <input 
              type="email" 
              placeholder="Your email" 
              className="px-4 py-2 rounded-full bg-black text-white border border-gray-800 focus:outline-none focus:ring-1 focus:ring-white"
            />
            <Button className="bg-white text-black hover:bg-gray-200 rounded-full whitespace-nowrap">
              Join Waitlist
            </Button>
          </div>
        </div>
      </div>
      
      {/* Connect wallet CTA */}
      <div className="p-8 pt-0">
        <div className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-xl p-8 text-center">
          <Wallet className="h-12 w-12 mx-auto mb-4 text-white" />
          <h3 className="text-xl font-medium mb-2">Connect Wallet</h3>
          <p className="text-gray-300 mb-6 max-w-md mx-auto">
            Sign up to be notified when our first NFT collection drops. Connect your wallet to claim your spot.
          </p>
          <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8">
            <Link className="h-4 w-4 mr-2" /> Connect Wallet
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NFTClothingWindow;
