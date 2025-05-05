
import { useState } from 'react';
import Taskbar from './Taskbar';
import WindowManager from './WindowManager';
import DesktopIcons from './DesktopIcons';
import { Toaster } from "sonner";

export type WindowType = {
  id: string;
  title: string;
  content: string;
  isOpen: boolean;
  zIndex: number;
  position: { x: number; y: number };
  size: { width: number; height: number };
};

const Desktop = () => {
  const [windows, setWindows] = useState<WindowType[]>([
    {
      id: 'welcome',
      title: 'Welcome',
      content: 'welcome',
      isOpen: true,
      zIndex: 1,
      position: { x: 50, y: 50 },
      size: { width: 600, height: 500 },
    },
    {
      id: 'shop',
      title: 'Shop',
      content: 'shop',
      isOpen: false,
      zIndex: 0,
      position: { x: 80, y: 70 },
      size: { width: 700, height: 500 },
    },
    {
      id: 'contact',
      title: 'Contact',
      content: 'contact',
      isOpen: false,
      zIndex: 0,
      position: { x: 110, y: 90 },
      size: { width: 500, height: 400 },
    },
    {
      id: 'printOnDemand',
      title: 'Print On Demand',
      content: 'printOnDemand',
      isOpen: false,
      zIndex: 0,
      position: { x: 140, y: 110 },
      size: { width: 600, height: 480 },
    },
    {
      id: 'nftClothing',
      title: 'NFT Clothing',
      content: 'nftClothing',
      isOpen: false,
      zIndex: 0,
      position: { x: 170, y: 130 },
      size: { width: 650, height: 520 },
    },
  ]);

  const toggleWindow = (id: string) => {
    setWindows(windows.map(window => {
      if (window.id === id) {
        return { ...window, isOpen: !window.isOpen, zIndex: Math.max(...windows.map(w => w.zIndex)) + 1 };
      }
      return window;
    }));
  };

  const bringToFront = (id: string) => {
    setWindows(windows.map(window => {
      if (window.id === id) {
        return { ...window, zIndex: Math.max(...windows.map(w => w.zIndex)) + 1 };
      }
      return window;
    }));
  };

  const moveWindow = (id: string, position: { x: number; y: number }) => {
    setWindows(windows.map(window => {
      if (window.id === id) {
        return { ...window, position };
      }
      return window;
    }));
  };

  const resizeWindow = (id: string, size: { width: number; height: number }) => {
    setWindows(windows.map(window => {
      if (window.id === id) {
        return { ...window, size };
      }
      return window;
    }));
  };

  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const currentDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric' 
  });

  return (
    <div className="h-screen w-screen bg-[#242424] overflow-hidden flex flex-col">
      <div className="h-7 bg-[#1A1A1A] flex items-center justify-between px-4 text-white text-xs">
        <div className="flex items-center gap-4">
          <img 
            src="/lovable-uploads/7b41f825-fde2-4b14-9a26-12f532c4be3f.png" 
            alt="THRIVE Logo" 
            className="h-4 w-4" 
          />
          <span>THRIVE Store</span>
          <span>Shop</span>
          <span>Contact</span>
          <span>Help</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="text-gray-400">Bangalore, India, Earth</span>
          </div>
          <span>{currentDate} {currentTime}</span>
        </div>
      </div>
      <div className="flex-1 relative">
        <DesktopIcons windows={windows} toggleWindow={toggleWindow} />
        <WindowManager 
          windows={windows} 
          bringToFront={bringToFront} 
          moveWindow={moveWindow} 
          resizeWindow={resizeWindow} 
          toggleWindow={toggleWindow} 
        />
        <Toaster position="top-right" />
      </div>
      <Taskbar windows={windows} toggleWindow={toggleWindow} />
    </div>
  );
};

export default Desktop;
