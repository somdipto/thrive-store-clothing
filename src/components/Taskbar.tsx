
import { WindowType } from './Desktop';
import { ShoppingCart, Printer, MessageCircle, Home, FileImage } from 'lucide-react';

interface TaskbarProps {
  windows: WindowType[];
  toggleWindow: (id: string) => void;
}

const Taskbar = ({ windows, toggleWindow }: TaskbarProps) => {
  const getWindowIcon = (id: string) => {
    switch(id) {
      case 'welcome':
        return <Home className="h-5 w-5" />;
      case 'shop':
        return <ShoppingCart className="h-5 w-5" />;
      case 'printOnDemand':
        return <Printer className="h-5 w-5" />;
      case 'contact':
        return <MessageCircle className="h-5 w-5" />;
      case 'nftClothing':
        return <FileImage className="h-5 w-5" />;
      default:
        return <Home className="h-5 w-5" />;
    }
  };
  
  return (
    <div className="h-14 bg-[#242424]/80 backdrop-blur-sm flex items-center px-3 justify-center">
      <div className="flex items-center gap-2 bg-[#1A1A1A]/70 rounded-lg h-10 px-1">
        {windows.map(window => (
          <button 
            key={window.id} 
            className={`h-9 w-9 flex items-center justify-center rounded-lg transition-colors ${window.isOpen ? 'bg-gray-600/50' : 'hover:bg-gray-700/40'}`}
            onClick={() => toggleWindow(window.id)}
            title={window.title}
          >
            <div className="text-white">
              {getWindowIcon(window.id)}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Taskbar;
