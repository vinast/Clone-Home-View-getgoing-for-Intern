import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Testimonial = () => {
  const testimonials = [
    {
      image: "../../public/nadia.jpeg",
      alt: "Herlika & Johan",
      title: "Keluar negeri pertama kali tanpa rasa khawatir",
      description:
        "Gerbang pikir terbuka keluar negeri tanpa rasa khawatir dan benar-benar terasa kayak duma punya kami berdua. Apapun ada aplikasinya juga yang bisa dipakai untuk mempelajari kota dengan informasinya yang cukup lengkap. Bintang 5 pokoknya",
      name: "Herlika & Johan",
      role: "ENTREPRENEUR",
    },
    {
      image: "../../public/nili.jpg",
      alt: "City view",
      title: "Pengalaman tak terlupakan di Eropa",
      description: "Perjalanan yang sangat menyenangkan dan penuh dengan pengalaman baru. Aplikasi ini sangat membantu dalam menemukan tempat-tempat menarik dan informasi yang dibutuhkan. Sangat direkomendasikan!",
      name: "Nadia",
      role: "ENTREPRENEUR",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <div className="w-full mx-auto py-16 px-4 md:px-8 lg:px-16">
      <h2 className="text-4xl font-bold mb-2 text-center">
        Kata <span className="text-red-600">Mereka</span>
      </h2>
      <p className="text-gray-400 mb-8 text-center">Cerita dari mereka yang telah menjelajahi Eropa bersama kami</p>

      <div className="flex flex-col md:flex-row items-center mb-8">
        <div className="w-full md:w-1/2 md:pr-8 relative">
          <img src="../../public/petikdua.png" alt="petikdua" className="absolute top-0 left-0 w-8 h-8 md:w-16 md:h-16 lg:w-32 lg:h-32" />
          <div className="relative mt-10 z-10 pl-4 md:pl-16 pt-8 text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">{testimonials[activeIndex].title}</h3>
            <p className="text-gray-600 mb-4">{testimonials[activeIndex].description}</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <div className="bg-white shadow-md rounded-lg overflow-hidden mb-4">
            <img src={testimonials[activeIndex].image} alt={testimonials[activeIndex].alt} className="w-full h-80 object-cover" />
            <div className="p-4 text-center">
              <h4 className="font-bold text-lg">{testimonials[activeIndex].name}</h4>
              <p className="text-gray-500 uppercase text-sm">{testimonials[activeIndex].role}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <button onClick={handlePrev} className="mr-2 text-gray-400 hover:text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button onClick={handleNext} className="text-gray-400 hover:text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
