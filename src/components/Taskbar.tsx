
import { WindowType } from './Desktop';
import { ShoppingCart, Printer, Contact, FileText } from 'lucide-react';

interface TaskbarProps {
  windows: WindowType[];
  toggleWindow: (id: string) => void;
}

const Taskbar = ({ windows, toggleWindow }: TaskbarProps) => {
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
  const getWindowIcon = (id: string) => {
    switch(id) {
      case 'shop':
        return <ShoppingCart className="h-5 w-5" />;
      case 'printOnDemand':
        return <Printer className="h-5 w-5" />;
      case 'contact':
        return <Contact className="h-5 w-5" />;
      case 'nftClothing':
        return <FileText className="h-5 w-5" />;
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        );
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
