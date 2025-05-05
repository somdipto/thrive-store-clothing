
import { WindowType } from './Desktop';

interface TaskbarProps {
  windows: WindowType[];
  toggleWindow: (id: string) => void;
}

const Taskbar = ({ windows, toggleWindow }: TaskbarProps) => {
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
  return (
    <div className="h-12 bg-gray-800 border-t border-gray-700 flex items-center px-2 justify-between">
      <div className="flex items-center space-x-1">
        <button 
          className="h-10 w-10 flex items-center justify-center rounded hover:bg-gray-700"
          onClick={() => toggleWindow('welcome')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </button>
        
        {windows.filter(window => window.isOpen).map(window => (
          <button 
            key={window.id} 
            className="h-10 min-w-[120px] px-3 flex items-center rounded bg-gray-700 text-white text-sm"
            onClick={() => toggleWindow(window.id)}
          >
            {window.title}
          </button>
        ))}
      </div>
      
      <div className="text-white text-sm bg-gray-700 px-3 py-1 rounded">
        {currentTime}
      </div>
    </div>
  );
};

export default Taskbar;
