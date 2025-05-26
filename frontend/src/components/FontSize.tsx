import React from "react";

interface FontSizeControlsProps {
  onSizeChange: (isLarge: boolean) => void;
}

const FontSizeControls: React.FC<FontSizeControlsProps> = ({ 
  onSizeChange 
}) => {
  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2">
      <button
        onClick={() => onSizeChange(true)}
        className="px-6 py-3 rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors"
      >
        A+
      </button>
      <button
        onClick={() => onSizeChange(false)}
        className="px-6 py-3 rounded bg-gray-600 text-white hover:bg-gray-700 transition-colors"
      >
        A-
      </button>
    </div>
  );
};

export default FontSizeControls;