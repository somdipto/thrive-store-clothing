
import { useState } from 'react';
import Taskbar from './Taskbar';
import WindowManager from './WindowManager';
import DesktopIcons from './DesktopIcons';

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
      size: { width: 600, height: 400 },
    },
    {
      id: 'shop',
      title: 'Shop',
      content: 'shop',
      isOpen: false,
      zIndex: 0,
      position: { x: 100, y: 100 },
      size: { width: 700, height: 500 },
    },
    {
      id: 'lookbook',
      title: 'Lookbook',
      content: 'lookbook',
      isOpen: false,
      zIndex: 0,
      position: { x: 150, y: 150 },
      size: { width: 800, height: 600 },
    },
    {
      id: 'contact',
      title: 'Contact',
      content: 'contact',
      isOpen: false,
      zIndex: 0,
      position: { x: 200, y: 200 },
      size: { width: 500, height: 400 },
    },
    {
      id: 'printOnDemand',
      title: 'Print On Demand',
      content: 'printOnDemand',
      isOpen: false,
      zIndex: 0,
      position: { x: 250, y: 250 },
      size: { width: 600, height: 480 },
    },
    {
      id: 'nftClothing',
      title: 'NFT Clothing',
      content: 'nftClothing',
      isOpen: false,
      zIndex: 0,
      position: { x: 300, y: 300 },
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

  return (
    <div className="h-screen w-screen bg-gray-900 overflow-hidden flex flex-col">
      <div className="flex-1 relative">
        <DesktopIcons windows={windows} toggleWindow={toggleWindow} />
        <WindowManager 
          windows={windows} 
          bringToFront={bringToFront} 
          moveWindow={moveWindow} 
          resizeWindow={resizeWindow} 
          toggleWindow={toggleWindow} 
        />
      </div>
      <Taskbar windows={windows} toggleWindow={toggleWindow} />
    </div>
  );
};

export default Desktop;
