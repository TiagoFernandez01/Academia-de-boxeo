import React, { useState, useEffect } from 'react';

const ImageSlider = ({ images = [] }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (images.length === 0) return;

    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4500);

    return () => clearInterval(intervalId);
  }, [images]);

  if (images.length === 0) {
    return <div>No images available</div>;
  }

  return (
    <div
      className="flex justify-start mb-8"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0) 100%), url(${images[currentImageIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '50vh',
      }}>

      <div className='flex flex-col justify-start py-4 gap-4 ml-10 mt-10 md:ml-20 md:mt-20 lg:ml-44 lg:mt-16'>
        <p className='bg-red-800 font-roboto text-sm w-[120px] h-[30px] flex justify-center items-center text-white md:text-lg md:w-[150px] md:h-[35px]'>
          No te lo pierdas
        </p>
        <h3 className='text-3xl font-bebas md:text-4xl lg:text-5xl'>
          Próximo festival <br /> de boxeo el <br /> xx/xx/xxxx
        </h3>
        <p className='font-roboto text-lg md:text-semi  lg:text-lg'>
          Pedinos tu anticipadas!!
        </p>
      </div>
    </div>
  );
};

export default ImageSlider;