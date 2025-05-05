
import { WindowType } from './Desktop';

interface DesktopIconsProps {
  windows: WindowType[];
  toggleWindow: (id: string) => void;
}

const DesktopIcons = ({ windows, toggleWindow }: DesktopIconsProps) => {
  const icons = [
    { id: 'welcome', label: 'Welcome', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { id: 'shop', label: 'Shop', icon: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z' },
    { id: 'lookbook', label: 'Lookbook', icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' },
    { id: 'contact', label: 'Contact', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
  ];

  return (
    <div className="absolute top-4 left-4 grid grid-cols-1 gap-6">
      {icons.map((icon) => (
        <div 
          key={icon.id}
          className="flex flex-col items-center justify-center w-20 cursor-pointer group"
          onClick={() => toggleWindow(icon.id)}
          onDoubleClick={() => toggleWindow(icon.id)}
        >
          <div className="w-12 h-12 bg-gray-800 rounded-md flex items-center justify-center group-hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon.icon} />
            </svg>
          </div>
          <span className="mt-1 text-sm text-white bg-gray-800 px-2 rounded group-hover:bg-gray-700">
            {icon.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default DesktopIcons;
