import React from 'react';

const Input = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  className = '',
  bgColor = 'bg-white',
  textColor = 'text-black',
  isActive = true,
  position = '',
  onValueChange,
}) => {
  const handleChange = (e) => {
    onChange(e);
    if (onValueChange) {
      onValueChange(e.target.value);
    }
  };

  return (
    <input
      type={type}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      disabled={!isActive}
      className={`
        ${bgColor} 
        ${textColor} 
        ${position}
        w-full 
        px-4 
        py-3 
        border 
        border-gray-400 
        rounded-lg 
        focus:outline-none 
        focus:ring-2 
        focus:ring-blue-500 
        transition-all
        duration-300
        shadow-sm
        hover:shadow-md
        ${className}
        ${!isActive ? 'opacity-50 cursor-not-allowed' : ''}
      `}
    />
  );
};

export default Input;