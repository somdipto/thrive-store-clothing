
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Printer, Check, Image, Upload, Send } from 'lucide-react';
import { toast } from "sonner";

const PrintOnDemandWindow = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [designName, setDesignName] = useState('');
  const [designDescription, setDesignDescription] = useState('');
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) {
      toast.error('Please select a design file');
      return;
    }
    
    const phoneNumber = '917644894003'; // WhatsApp number format
    const message = encodeURIComponent(
      `Hello! I'd like to place a print-on-demand order.\n\nDesign Name: ${designName}\n\nDescription: ${designDescription}\n\nI've uploaded my design and would like to discuss further details.`
    );
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    
    toast.success('Redirecting to WhatsApp to discuss your design!');
  };
  
  const resetForm = () => {
    setSelectedFile(null);
    setPreview(null);
    setDesignName('');
    setDesignDescription('');
  };

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
            <h3 className="text-lg font-medium mb-4">Upload Your Design</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                {preview ? (
                  <div className="space-y-4">
                    <img 
                      src={preview} 
                      alt="Design Preview" 
                      className="max-h-48 mx-auto object-contain"
                    />
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => setPreview(null)}
                      className="text-sm"
                    >
                      Change Image
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <div className="flex justify-center">
                      <Upload className="h-10 w-10 text-gray-400" />
                    </div>
                    <p className="text-gray-600">Drag and drop your design file, or</p>
                    <label className="inline-block">
                      <span className="bg-black text-white px-4 py-2 rounded-md cursor-pointer hover:bg-gray-800 text-sm">
                        Browse Files
                      </span>
                      <input 
                        type="file" 
                        className="hidden" 
                        accept="image/*" 
                        onChange={handleFileChange}
                      />
                    </label>
                    <p className="text-xs text-gray-500 mt-2">
                      Supported formats: PNG, JPG, SVG, PDF (max 10MB)
                    </p>
                  </div>
                )}
              </div>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="designName" className="block text-sm font-medium text-gray-700 mb-1">
                    Design Name
                  </label>
                  <input
                    type="text"
                    id="designName"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                    placeholder="Enter a name for your design"
                    value={designName}
                    onChange={(e) => setDesignName(e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    id="description"
                    rows={3}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm resize-none"
                    placeholder="Describe your design and any special requirements"
                    value={designDescription}
                    onChange={(e) => setDesignDescription(e.target.value)}
                  ></textarea>
                </div>
              </div>
              
              <div className="pt-2 flex gap-3">
                <Button 
                  type="submit" 
                  className="bg-black hover:bg-gray-800 text-white rounded-full flex items-center gap-2"
                  disabled={!selectedFile}
                >
                  <Send className="h-4 w-4" />
                  Send to WhatsApp
                </Button>
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={resetForm}
                  className="rounded-full"
                >
                  Reset
                </Button>
              </div>
            </form>
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
                alt="THRIVE Logo" 
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
