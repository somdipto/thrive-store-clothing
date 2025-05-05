
import { useState, useRef } from 'react';
import { WindowType } from './Desktop';
import WelcomeWindow from './windows/WelcomeWindow';
import ShopWindow from './windows/ShopWindow';
import LookbookWindow from './windows/LookbookWindow';
import ContactWindow from './windows/ContactWindow';
import PrintOnDemandWindow from './windows/PrintOnDemandWindow';
import NFTClothingWindow from './windows/NFTClothingWindow';

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

  const getWindowContent = (contentType: string) => {
    switch (contentType) {
      case 'welcome':
        return <WelcomeWindow />;
      case 'shop':
        return <ShopWindow />;
      case 'lookbook':
        return <LookbookWindow />;
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
          className="absolute bg-gray-800 border border-gray-700 rounded shadow-lg overflow-hidden flex flex-col"
          style={{
            left: `${window.position.x}px`,
            top: `${window.position.y}px`,
            width: `${window.size.width}px`,
            height: `${window.size.height}px`,
            zIndex: window.zIndex
          }}
        >
          <div 
            className="bg-gray-800 h-8 flex items-center justify-between px-2 cursor-move"
            onMouseDown={(e) => handleMouseDown(e, window.id)}
          >
            <div className="text-white font-medium">{window.title}</div>
            <div className="flex items-center space-x-1">
              <button 
                className="h-5 w-5 flex items-center justify-center rounded-full hover:bg-gray-700 text-white"
                onClick={() => toggleWindow(window.id)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex-1 overflow-auto bg-white p-4">
            {getWindowContent(window.content)}
          </div>
          <div 
            className="absolute bottom-0 right-0 w-4 h-4 cursor-nwse-resize"
            onMouseDown={(e) => handleResizeMouseDown(e, window.id)}
          >
            <svg className="text-gray-400 h-4 w-4" viewBox="0 0 16 16" fill="currentColor">
              <path d="M11 9h1v1h-1v-1zm2-5h1v1h-1V4zm-2 3h1v1h-1V7zm2-3h1v1h-1V4zm-2 3h1v1h-1V7zm2 0h1v1h-1V7zM8 4h1v1H8V4zm2 0h1v1h-1V4zM8 7h1v1H8V7zm2-3h1v1h-1V4zm-2 3h1v1H8V7zm2 0h1v1h-1V7z" />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WindowManager;
