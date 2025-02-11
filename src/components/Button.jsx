import React from 'react';

const Button = ({
  onClick,
  text,
  className = '',
  bgColor = 'bg-gradient-to-r from-blue-600 to-indigo-600',
  textColor = 'text-white',
  isActive = true,
  position = '',
  onButtonClick,
}) => {
  const handleClick = () => {
    if (onButtonClick) {
      onButtonClick();
    }
    onClick();
  };

  return (
    <button
      onClick={handleClick}
      disabled={!isActive}
      className={`
        ${bgColor} 
        ${textColor} 
        ${position}
        relative 
        overflow-hidden 
        group
        py-3 
        px-8 
        rounded-lg 
        font-semibold
        uppercase
        tracking-wide
        transform 
        hover:scale-105 
        transition-all 
        duration-300 
        hover:shadow-xl 
        hover:shadow-indigo-500/50
        ${className}
        ${!isActive ? 'opacity-50 cursor-not-allowed' : ''}
      `}
    >
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
      <span className="relative z-10">{text}</span>
    </button>
  );
};

export default Button;