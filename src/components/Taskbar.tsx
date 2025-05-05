
import { WindowType } from './Desktop';
import { ShoppingCart, Printer, Contact } from 'lucide-react';

interface TaskbarProps {
  windows: WindowType[];
  toggleWindow: (id: string) => void;
}

const Taskbar = ({ windows, toggleWindow }: TaskbarProps) => {
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
  const getWindowIcon = (id: string) => {
    switch(id) {
      case 'shop':
        return <ShoppingCart className="h-5 w-5 text-white" />;
      case 'printOnDemand':
        return <Printer className="h-5 w-5 text-white" />;
      case 'contact':
        return <Contact className="h-5 w-5 text-white" />;
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        );
    }
  };
  
  return (
    <div className="h-12 bg-black border-t border-gray-800 flex items-center px-2 justify-between">
      <div className="flex items-center space-x-1">
        <button 
          className="h-10 w-10 flex items-center justify-center rounded hover:bg-gray-800"
          onClick={() => toggleWindow('welcome')}
        >
          <img 
            src="/lovable-uploads/7b41f825-fde2-4b14-9a26-12f532c4be3f.png" 
            alt="THRIVE Logo" 
            className="h-6 w-6" 
          />
        </button>
        
        {windows.filter(window => window.isOpen).map(window => (
          <button 
            key={window.id} 
            className="h-10 px-3 flex items-center gap-2 rounded bg-gray-800 text-white text-sm"
            onClick={() => toggleWindow(window.id)}
          >
            {getWindowIcon(window.id)}
            <span className="hidden sm:inline">{window.title}</span>
          </button>
        ))}
      </div>
      
      <div className="text-white text-sm bg-gray-800 px-3 py-1 rounded">
        {currentTime}
      </div>
    </div>
  );
};

export default Taskbar;
