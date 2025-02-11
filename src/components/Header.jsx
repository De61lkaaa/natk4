import React from "react";
import Button from "./Button";
import Switch from "./Switch"; // Импортируем Switch

const Header = ({ onLogout, isSwitchOn, handleSwitchChange, handleToggle }) => {
  return (
    <header className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white px-8 py-4 flex justify-between items-center shadow-xl">
      <h1 className="text-4xl font-extrabold tracking-wide drop-shadow-lg">
        Колледж имени Барсука Кирилла Денисовича
      </h1>

      <div className="flex items-center space-x-6">
        <Switch
          text="Уведомления"
          isChecked={isSwitchOn}
          onChange={handleSwitchChange}
          onToggle={handleToggle}
          bgColor={isSwitchOn ? "bg-blue-500" : "bg-red-500"}
          textColor="text-white"
          position="relative"
        />

        <Button
          onClick={onLogout}
          text="Выйти"
          className="py-3 px-8 bg-red-600 hover:bg-red-700 text-lg font-bold rounded-lg shadow-lg transition-transform transform hover:scale-110"
        />
      </div>
    </header>
  );
};

export default Header;
