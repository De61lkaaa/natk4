"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Switch from "../../components/Switch";
import Image from "next/image";
import useAuth from "../../hooks/useAuth";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="absolute top-1/2 right-4 transform -translate-y-1/2 w-14 h-14 flex items-center justify-center bg-blue-600/90 text-white rounded-full cursor-pointer z-10 shadow-lg hover:bg-blue-700 transition-all duration-300"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.5}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="absolute top-1/2 left-4 transform -translate-y-1/2 w-14 h-14 flex items-center justify-center bg-blue-600/90 text-white rounded-full cursor-pointer z-10 shadow-lg hover:bg-blue-700 transition-all duration-300"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.5}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  );
};

const MainPage = () => {
  const { isAuthenticated, loading } = useAuth();
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Загрузка...
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  const handleLogout = () => {
    localStorage.removeItem("login");
    localStorage.removeItem("password");
    window.location.href = "/";
  };

  const handleSwitchChange = (e) => {
    setIsSwitchOn(e.target.checked);
  };

  const handleToggle = (checked) => {
    console.log("Switch is now", checked ? "ON" : "OFF");
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    dotsClass: "slick-dots custom-dots",
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-900 via-indigo-800 to-blue-900">
      <Header
        onLogout={handleLogout}
        isSwitchOn={isSwitchOn}
        handleSwitchChange={handleSwitchChange}
        handleToggle={handleToggle}
      />
      <div className="w-full h-[600px] md:h-[500px] sm:h-[400px] relative">
        <Image
          src="/images/college1.jpg" // Замени на нужное изображение
          alt="Главное изображение"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h3 className="text-4xl text-white font-extrabold tracking-wide shadow-lg">
            НАТК
          </h3>
        </div>
      </div>

      <main className="flex-grow container mx-auto px-8 py-16">
        <section className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
            История колледжа
          </h2>
        </section>
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-8 drop-shadow-lg">
            Подробная история
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-xl p-8 rounded-lg shadow-2xl transition transform hover:-translate-y-2 hover:scale-105">
              <h3 className="text-3xl font-bold text-white mb-2">Начало</h3>
              <p className="text-lg text-gray-200">
              В 1929 году был открыт Новосибирский машиностроительный техникум. В 1937 году учебное заведение переходит под управление Наркома оборонной промышленности, техникум переименовывают в авиационный.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-xl p-8 rounded-lg shadow-2xl transition transform hover:-translate-y-2 hover:scale-105">
              <h3 className="text-3xl font-bold text-white mb-2">Развитие</h3>
              <p className="text-lg text-gray-200">
              С 1938 по 1940 год ведётся строительство учебного корпуса учреждения, в котором принимают активное участие преподаватели и учащиеся техникума.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-xl p-8 rounded-lg shadow-2xl transition transform hover:-translate-y-2 hover:scale-105">
              <h3 className="text-3xl font-bold text-white mb-2">
                Современность
              </h3>
              <p className="text-lg text-gray-200">
              В 1991 году техникум получает статус колледжа, в этом же году учреждение было включено в состав НАПО им. В. П. Чкалова на правах юридического лица.
              </p>
            </div>
          </div>
        </section>
        <section className="text-center mb-12">
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MainPage;
