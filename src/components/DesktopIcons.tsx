
import { WindowType } from './Desktop';
import { Home, ShoppingCart, MessageCircle, Printer, FileImage } from 'lucide-react';
import DesktopIcon from './DesktopIcon';

interface DesktopIconsProps {
  windows: WindowType[];
  toggleWindow: (id: string) => void;
}

const DesktopIcons = ({ windows, toggleWindow }: DesktopIconsProps) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'welcome':
        return Home;
      case 'shop':
        return ShoppingCart;
      case 'contact':
        return MessageCircle;
      case 'printOnDemand':
        return Printer;
      case 'nftClothing':
        return FileImage;
      default:
        return Home;
    }
  };

  return (
    <div className="absolute top-4 left-4 grid grid-cols-1 gap-4">
      {windows.map((window) => (
        <DesktopIcon
          key={window.id}
          id={window.id}
          title={window.title}
          icon={getIcon(window.id)}
          toggleWindow={toggleWindow}
        />
      ))}
    </div>
  );
};

export default DesktopIcons;
