
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface DesktopIconProps {
  id: string;
  title: string;
  icon: LucideIcon;
  toggleWindow: (id: string) => void;
}

const DesktopIcon = ({ id, title, icon: Icon, toggleWindow }: DesktopIconProps) => {
  return (
    <div 
      id={`${id}-window-button`}
      className="flex flex-col items-center justify-center w-20 cursor-pointer group mb-2"
      onClick={() => toggleWindow(id)}
      onDoubleClick={() => toggleWindow(id)}
    >
      <div className="w-12 h-12 bg-gray-800 rounded-md flex items-center justify-center group-hover:bg-gray-700 transition-colors">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <span className="mt-1 text-sm text-white bg-gray-800/80 px-2 py-0.5 rounded group-hover:bg-gray-700/80 transition-colors">
        {title}
      </span>
    </div>
  );
};

export default DesktopIcon;
