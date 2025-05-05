
import { WindowType } from './Desktop';
import { Home, ShoppingCart, MessageCircle, Printer, FileImage } from 'lucide-react';

interface DesktopIconsProps {
  windows: WindowType[];
  toggleWindow: (id: string) => void;
}

const DesktopIcons = ({ windows, toggleWindow }: DesktopIconsProps) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'welcome':
        return <Home className="h-6 w-6 text-white" />;
      case 'shop':
        return <ShoppingCart className="h-6 w-6 text-white" />;
      case 'contact':
        return <MessageCircle className="h-6 w-6 text-white" />;
      case 'printOnDemand':
        return <Printer className="h-6 w-6 text-white" />;
      case 'nftClothing':
        return <FileImage className="h-6 w-6 text-white" />;
      default:
        return <Home className="h-6 w-6 text-white" />;
    }
  };

  return (
    <div className="absolute top-4 left-4 grid grid-cols-1 gap-6">
      {windows.map((window) => (
        <div 
          key={window.id}
          className="flex flex-col items-center justify-center w-20 cursor-pointer group"
          onClick={() => toggleWindow(window.id)}
          onDoubleClick={() => toggleWindow(window.id)}
        >
          <div className="w-12 h-12 bg-gray-800 rounded-md flex items-center justify-center group-hover:bg-gray-700 transition-colors">
            {getIcon(window.id)}
          </div>
          <span className="mt-1 text-sm text-white bg-gray-800/80 px-2 py-0.5 rounded group-hover:bg-gray-700/80 transition-colors">
            {window.title}
          </span>
        </div>
      ))}
    </div>
  );
};

export default DesktopIcons;
