// src/components/Switch.jsx
import React from 'react';

const Switch = ({
  text = '',
  isChecked,
  onChange,
  onToggle,
  bgColor = 'bg-gray-300',
  textColor = 'text-white',
  position = 'static',
}) => {
  const handleChange = (e) => {
    onChange(e);
    if (onToggle) {
      onToggle(e.target.checked);
    }
  };

  return (
    <div className={`flex items-center ${position}`}>
      <span className={`${textColor} mr-3 text-lg font-medium`}>
        {text}
      </span>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
          className="sr-only peer"
        />
        <div
          className={`
            w-12 h-6 bg-gray-400 peer-focus:ring-4 peer-focus:ring-blue-500 
            rounded-full peer peer-checked:after:translate-x-6 peer-checked:after:border-white 
            after:content-[''] after:absolute after:top-0.5 after:left-0.5 
            after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 
            after:transition-all peer-checked:bg-blue-600
          `}
        ></div>
      </label>
    </div>
  );
};

export default Switch;