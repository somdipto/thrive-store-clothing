
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const NFTClothingWindow = () => {
  const nftCollections = [
    {
      id: 1,
      name: "PIXEL REBELS",
      description: "Limited edition physical tees with embedded NFTs that unlock exclusive metaverse wearables",
      image: "/placeholder.svg",
      price: "0.25 ETH",
      available: 24,
      total: 100
    },
    {
      id: 2,
      name: "DIGITAL COUTURE",
      description: "High fashion pieces that exist in both physical and digital realms, authenticated on blockchain",
      image: "/placeholder.svg",
      price: "0.4 ETH",
      available: 7,
      total: 50
    },
    {
      id: 3,
      name: "META STREETWEAR",
      description: "Streetwear essentials with AR capabilities, scan to see animations come alive",
      image: "/placeholder.svg",
      price: "0.15 ETH",
      available: 31,
      total: 75
    },
  ];

  return (
    <div className="h-full overflow-auto bg-gray-100 text-black">
      {/* Hero section */}
      <div className="relative h-60 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10"></div>
        <img 
          src="/placeholder.svg" 
          alt="NFT Clothing" 
          className="absolute w-full h-full object-cover opacity-50"
        />
        <div className="relative z-10 h-full flex flex-col justify-center px-8">
          <h2 className="text-4xl font-bold text-white">NFT CLOTHING</h2>
          <div className="h-1 w-24 bg-white my-4"></div>
          <p className="text-gray-300 max-w-md">
            Phygital fashion pieces with blockchain verification. 
            Own the physical garment and its digital twin.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="p-8">
        {/* What is NFT Clothing */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-4">What is NFT Clothing?</h3>
          <p className="text-gray-700 mb-6">
            Our NFT clothing collection merges physical garments with digital ownership on the blockchain.
            Each piece comes with a unique NFT that proves authenticity, grants digital wearables for the metaverse,
            and provides exclusive access to future drops and events.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-10 w-10 bg-black text-white flex items-center justify-center font-bold rounded-full mb-4">1</div>
              <h4 className="font-bold mb-2">Authenticated Ownership</h4>
              <p className="text-sm text-gray-600">Each physical piece is linked to an NFT on the Ethereum blockchain, providing proof of authenticity and ownership</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-10 w-10 bg-black text-white flex items-center justify-center font-bold rounded-full mb-4">2</div>
              <h4 className="font-bold mb-2">Digital Twins</h4>
              <p className="text-sm text-gray-600">Your purchase includes digital wearables for use across supported metaverse platforms</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-10 w-10 bg-black text-white flex items-center justify-center font-bold rounded-full mb-4">3</div>
              <h4 className="font-bold mb-2">Community Access</h4>
              <p className="text-sm text-gray-600">NFT holders gain access to exclusive events, future drops, and our creator community</p>
            </div>
          </div>
        </div>

        {/* Collections Carousel */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Featured Collections</h3>
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {nftCollections.map((collection) => (
                <CarouselItem key={collection.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm h-full">
                    <div className="aspect-square bg-gray-200 relative">
                      <img 
                        src={collection.image} 
                        alt={collection.name} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
                        {collection.available}/{collection.total}
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold text-lg">{collection.name}</h4>
                      <p className="text-sm text-gray-600 line-clamp-2 mb-3">{collection.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="font-mono font-bold">{collection.price}</span>
                        <Button variant="outline" className="text-xs border-black hover:bg-black hover:text-white">
                          View Collection
                        </Button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>

        {/* Connect Wallet CTA */}
        <div className="bg-black text-white p-8 rounded-lg flex flex-col md:flex-row items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-2">Ready to collect?</h3>
            <p className="text-gray-300 max-w-md">Connect your wallet to purchase our NFT clothing pieces or view your collection</p>
          </div>
          <Button className="mt-4 md:mt-0 bg-white text-black hover:bg-gray-200">
            CONNECT WALLET
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NFTClothingWindow;
