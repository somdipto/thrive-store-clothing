
import { useState } from 'react';
import { WindowType } from './Desktop';
import WelcomeWindow from './windows/WelcomeWindow';
import ShopWindow from './windows/ShopWindow';
import ContactWindow from './windows/ContactWindow';
import PrintOnDemandWindow from './windows/PrintOnDemandWindow';
import NFTClothingWindow from './windows/NFTClothingWindow';
import { X, Minus, ChevronsUpDown } from 'lucide-react';

interface WindowManagerProps {
  windows: WindowType[];
  bringToFront: (id: string) => void;
  moveWindow: (id: string, position: { x: number; y: number }) => void;
  resizeWindow: (id: string, size: { width: number; height: number }) => void;
  toggleWindow: (id: string) => void;
}

const WindowManager = ({ windows, bringToFront, moveWindow, resizeWindow, toggleWindow }: WindowManagerProps) => {
  const [dragging, setDragging] = useState<string | null>(null);
  const [resizing, setResizing] = useState<string | null>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [initialSize, setInitialSize] = useState({ width: 0, height: 0 });
  const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });
  const [initialMousePos, setInitialMousePos] = useState({ x: 0, y: 0 });
  const [isMinimized, setIsMinimized] = useState<Record<string, boolean>>({});

  const getWindowContent = (contentType: string) => {
    switch (contentType) {
      case 'welcome':
        return <WelcomeWindow />;
      case 'shop':
        return <ShopWindow />;
      case 'contact':
        return <ContactWindow />;
      case 'printOnDemand':
        return <PrintOnDemandWindow />;
      case 'nftClothing':
        return <NFTClothingWindow />;
      default:
        return <div>Window content not found</div>;
    }
  };

  const handleMouseDown = (e: React.MouseEvent, id: string) => {
    bringToFront(id);
    const window = windows.find(w => w.id === id);
    if (window) {
      setDragging(id);
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  const handleResizeMouseDown = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    bringToFront(id);
    const window = windows.find(w => w.id === id);
    if (window) {
      setResizing(id);
      setInitialSize(window.size);
      setInitialPosition(window.position);
      setInitialMousePos({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (dragging) {
      const window = windows.find(w => w.id === dragging);
      if (window) {
        moveWindow(dragging, {
          x: e.clientX - dragOffset.x,
          y: e.clientY - dragOffset.y
        });
      }
    } else if (resizing) {
      const window = windows.find(w => w.id === resizing);
      if (window) {
        const deltaX = e.clientX - initialMousePos.x;
        const deltaY = e.clientY - initialMousePos.y;
        
        resizeWindow(resizing, {
          width: Math.max(200, initialSize.width + deltaX),
          height: Math.max(100, initialSize.height + deltaY)
        });
      }
    }
  };

  const handleMouseUp = () => {
    setDragging(null);
    setResizing(null);
  };

  const toggleMinimize = (id: string) => {
    setIsMinimized(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div 
      className="absolute top-0 left-0 w-full h-full"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {windows.filter(window => window.isOpen).map(window => (
        <div 
          key={window.id}
          className="absolute bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden flex flex-col"
          style={{
            left: `${window.position.x}px`,
            top: `${window.position.y}px`,
            width: `${window.size.width}px`,
            height: isMinimized[window.id] ? '32px' : `${window.size.height}px`,
            zIndex: window.zIndex,
            transition: 'height 0.2s ease'
          }}
          onClick={() => bringToFront(window.id)}
        >
          <div 
            className="bg-[#f6f6f6] h-8 flex items-center justify-between px-2 cursor-move border-b border-gray-200"
            onMouseDown={(e) => handleMouseDown(e, window.id)}
          >
            <div className="flex items-center gap-1.5 ml-1">
              <div className="h-3 w-3 bg-[#ff5f57] rounded-full hover:bg-red-500 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleWindow(window.id);
                }}
              ></div>
              <div className="h-3 w-3 bg-[#febc2e] rounded-full hover:bg-yellow-500 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleMinimize(window.id);
                }}
              ></div>
              <div className="h-3 w-3 bg-[#28c840] rounded-full hover:bg-green-600 cursor-pointer"></div>
            </div>
            <div className="text-gray-700 text-sm font-medium absolute left-1/2 transform -translate-x-1/2">
              {window.title}
            </div>
          </div>
          <div className={`flex-1 overflow-auto bg-white p-4 ${isMinimized[window.id] ? 'hidden' : ''}`}>
            {getWindowContent(window.content)}
          </div>
          {!isMinimized[window.id] && (
            <div 
              className="absolute bottom-0 right-0 w-4 h-4 cursor-nwse-resize"
              onMouseDown={(e) => handleResizeMouseDown(e, window.id)}
            >
              <svg className="text-gray-400 h-4 w-4" viewBox="0 0 16 16" fill="currentColor">
                <path d="M11 9h1v1h-1v-1zm2-5h1v1h-1V4zm-2 3h1v1h-1V7zm2-3h1v1h-1V4zm-2 3h1v1h-1V7zm2 0h1v1h-1V7zM8 4h1v1H8V4zm2 0h1v1h-1V4zM8 7h1v1H8V7zm2-3h1v1h-1V4zm-2 3h1v1H8V7zm2 0h1v1h-1V7z" />
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default WindowManager;
